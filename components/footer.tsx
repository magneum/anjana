import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-amber-400 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-amber-500">
          <span className="ml-3 text-xl hover:text-amber-600">
            <b>❝ Coded by ⒸKryKenz ❞</b>
          </span>
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-amber-800 sm:py-2 sm:mt-0 mt-4">
          <b>Since 2021 and Forever</b>
          <a
            href="https://github.com/KryKenz/Vlkyre/blob/krytek/LICENSE"
            className="text-amber-500 ml-1 hover:text-amber-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>Licensed Under Mozilla Public License 2.0</i>
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
        <a
          className="inline-flex items-center rounded-full bg-stone-900 px-8 py-3 text-amber-600 hover:bg-stone-800 hover:text-white focus:outline-none focus:ring active:bg-white/90"
          href="#"
        >
          <span className="text-sm font-medium"> Back To Top </span>
          <svg
            className="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
