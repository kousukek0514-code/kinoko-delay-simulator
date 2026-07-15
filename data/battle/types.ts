export type BattleState = {
  // 基本能力
  attack: number;

  // 攻撃速度
  attackSpeed: number;

  // エネルギー回復速度
  energySpeed: number;

  // 移動速度
  moveSpeed: number;

  // 会心系
  critRate: number;
  critDamage: number;

  // ダメージ系
  comboDamage: number;
  skillDamage: number;

  // 軽減系
  damageReduction: number;
  enemyDamageReduction: number;

  // 仲間
  companionAttackSpeed: number;
};