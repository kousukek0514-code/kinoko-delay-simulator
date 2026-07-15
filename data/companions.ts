export type Companion = {
  id:string;
  name:string;

  energy?:number;
  moveSpeed?:number;
  cooldown?:number;
};


export const companions: Companion[] = [
  {
    id:"none",
    name:"なし",
  },

  {
    id:"companion1",
    name:"〇〇仲間",
    energy:5,
  },
];