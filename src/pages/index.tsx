import Link from "next/link";
import { hasCookie, setCookie } from "cookies-next";
import Layout from "./layout";
import SSOT from "../business/SSOT";
import capitalise from "../util/capitalise";

export default function Home() {
  if (!hasCookie("experimental")) {
    if (typeof document !== "undefined") {
      const elem = document.getElementById(
        "experimental-modal",
      ) as HTMLDialogElement;

      if (elem) {
        elem.showModal();
      }
    }
  }

  function warningAccept() {
    setCookie("experimental", "accepted", {
      maxAge: 1209600,
      sameSite: "strict",
    });
  }

  function genBtns() {
    const arr = [];

    for (const animal of Object.keys(SSOT)) {
      arr.push(
        <Link href={{ pathname: "/[animal]", query: { animal } }} key={animal}>
          <div className="btn btn-neutral h-40 rounded-2xl px-12 text-5xl">
            {capitalise(animal)}
          </div>
        </Link>,
      );
    }

    return arr;
  }

  return (
    <Layout>
      <main className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h2 className="text-3xl">Pick an animal</h2>
        <div className="flex flex-wrap justify-around gap-12">{genBtns()}</div>
      </main>

      <dialog id="experimental-modal" className="modal">
        <div className="modal-box border-warning border-8">
          <h3 className="text-lg font-bold">DISCLAIMER</h3>
          <p className="py-4">
            This is experimental software. DO NOT use it for any purpose!
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={warningAccept}>
                I understand
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </Layout>
  );
}
