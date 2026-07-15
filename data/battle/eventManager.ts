import { BattleState } from "./types";
import { BattleEvent } from "./events";

export function applyBattleEvent(
  state: BattleState,
  event: BattleEvent
): BattleState {

  const newState = {
    ...state,
  };


  // 昇華
  if (
    event.source === "昇華"
  ) {

    newState.attack += 20;

    newState.attackSpeed += 15;

    newState.critRate += 20;

  }

  // ドドン太鼓
  if (
    event.source === "ドドン太鼓"
  ) {

    const stack =
      event.stack ?? 1;

    newState.attack +=
      4 * stack;

    newState.attackSpeed +=
      4 * stack;

    newState.energySpeed +=
      4 * stack;

  }

  // 溜め打ち
  if (
    event.source === "溜め打ち"
  ) {

    const stack =
      event.stack ?? 1;

    newState.critDamage +=
      5 * stack;

  }

  // 速射
  if (
    event.source === "速射"
  ) {

    const stack =
      event.stack ?? 1;

    newState.comboDamage +=
      5 * stack;

  }

  return newState;
}