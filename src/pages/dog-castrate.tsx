import Head from "next/head";
import Link from "next/link";
import Layout from "./layout";
import { useState } from "react";
import ANIMALS from "../../MG_PER_ML";

function calcDose(
  weightKg: number,
  animal: keyof typeof CONSTANTS,
  procedure: keyof typeof CONSTANTS.dog,
  drug: string,
): number {
  const op = ANIMALS;

  return -1;
}

export default function Home() {
  const [kg, setKg] = useState<number>(5);
  const [tenthsKg, setTenthsKg] = useState<number>(400);

  function genGramGradations() {
    const arr = [
      <span
        key={0}
        className="cursor-pointer"
        onClick={(_) => {
          setTenthsKg(0);
        }}
      >
        {0}g
      </span>,
    ];

    for (let i = 100; i <= 900; i += 100) {
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
    <>
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
              <span
                className="cursor-pointer"
                onClick={(_) => {
                  setKg(0);
                }}
              >
                0kg
              </span>
              <span
                className="cursor-pointer"
                onClick={(_) => {
                  setKg(32);
                }}
              >
                32kg
              </span>
              <span
                className="cursor-pointer"
                onClick={(_) => {
                  setKg(64);
                }}
              >
                64kg
              </span>
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
          <div></div>
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
        </main>
      </Layout>
    </>
  );
}
