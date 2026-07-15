import type { BattleState } from "./types";
import { initialBattleState } from "./initialState";
import { generateBattleEvents } from "./eventGenerator";
import { applyBattleEvent } from "./eventManager";

export type BattleResult = {
  time:number;
  state:BattleState;
  event:string;
};

export function simulateBattle(
  duration:number,
  selectedBuffs:string[] = []
){

const events =
  generateBattleEvents(
    duration,
    selectedBuffs
  );

  let state =
    {...initialBattleState};

  const results:BattleResult[] = [];

  for (const event of events) {

    state =
      applyBattleEvent(
        state,
        event
      );

    results.push({

      time:event.time,

      state:{
        ...state,
      },

      event:event.source,

    });

  }

  return results;

}