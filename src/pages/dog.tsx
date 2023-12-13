import Head from "next/head";
import Link from "next/link";
import Layout from "./layout";

export default function Home() {
  return (
    <>
      <Layout>
        <main className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h2 className="text-5xl">Dog</h2>
          <h3 className="text-3xl">Pick a procedure</h3>
          <Link href="/dog-castrate">
            <div className="btn btn-neutral w-auto rounded-full">
              Dog castrate
            </div>
          </Link>
          <Link href="/dog-castrate">
            <div className="btn btn-neutral w-auto rounded-full">
              Bitch spay
            </div>
          </Link>
        </main>
      </Layout>
    </>
  );
}
