export type Mount = {
  id: string;
  name: string;

  energy?: number;
  moveSpeed?: number;
  enemyMoveSpeed?: number;
  cooldown?: number;
  duration?: number;
  dodon?: boolean;
};

export const mounts: Mount[] = [
  {
    id: "Mount1",
    name: "なし",
  },
    {
    id: "Mount2",
    name: "ドドン太鼓",
    dodon: true,
  },
    {
    id: "Mount3",
    name: "雪中訪問者",
  　enemyMoveSpeed: -25,
  },
];