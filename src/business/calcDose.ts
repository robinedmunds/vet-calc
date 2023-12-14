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

  const mlPerMg = 1 / mgPerMl;
  const mlPerKilo = mgPerKg * mlPerMg;
  const dose = mlPerKilo * weightKg;

  return Math.round(dose * 10 ** decimalPlaces) / 10 ** decimalPlaces;
}
