import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../layout";
import type { AnimalKeys, ProcedureKeys, DrugKeys } from "../../MG_PER_ML";
import ANIMALS from "../../MG_PER_ML";
import capitalise from "../../util/capitalise";

export default function DrugCalc() {
  const router = useRouter();
  const [kg, setKg] = useState<number>(5);
  const [tenthsKg, setTenthsKg] = useState<number>(400);
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

  function genKgGradations() {
    const arr = [];

    for (let i = 0; i <= 64; i += 16) {
      arr.push(
        <span
          key={i}
          className="cursor-pointer"
          onClick={(_) => {
            setKg(i);
          }}
        >
          {i}kg
        </span>,
      );
    }

    return arr;
  }
  function genGramGradations() {
    const arr = [];

    for (let i = 0; i <= 900; i += 100) {
      arr.push(
        <span
          key={i}
          className="cursor-pointer"
          onClick={(_) => {
            setTenthsKg(i);
          }}
        >
          {i}g
        </span>,
      );
    }

    return arr;
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
        <div className="w-full">
          <div className="flex w-full justify-between p-2 text-xs">
            {genKgGradations()}
          </div>
          <input
            type="range"
            min={0}
            max="64"
            value={kg}
            className="range"
            onChange={(e) => {
              setKg(+e.target.value);
            }}
          />
        </div>
        <div className="w-full">
          <div className="flex w-full justify-between p-2 text-xs">
            {genGramGradations()}
          </div>
          <input
            type="range"
            min={0}
            max="9"
            value={tenthsKg / 100}
            className="range "
            step="1"
            onChange={(e) => {
              setTenthsKg(+e.target.value * 100);
            }}
          />
        </div>
        {genDoses()}
        <div className="text-secondary-content">
          ml = (weight × mg per kg) ÷ mg per ml
        </div>
      </main>
    </Layout>
  );
}
