export type Back = {
  id: string;
  name: string;

  energy?: number;
  moveSpeed?: number;
  enemyMoveSpeed?: number;
  cooldown?: number;
  duration?: number;
};

export const backs: Back[] = [
  {
    id: "none",
    name: "なし",
  },

  {
    id: "back1",
    name: "凱旋の輝き",
    energy: 5,
    moveSpeed: 20,
    enemyMoveSpeed: -20,
  },
];