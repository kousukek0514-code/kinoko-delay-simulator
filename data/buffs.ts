export type Buff = {
  id: string;
  name: string;

  type:
    | "start"
    | "interval"
    | "skill"
    | "passive";

  interval?: number;
  maxStack?: number;

  value?: number;
  duration?: number;
};


export const buffs: Buff[] = [

  // 職業・技能系
  {
    id: "ascension",
    name: "昇華",
    type: "start",
  },

  {
    id: "charge",
    name: "溜め打ち",
    type: "interval",
    interval: 3,
    maxStack: 5,
  },

  {
    id: "rapid",
    name: "速射",
    type: "interval",
    interval: 2,
    maxStack: 10,
  },

  {
    id: "timeControl",
    name: "時間操作",
    type: "skill",
  },


  // 騎乗
  {
    id: "dodon",
    name: "ドドン太鼓",
    type: "interval",
    interval: 10,
    maxStack: 6,
  },


  // その他
  {
    id: "tidal",
    name: "潮汐の舞",
    type: "interval",
    maxStack: 10,
  },


  // 神器・背飾りなど
  {
    id: "energy_speed",
    name: "エネルギー回復速度＋10%",
    type: "passive",
    value: 10,
  },

  {
    id: "move_speed",
    name: "移動速度＋10%",
    type: "passive",
    value: 10,
  },

];