import type { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "./layout";
import type { AnimalKeys, Procedures } from "../MG_PER_ML";
import ANIMALS from "../MG_PER_ML";
import capitalise from "../util/capitalise";

export const getStaticPaths = (async () => {
  const paths = [];

  for (const animal of Object.keys(ANIMALS)) {
    paths.push({ params: { animal } });
  }

  return {
    paths,
    fallback: false, // 404 non-existing
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (_) => {
  return { props: {} };
}) satisfies GetStaticProps<object>;

export default function ProcedureSelect() {
  const router = useRouter();
  const animal: AnimalKeys = router.query.animal as AnimalKeys;

  function genBtns() {
    if (!animal) return;

    const arr = [];
    const procedures: Procedures = ANIMALS[animal];

    for (const procedure of Object.keys(procedures)) {
      arr.push(
        <Link
          href={{
            pathname: "/[animal]/[procedure]",
            query: { animal, procedure },
          }}
          key={procedure}
        >
          <div className="btn btn-neutral h-48 rounded-3xl px-12 text-5xl">
            {capitalise(procedure)}
          </div>
        </Link>,
      );
    }

    return arr;
  }

  return (
    <Layout>
      <main className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h2 className="text-3xl">Pick a procedure</h2>
        <div className="flex flex-wrap justify-around gap-12">{genBtns()}</div>
      </main>
    </Layout>
  );
}
