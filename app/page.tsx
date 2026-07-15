"use client";

import { buffs } from "../data/buffs";
import {
  simulateBattle
} from "../data/battle/simulateBattle";
import {
  BattleEvent
} from "../data/battle/events";
import {
  initialBattleState
} from "../data/battle/initialState";
import { useEffect, useState } from "react";
import BuildForm from "./components/BuildForm";
import SkillSelector from "./components/SkillSelector";
import EventPopup from "./components/EventPopup";

import { jobSkills } from "../data/jobSkills";
import { Skill, skills } from "../data/skills";
import { artifacts } from "../data/artifacts";
import { mounts } from "../data/mounts";
import { backs } from "../data/backs";
import { companions } from "../data/companions";
import { spirits } from "../data/spirits";

export default function Home() {
  const [selectedJob, setSelectedJob] = useState("yashin");
  const [buildName, setBuildName] = useState("");
  const [relic, setRelic] = useState<
  "none" | "time" | "star"
>("none");
const [selectedArtifact, setSelectedArtifact] =
  useState("none");

const [selectedMount, setSelectedMount] =
  useState("none");

const [selectedBack, setSelectedBack] =
  useState("none");
const [battleState, setBattleState] =
  useState(initialBattleState);
  const [battleEvents, setBattleEvents] =
  useState<BattleEvent[]>([]);
  const [battleResult, setBattleResult] =
  useState<
    {
      time:number;
      state:{
        attack:number;
        attackSpeed:number;
        energySpeed:number;
        moveSpeed:number;
      };
      event:string;
    }[]
  >([]);
  const [showBattleResult, setShowBattleResult] =
  useState(false);

  const [selectedSkills, setSelectedSkills] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);

  const [skillStartTimes, setSkillStartTimes] = useState([
    0,
    0,
    0,
    0,
    0,
  ]);

  const [jobSkillStartTime, setJobSkillStartTime] =
    useState(0);

  const [energyBuff, setEnergyBuff] =
    useState(0);

    const [selectedBuffs, setSelectedBuffs] =
  useState<string[]>([]);

const [myMoveSpeed, setMyMoveSpeed] =
  useState(100);

const [enemyMoveSpeed, setEnemyMoveSpeed] =
  useState(100);

const [selectedEvent, setSelectedEvent] =
useState<{
  time:number;
  name:string;
  cooldown:number;
  duration:number;
  color?:string;
  index:number;
  id:string;
} | null>(null);

  const selectedSkillData = selectedSkills
    .map((id) =>
      skills.find((skill) => skill.id === id)
    )
    .filter(
      (skill): skill is Skill =>
        skill !== undefined
    );

  const selectedJobSkill =
    jobSkills.find(
      (skill) => skill.jobId === selectedJob
    );

const artifact =
  artifacts.find(a => a.id === selectedArtifact);

const mount =
  mounts.find(m => m.id === selectedMount);

const back =
  backs.find(b => b.id === selectedBack);

const equipmentEnergy =
  (artifact?.energy ?? 0) +
  (mount?.energy ?? 0) +
  (back?.energy ?? 0);

const equipmentMoveSpeed =
  (artifact?.moveSpeed ?? 0) +
  (mount?.moveSpeed ?? 0) +
  (back?.moveSpeed ?? 0);

  const equipmentEnemyMoveSpeed =
  (artifact?.enemyMoveSpeed ?? 0) +
  (mount?.enemyMoveSpeed ?? 0) +
  (back?.enemyMoveSpeed ?? 0);
  const totalMyMoveSpeed =
  myMoveSpeed +
  equipmentMoveSpeed;


  const totalEnemyMoveSpeed =
  enemyMoveSpeed +
  equipmentEnemyMoveSpeed;

  const [previousEquipmentEnergy, setPreviousEquipmentEnergy] =
  useState(0);

useEffect(() => {
  const diff =
    equipmentEnergy - previousEquipmentEnergy;

  if (diff !== 0) {
    setEnergyBuff((prev) =>
      Math.max(0, prev + diff)
    );

    setPreviousEquipmentEnergy(
      equipmentEnergy
    );
  }
}, [
  equipmentEnergy,
  previousEquipmentEnergy,
]);

  const allSkills = [
    selectedJobSkill
      ? {
          ...selectedJobSkill,
          startTime: jobSkillStartTime,
        }
      : undefined,
     
    ...selectedSkillData.map(
      (skill, index) => ({
        ...skill,
        startTime: skillStartTimes[index],
      })
    ),
  ].filter((skill) => skill !== undefined);

const getEnergySpeedAtTime = (time:number) => {

  let speed = energyBuff;


  // ドドン太鼓（騎乗）
  if (mount?.dodon) {

  const stack =
  Math.min(
    Math.floor(time / 10),
    6
  );

    speed += stack * 4;
  }


  return speed;
};



  const timeline = allSkills
    .flatMap((skill, index) => {
const events = [];

let currentTime =
  skill.startTime ?? 0;


while (
  currentTime <= 120
) {

let duration = skill.duration;

  events.push({
    time: currentTime,
    name: skill.name,
    cooldown: skill.cooldown,
    duration,
    index,
    id: skill.id,
    color: skill.color,
  });


  currentTime +=
  skill.useTime +
  skill.cooldown /
  ((100 + getEnergySpeedAtTime(currentTime)) / 100);
}

    while (currentTime <= 120) {

      const energySpeed =
        getEnergySpeedAtTime(currentTime);


      const finalSpeed =
        (100 + energySpeed) / 100;


      const interval =
        skill.useTime +
        skill.cooldown / finalSpeed;


      let duration = skill.duration;


      // 時の彫像
      if (
        relic === "time" &&
        [
          "武装解除",
          "眩暈失神",
          "煙幕弾"
        ].includes(skill.name)
      ) {
        duration *= 1.5;
      }


      // 星羅彫像
      if (
        relic === "star" &&
        [
          "百斬千鎖",
          "天下の罠"
        ].includes(skill.name)
      ) {
        duration *= 1.5;
      }


      events.push({
        time: currentTime,
        name: skill.name,
        cooldown: skill.cooldown,
        duration,
        index,
        id: skill.id,
        color: skill.color,
      });


    }


    return events;

  })
  .sort((a,b)=>a.time-b.time);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          🍄 キノコ伝説 技能遅延シミュレーター β0.1 🍄
        </h1>

       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-5">

  <BuildForm
    buildName={buildName}
    setBuildName={setBuildName}
    selectedJob={selectedJob}
    setSelectedJob={setSelectedJob}
    selectedJobSkill={selectedJobSkill}
    jobSkillStartTime={jobSkillStartTime}
    setJobSkillStartTime={setJobSkillStartTime}
  />

  <SkillSelector
  selectedSkills={selectedSkills}
  setSelectedSkills={setSelectedSkills}
  skillStartTimes={skillStartTimes}
  setSkillStartTimes={setSkillStartTimes}
/>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label className="block font-semibold mb-1">
                エネルギー回復速度バフ(%)
              </label>

   <input
  type="number"
  min={equipmentEnergy}
  value={energyBuff}
  onChange={(e) =>
    setEnergyBuff(
      Math.max(
        equipmentEnergy,
        Number(e.target.value)
      )
    )
  }
  className="w-full border rounded-lg p-2"
/>

<label className="block font-semibold mb-1 mt-4">
  自身移動速度(%)
</label>

<input
  type="number"
 value={totalMyMoveSpeed}readOnly
  onChange={(e) =>
    setMyMoveSpeed(Number(e.target.value))
  }
  className="w-full border rounded-lg p-2"
/>

<label className="block font-semibold mb-1 mt-4">
  相手移動速度(%)
</label>

<input
  type="number"
 value={totalEnemyMoveSpeed}readOnly
  onChange={(e) =>
    setEnemyMoveSpeed(Number(e.target.value))
  }
  className="w-full border rounded-lg p-2"
/>

            </div>

            <div>
             <div>
  <label className="block font-semibold mb-1">
    遺物
  </label>

  
  <select
    value={relic}
    onChange={(e) =>
      setRelic(
        e.target.value as
          "none" | "time" | "star"
      )
    }
    className="w-full border rounded-lg p-2"
  >
    <option value="none">
      なし
    </option>

    <option value="time">
      時の彫像
    </option>

    <option value="star">
      星羅彫像
    </option>

  </select>

<div className="grid grid-cols-3 gap-4 mt-4">

  {/* 神器 */}
  <div>
    <label className="block font-semibold mb-1">
      神器
    </label>

    <select
      value={selectedArtifact}
      onChange={(e) =>
        setSelectedArtifact(e.target.value)
      }
      className="w-full border rounded-lg p-2"
    >
      {artifacts.map((artifact) => (
        <option
          key={artifact.id}
          value={artifact.id}
        >
          {artifact.name}
        </option>
      ))}
    </select>
  </div>

  {/* 騎乗 */}
  <div>
    <label className="block font-semibold mb-1">
      騎乗
    </label>

    <select
      value={selectedMount}
      onChange={(e) =>
        setSelectedMount(e.target.value)
      }
      className="w-full border rounded-lg p-2"
    >
      {mounts.map((mount) => (
        <option
          key={mount.id}
          value={mount.id}
        >
          {mount.name}
        </option>
      ))}
    </select>
  </div>

  {/* 背飾り */}
  <div>
    <label className="block font-semibold mb-1">
      背飾り
    </label>

    <select
      value={selectedBack}
      onChange={(e) =>
        setSelectedBack(e.target.value)
      }
      className="w-full border rounded-lg p-2"
    >
      {backs.map((back) => (
        <option
          key={back.id}
          value={back.id}
        >
          {back.name}
        </option>
      ))}
    </select>
  </div>

</div>

</div>
         
            </div>
          </div>

        </div>

<div className="mt-6">

<h3 className="font-semibold mb-2">
  背飾り能力
</h3>


<div className="grid grid-cols-2 gap-3">

{buffs
.filter(
  (buff) =>
    [
      "ascension",
      "charge",
      "rapid",
      "timeControl",
    ].includes(buff.id)
)
.map((buff)=>(
<label
 key={buff.id}
 className="flex items-center gap-2"
>

<input
 type="checkbox"
 checked={
 selectedBuffs.includes(buff.id)
 }
 onChange={()=>{
  setSelectedBuffs((prev)=>
    prev.includes(buff.id)

    ?

    prev.filter(
      id=>id!==buff.id
    )

    :

    [
      ...prev,
      buff.id
    ]
  )
 }}
/>

{buff.name}

</label>
))}

</div>

</div>

       <div className="mt-8 bg-white rounded-xl shadow-lg p-6">

<button
  onClick={() => {
    setBattleResult(
      simulateBattle(
        60,
        selectedBuffs
      )
    );

    setShowBattleResult(true);
  }}
  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
>
  戦闘シミュレーション開始
</button>

{showBattleResult && (

<div className="mt-4">

<div className="flex justify-between items-center">

<h3 className="font-bold">
  バフ履歴
</h3>


<button
  onClick={() =>
    setShowBattleResult(false)
  }
  className="bg-gray-400 text-white px-3 py-1 rounded"
>
  閉じる
</button>

</div>


{battleResult.map((result,index)=>(
  <div
    key={index}
    className="border-b py-2"
  >

    {result.time}秒：
    {result.event}

    <br/>

    攻撃:
    {result.state.attack}%

   　
    攻撃速度:
    {result.state.attackSpeed}%

   　
    エネルギー:
    {result.state.energySpeed}%

  </div>
))}

</div>

)}
  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
    タイムライン
  </h2>

  <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">
    発動タイミング
  </h3>

 <div className="overflow-x-auto border rounded-lg">

  {/* 秒数 */}
  <div className="flex w-[2000px] border-b">
    {Array.from({ length: 25 }).map((_, i) => (
      <div
        key={i}
        className="w-[75px] text-center text-xs border-r py-2 text-gray-700 dark:text-gray-200"
      >
        {i * 5}s
      </div>
    ))}
  </div>

  {/* タイムライン本体 */}
  <div className="w-[2000px] min-h-[380px] bg-gray-50 dark:bg-gray-900 relative">

  {timeline.map((event, index) => (
    <button
      key={index}
      onClick={() => setSelectedEvent(event)}
      className={`absolute h-8 rounded text-xs text-white px-2 flex items-center justify-center ${event.color}`}
style={{
  left: `${event.time * 15}px`,
  top: `${event.index * 60 + 20}px`,
  width: `${event.duration * 15}px`,
}}
    >
      {event.name}
    </button>
  ))}

</div> {/* ← タイムライン本体 */}

</div> {/* ← overflow-x-auto */}

</div> {/* ← 白いカード(mt-8 bg-white...) */}

<EventPopup
  selectedEvent={selectedEvent}
  onClose={() => setSelectedEvent(null)}
/>
      </div> {/* max-w-6xl */}

    </main>
  );
}