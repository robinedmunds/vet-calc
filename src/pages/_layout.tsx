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
        <div className="navbar bg-secondary text-primary-content justify-between rounded-2xl">
          <Link href="/">
            <button className="btn btn-ghost flex-1 text-xl">
              <h1 className="">Hayley's Veterinary Drug Calculator</h1>
            </button>
          </Link>
          <div className="hidden flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {children}
      </div>
      <footer className="footer footer-center bg-base-200 text-base-content p-4">
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
