import Head from "next/head";
import Link from "next/link";
import Layout from "./layout";

export default function Home() {
  return (
    <>
      <Layout>
        <main className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h2 className="text-3xl">Pick an animal</h2>

          <Link href="/dog">
            <div className="btn btn-neutral w-auto rounded-full">Dog</div>
          </Link>
        </main>
      </Layout>
    </>
  );
}
