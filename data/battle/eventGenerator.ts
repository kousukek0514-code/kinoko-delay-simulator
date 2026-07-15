import type { BattleEvent } from "./events";


export function generateBattleEvents(
  duration:number,
  selectedBuffs:string[] = []
): BattleEvent[] {

  const events: BattleEvent[] = [];


  // =====================
  // 昇華
  // =====================

  if (
    selectedBuffs.includes("ascension") &&
    duration >= 15
  ) {

    events.push({
      time:15,
      type:"start",
      source:"昇華",
    });

  }



  // =====================
  // ドドン太鼓
  // =====================

  if (
    selectedBuffs.includes("dodon")
  ) {

    let dodonStack = 1;

    for (
      let time = 0;
      time <= duration;
      time += 10
    ) {

      if (dodonStack > 6) break;


      events.push({
        time,
        type:"interval",
        source:"ドドン太鼓",
        stack:dodonStack,
        interval:10,
      });


      dodonStack++;

    }
  }



  // =====================
  // 溜め打ち
  // =====================

  if (
    selectedBuffs.includes("charge")
  ) {

    for (
      let time = 3;
      time <= duration;
      time += 3
    ) {

      const stack =
        Math.min(
          Math.floor(time / 3),
          5
        );


      events.push({
        time,
        type:"interval",
        source:"溜め打ち",
        stack,
        interval:3,
      });

    }
  }



  // =====================
  // 速射
  // =====================

  if (
    selectedBuffs.includes("rapid")
  ) {

    for (
      let time = 2;
      time <= duration;
      time += 2
    ) {

      const stack =
        Math.min(
          Math.floor(time / 2),
          10
        );


      events.push({
        time,
        type:"interval",
        source:"速射",
        stack,
        interval:2,
      });

    }
  }


  return events.sort(
    (a,b)=>a.time-b.time
  );

}