import Link from "next/link";
import Layout from "./layout";
import SOURCE from "../MG_PER_ML";
import capitalise from "../util/capitalise";

export default function Home() {
  function genBtns() {
    const arr = [];

    for (const animal of Object.keys(SOURCE)) {
      arr.push(
        <Link href={{ pathname: "/[animal]", query: { animal } }} key={animal}>
          <div className="btn btn-neutral h-48 rounded-3xl px-12 text-5xl">
            {capitalise(animal)}
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
        <div className="flex flex-wrap justify-around gap-12">{genBtns()}</div>
      </main>
    </Layout>
  );
}
