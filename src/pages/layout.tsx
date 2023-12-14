import Head from "next/head";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getUTCFullYear();

  return (
    <>
      <Head>
        <title>Hayley's Veterinary Drug Calculator</title>
        <meta
          name="description"
          content="Hayley's Veterinary Drug Calculator"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto p-2">
        <div className="navbar bg-secondary text-primary-content rounded-3xl">
          <Link href="/">
            <button className="btn btn-ghost text-xl">
              <h1 className="">Hayley's Veterinary Drug Calculator</h1>
            </button>
          </Link>
        </div>

        {children}
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {year} -{" "}
            <a
              className="link"
              href="https://github.com/robinedmunds/"
              target="_blank"
            >
              Robin Edmunds
            </a>
          </p>
        </aside>
      </footer>
    </>
  );
}
