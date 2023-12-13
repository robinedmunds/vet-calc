import Head from "next/head";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Hayley's Veterinary Drug Calculator</title>
        <meta
          name="description"
          content="Hayley's Veterinary Drug Calculator"
        />
        <link rel="icon" href="/favicon.ico" />
        <html data-theme="nord" />
      </Head>

      <div className="container mx-auto p-2">
        <div className="navbar bg-primary text-primary-content rounded-3xl">
          <Link href="/">
            <button className="btn btn-ghost text-xl">
              <h1 className="">Hayley's Veterinary Drug Calculator</h1>
            </button>
          </Link>
        </div>

        {children}
      </div>
    </>
  );
}
