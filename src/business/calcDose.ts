export default function ({
  weightKg,
  mgPerMl,
  mgPerKg,
  decimalPlaces,
}: {
  weightKg: number;
  mgPerMl: number;
  mgPerKg: number;
  decimalPlaces: number;
}): number {
  if (weightKg <= 0) return 0;
  if (mgPerMl <= 0 || mgPerKg <= 0) return -1;

  // ml = (1 ÷ mg/ml) × mg/kg × kg
  const dose = (1 / mgPerMl) * mgPerKg * weightKg;

  return Math.round(dose * 10 ** decimalPlaces) / 10 ** decimalPlaces;
}
