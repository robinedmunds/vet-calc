import Head from "next/head";
import Link from "next/link";
import Layout from "./layout";
import SOURCE from "../MG_PER_ML";

export default function Home() {
  function genAnimalBtns() {
    const arr = [];

    for (const animal of Object.keys(SOURCE)) {
      arr.push(
        <Link href={{ pathname: "/[animal]", query: { animal } }} key={animal}>
          <div className="btn btn-neutral h-48 w-48 rounded-3xl text-5xl">
            {animal}
          </div>
        </Link>,
      );
    }

    return arr;
  }

  return (
    <Layout>
      <main className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h2 className="text-3xl">Pick an animal</h2>
        <div className="flex flex-wrap justify-between gap-12">
          {genAnimalBtns()}
        </div>
      </main>
    </Layout>
  );
}
