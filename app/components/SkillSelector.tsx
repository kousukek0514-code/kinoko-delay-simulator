"use client";

import React from "react";
import { skills } from "@/data/skills";

type Props = {
  selectedSkills: string[];
  setSelectedSkills: React.Dispatch<React.SetStateAction<string[]>>;

  skillStartTimes: number[];
  setSkillStartTimes: React.Dispatch<
    React.SetStateAction<number[]>
  >;
};

export default function SkillSelector({
  selectedSkills,
  setSelectedSkills,
  skillStartTimes,
  setSkillStartTimes,
}: Props) {
  return (
    <div className="space-y-6">
      {[0, 1, 2, 3, 4].map((index) => {
        const selectedSkill = skills.find(
          (skill) =>
            skill.id === selectedSkills[index]
        );

        return (
          <div
            key={index}
            className="border rounded-xl p-4"
          >
            <label className="block font-semibold mb-2">
              技能{index + 1}
            </label>

            <select
              className="w-full rounded-lg border p-2"
              value={selectedSkills[index]}
              onChange={(e) => {
                const newSkills = [...selectedSkills];
                newSkills[index] = e.target.value;
                setSelectedSkills(newSkills);
              }}
            >
              <option value="">
                未選択
              </option>

              {skills.map((skill) => (
                <option
                  key={skill.id}
                  value={skill.id}
                  disabled={
                    selectedSkills.includes(skill.id) &&
                    selectedSkills[index] !== skill.id
                  }
                >
                  {skill.name}
                </option>
              ))}
            </select>

            {selectedSkill && (
              <div className="mt-3 space-y-2 text-sm text-gray-700">

                <div>
                  CT：
                  <span className="font-semibold">
                    {selectedSkill.cooldown}秒
                  </span>
                </div>

                <div>
                  持続：
                  <span className="font-semibold">
                    {selectedSkill.duration}秒
                  </span>
                </div>

                <div>
                  遅延
                </div>

                <input
                  type="number"
                  min={0}
                  max={120}
                  step={0.5}
                  value={skillStartTimes[index]}
                  onChange={(e) => {
                    const newTimes = [
                      ...skillStartTimes,
                    ];

                    newTimes[index] = Number(
                      e.target.value
                    );

                    setSkillStartTimes(
                      newTimes
                    );
                  }}
                  className="w-full rounded-lg border p-2"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}