export type Artifact = {
  id: string;
  name: string;

  energy?: number;
  moveSpeed?: number;
  enemyMoveSpeed?: number;
  cooldown?: number;
  duration?: number;
};

export const artifacts: Artifact[] = [
  {
    id: "none",
    name: "なし",
  },

  {
    id: "artifact1",
    name: "時空の魔環",
    energy: 10,
  },

  {
    id: "artifact2",
    name: "潮汐の舞",
    energy: 15,
    cooldown: 5,
  },

  {
    id: "artifact3",
    name: "白骨に咲く花",
    energy: 0,
    duration: 0,
  },
];