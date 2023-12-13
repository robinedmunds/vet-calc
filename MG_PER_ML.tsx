type AnimalKeys = "cat" | "dog" | "rabbit";
type ProcedureKeys = "castrate" | "spay" | "dental";
type DrugKeys =
  | "buprenorphine"
  | "ketamine"
  | "medetomidine"
  | "meloxicam"
  | "methadone";

type DrugDetail = { mgPerMl: number; mgPerKg: { low: number; high: number } };
type Drugs = Record<Partial<DrugKeys>, DrugDetail>;
type Procedures = Record<Partial<ProcedureKeys>, Drugs>;
type Animals = Record<Partial<AnimalKeys>, Procedures>;

export default {
  cat: {
    castrate: {
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
    castrate: {
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
    castrate: {
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
