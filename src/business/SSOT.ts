// Single source of truth
// https://en.wikipedia.org/wiki/Single_source_of_truth

export const ANIMALS = ["cat", "dog", "rabbit"] as const;
export const PROCEDURES = ["castration", "spay", "dental"] as const;
export const DRUGS = [
  "buprenorphine",
  "ketamine",
  "medetomidine",
  "meloxicam",
  "methadone",
] as const;

export type AnimalKeys = (typeof ANIMALS)[number];
export type ProcedureKeys = (typeof PROCEDURES)[number];
export type DrugKeys = (typeof DRUGS)[number];
export type DrugDetail = {
  mgPerMl: number;
  mgPerKg: { low: number; high: number };
};
export type Drugs = Record<Partial<DrugKeys>, DrugDetail>;
export type Procedures = Record<Partial<ProcedureKeys>, Drugs>;
export type Animals = Record<Partial<AnimalKeys>, Procedures>;

export default {
  cat: {
    castration: {
      medetomidine: { mgPerMl: 1, mgPerKg: { low: 0.005, high: 0.01 } },
      buprenorphine: { mgPerMl: 0.3, mgPerKg: { low: 0.02, high: 0.02 } },
      meloxicam: { mgPerMl: 2, mgPerKg: { low: 0.2, high: 0.2 } },
    },
    spay: {
      medetomidine: { mgPerMl: 1, mgPerKg: { low: 0.005, high: 0.01 } },
      methadone: { mgPerMl: 10, mgPerKg: { low: 0.3, high: 0.3 } },
      meloxicam: { mgPerMl: 2, mgPerKg: { low: 0.2, high: 0.2 } },
    },
    dental: {
      medetomidine: { mgPerMl: 1, mgPerKg: { low: 0.005, high: 0.01 } },
      methadone: { mgPerMl: 10, mgPerKg: { low: 0.3, high: 0.3 } },
      meloxicam: { mgPerMl: 2, mgPerKg: { low: 0.2, high: 0.2 } },
    },
  },
  dog: {
    castration: {
      medetomidine: { mgPerMl: 1, mgPerKg: { low: 0.005, high: 0.01 } },
      methadone: { mgPerMl: 10, mgPerKg: { low: 0.3, high: 0.5 } },
      meloxicam: { mgPerMl: 5, mgPerKg: { low: 0.2, high: 0.2 } },
    },
    spay: {
      medetomidine: { mgPerMl: 1, mgPerKg: { low: 0.005, high: 0.01 } },
      methadone: { mgPerMl: 10, mgPerKg: { low: 0.3, high: 0.5 } },
      meloxicam: { mgPerMl: 5, mgPerKg: { low: 0.2, high: 0.2 } },
    },
    dental: {
      medetomidine: { mgPerMl: 1, mgPerKg: { low: 0.005, high: 0.01 } },
      methadone: { mgPerMl: 10, mgPerKg: { low: 0.3, high: 0.5 } },
      meloxicam: { mgPerMl: 5, mgPerKg: { low: 0.2, high: 0.2 } },
    },
  },
  rabbit: {
    castration: {
      medetomidine: { mgPerMl: 1, mgPerKg: { low: 0.25, high: 0.25 } },
      buprenorphine: { mgPerMl: 0.3, mgPerKg: { low: 0.05, high: 0.05 } },
      ketamine: { mgPerMl: 100, mgPerKg: { low: 15, high: 15 } },
      meloxicam: { mgPerMl: 5, mgPerKg: { low: 0.5, high: 0.5 } },
    },
    spay: {
      medetomidine: { mgPerMl: 1, mgPerKg: { low: 0.25, high: 0.25 } },
      buprenorphine: { mgPerMl: 0.3, mgPerKg: { low: 0.05, high: 0.05 } },
      ketamine: { mgPerMl: 100, mgPerKg: { low: 15, high: 15 } },
      meloxicam: { mgPerMl: 5, mgPerKg: { low: 0.5, high: 0.5 } },
    },
    dental: {
      medetomidine: { mgPerMl: 1, mgPerKg: { low: 0.25, high: 0.25 } },
      buprenorphine: { mgPerMl: 0.3, mgPerKg: { low: 0.05, high: 0.05 } },
      ketamine: { mgPerMl: 100, mgPerKg: { low: 15, high: 15 } },
      meloxicam: { mgPerMl: 5, mgPerKg: { low: 0.5, high: 0.5 } },
    },
  },
} as Animals;

export const WEIGHT_SLIDERS = {
  cat: {
    kg: {
      max: 8,
      multiplier: 1,
      labelGap: 4,
    },
    g: {
      max: 900,
      multiplier: 100,
      labelGap: 9,
    },
  },
  dog: {
    kg: {
      max: 48,
      multiplier: 1,
      labelGap: 4,
    },
    g: {
      max: 900,
      multiplier: 100,
      labelGap: 9,
    },
  },
  rabbit: {
    kg: {
      max: 4,
      multiplier: 1,
      labelGap: 4,
    },
    g: {
      max: 900,
      multiplier: 100,
      labelGap: 9,
    },
  },
};
