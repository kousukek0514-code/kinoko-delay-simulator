export type Spirit = {
  id:string;
  name:string;

  energy?:number;
  moveSpeed?:number;
  enemyMoveSpeed?:number;
};


export const spirits: Spirit[] = [
  {
    id:"none",
    name:"なし",
  },

];