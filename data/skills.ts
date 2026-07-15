export type Skill = {
  id: string;
  name: string;
  cooldown: number;
  useTime: number;
  duration: number;
  color: string;
  startTime: number;
   moveSpeed?: number;
  enemyMoveSpeed?: number
};

 export const skills: Skill[] = [
  {
    id: "skill1",
    name: "トゲ茂み",
    cooldown: 8,
    useTime: 1.25,
    color: "bg-green-500",
    startTime: 0,
    duration: 5,
    enemyMoveSpeed: -40,
  },
  {
    id: "skill2",
    name: "疾駆菌茸",
    cooldown: 14,
      useTime: 1.25, 
    color: "bg-blue-500",
    startTime: 0,
     duration: 5
  },
  {
    id: "skill3",
    name: "貝恩返し",
    useTime: 1.25,
    cooldown: 11,
    color: "bg-purple-500",
    startTime: 0,
    duration: 5,
    enemyMoveSpeed: -40
  }, 
 {
    id: "skill4",
    name: "ツタ繁茂",
    cooldown: 11,
    useTime: 1.25,
    color: "bg-purple-500",
    startTime: 0,
     duration: 4
  }, 
   {
    id: "skill5",
    name: "大地回復",
    cooldown: 25,
    useTime: 8,
    color: "bg-yellow-500",
    startTime: 0,
     duration: 5
  }, 
   {
    id: "skill6",
    name: "菌バリア",
    cooldown: 19,
    useTime: 1.25,
    color: "bg-yellow-500",
    startTime: 0,
     duration: 10
  }, 
   {
    id: "skill7",
    name: "武装解除",
    cooldown: 16,
    useTime: 1.25,
    color: "bg-red-500",
    startTime: 0,
     duration: 3
  }, 
   {
    id: "skill8",
    name: "眩暈失神",
    cooldown: 19,
    useTime: 1.25,
    color: "bg-red-500",
    startTime: 0,
     duration: 1.5
  }, 
   {
    id: "skill9",
    name: "煙幕弾",
    cooldown: 13,
    useTime: 1.25,
    color: "bg-red-500",
    startTime: 0,
     duration: 5
  }, 
   {
    id: "skill10",
    name: "狂風通道",
    cooldown: 16,
    useTime: 1.25,
    color: "bg-red-500",
    startTime: 0,
     duration: 5
  }, 
   {
    id: "skill11",
    name: "分身攻撃",
    cooldown: 29,
    useTime: 1.25,
    color: "bg-pink-500",
    startTime: 0,
     duration: 10
  }, 
   {
    id: "skill12",
    name: "百斬千鎖",
    cooldown: 19,
    useTime: 1.25,
    color: "bg-pink-500",
    startTime: 0,
     duration: 5
  }, 
 {
    id: "skill13",
    name: "天下の罠",
    cooldown: 24,
    useTime: 1.25,
    color: "bg-pink-500",
    startTime: 0,
     duration: 5
  }, 
   {
    id: "skill14",
    name: "風神の矢",
    cooldown: 19,
    useTime: 1.25,
    color: "bg-pink-500",
    startTime: 0,
     duration: 5
  }, 

];