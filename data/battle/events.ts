export type BattleEvent = {
  time: number;

  type:
    | "start"
    | "interval"
    | "skill";

  source: string;

  interval?: number;

  stack?: number;
};
export const battleEvents: BattleEvent[] = [
];