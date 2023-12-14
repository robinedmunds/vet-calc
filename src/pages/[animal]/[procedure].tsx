import { useState, useEffect } from "react";
import type { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Layout from "../layout";
import type { AnimalKeys, ProcedureKeys, DrugKeys } from "../../MG_PER_ML";
import ANIMALS, { WEIGHT_SLIDERS } from "../../MG_PER_ML";
import capitalise from "../../util/capitalise";
import calcDose from "../../business/calcDose";

export const getStaticPaths = (async () => {
  const paths = [];

  for (const animal of Object.keys(ANIMALS)) {
    for (const procedure of Object.keys(ANIMALS[animal as AnimalKeys])) {
      paths.push({ params: { animal, procedure } });
    }
  }

  return {
    paths,
    fallback: false, // 404 non-existing
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (_) => {
  return { props: {} };
}) satisfies GetStaticProps<object>;

export default function DrugCalc() {
  const router = useRouter();
  const [kg, setKg] = useState<number>(2);
  const [grams, setGrams] = useState<number>(0);
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
      const weightKg = kg + grams / 1000;
      const roundedDose = calcDose({
        weightKg,
        mgPerMl: detail.mgPerMl,
        mgPerKg: detail.mgPerKg.low,
        decimalPlaces: 4,
      });

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
          {kg + grams / 1000}
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
          setFunc: setGrams,
          value: grams,
          suffix: "g",
        })}

        {genDoses()}
        <div className="text-secondary-content">
          ml = (1 ÷ mg/ml) × mg/kg × kg
        </div>
      </main>
    </Layout>
  );
}
