import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../layout";
import type { AnimalKeys, ProcedureKeys, DrugKeys } from "../../MG_PER_ML";
import ANIMALS, { WEIGHT_SLIDERS } from "../../MG_PER_ML";
import capitalise from "../../util/capitalise";

export default function DrugCalc() {
  const router = useRouter();
  const [kg, setKg] = useState<number>(2);
  const [tenthsKg, setTenthsKg] = useState<number>(0);
  const [animal, setAnimal] = useState<AnimalKeys>(
    router.query.animal as AnimalKeys,
  );
  const [procedure, setProcedure] = useState<ProcedureKeys>(
    router.query.procedure as ProcedureKeys,
  );
  const [highlight, setHighlight] = useState<DrugKeys | undefined>(undefined);

  function genDoses() {
    if (!animal || !procedure) return;

    const DRUGS = ANIMALS[animal][procedure];
    const arr = [];
    for (const [name, detail] of Object.entries(DRUGS)) {
      const dose = ((kg + tenthsKg) * detail.mgPerKg.low) / detail.mgPerMl;
      const roundedDose = Math.round(dose * 1000) / 1000;

      arr.push(
        <div
          key={name}
          className={"card bg-base-200 text-primary-content w-full border-8".concat(
            highlight === name ? " border-secondary" : " border-base-200",
          )}
          onClick={(_) =>
            setHighlight(highlight !== name ? (name as DrugKeys) : undefined)
          }
        >
          <div className="card-body items-center">
            <h4 className="card-title">{name.toUpperCase()}</h4>
            <div className="text-5xl">{roundedDose} ml</div>
            <div className="text-lg">
              <em>{detail.mgPerMl} mg/ml</em>
            </div>
          </div>
        </div>,
      );
    }

    return arr;
  }

  function genGradations(
    max: number,
    suffix: string,
    setFunc: (n: number) => void,
    labelGap: number,
  ) {
    const arr = [];

    for (let i = 0; i <= max; i += max / labelGap) {
      arr.push(
        <span
          key={i}
          className="cursor-pointer"
          onClick={(_) => {
            setFunc(i);
          }}
        >
          {i}
          {suffix}
        </span>,
      );
    }

    return arr;
  }

  function genSlider({
    max,
    suffix,
    multiplier,
    setFunc,
    value,
    labelGap,
  }: {
    max: number;
    suffix: string;
    multiplier: number;
    setFunc: (n: number) => void;
    value: number;
    labelGap: number;
  }) {
    return (
      <div className="w-full">
        <div className="flex w-full justify-between p-2 text-xs">
          {genGradations(max, suffix, setFunc, labelGap)}
        </div>
        <input
          type="range"
          min={0}
          max={max / multiplier}
          value={value / multiplier}
          className="range"
          onChange={(e) => {
            setFunc(+e.target.value * multiplier);
          }}
        />
      </div>
    );
  }

  useEffect(() => {
    // fixes animal/procedure undefined on direct nav
    setAnimal(router.query.animal as AnimalKeys);
    setProcedure(router.query.procedure as ProcedureKeys);
  }, [router.query.animal, router.query.procedure]);

  return (
    <Layout>
      <main className="container flex flex-col items-center  gap-12 px-4 py-16 ">
        <h2 className="text-5xl">{capitalise(`${animal} ${procedure}`)}</h2>
        {/* <h3>Set {animal}'s weight</h3> */}
        <div className="text-8xl">
          {kg + tenthsKg / 1000}
          <span className="text-xl">kg</span>
        </div>
        {genSlider({
          ...WEIGHT_SLIDERS[animal].kg,
          setFunc: setKg,
          value: kg,
          suffix: "kg",
        })}

        {genSlider({
          ...WEIGHT_SLIDERS[animal].g,
          setFunc: setTenthsKg,
          value: tenthsKg,
          suffix: "g",
        })}

        {genDoses()}
        <div className="text-secondary-content">
          ml = (weight × mg per kg) ÷ mg per ml
        </div>
      </main>
    </Layout>
  );
}
