import Head from "next/head";
import Link from "next/link";
import Layout from "./layout";
import { useState } from "react";
import ANIMALS, { AnimalKeys, ProcedureKeys, DrugKeys } from "../../MG_PER_ML";

export default function Home() {
  const [kg, setKg] = useState<number>(5);
  const [tenthsKg, setTenthsKg] = useState<number>(400);
  const [animal, setAnimal] = useState<AnimalKeys>("dog");
  const [procedure, setProcedure] = useState<ProcedureKeys>("castrate");

  function genDoses() {
    const DRUGS = ANIMALS[animal][procedure];
    const arr = [];

    for (const [name, detail] of Object.entries(DRUGS)) {
      const dose = ((kg + tenthsKg) * detail.mgPerKg.low) / detail.mgPerMl;
      const roundedDose = Math.round(dose * 1000) / 1000;

      arr.push(
        <div className="card bg-base-300 text-primary-content w-full">
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

  return (
    <Layout>
      <main className="container flex flex-col items-center  gap-12 px-4 py-16 ">
        <h2 className="text-5xl">Dog castrate</h2>
        <h3>Set dog weight</h3>
        <div className="text-5xl">
          {kg + tenthsKg / 1000}
          <span className="text-md">kg</span>
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
