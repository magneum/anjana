import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
const Navbar = dynamic(() => import("../components/veg/nav"));
const Body = dynamic(() => import("../components/veg/Body"));

export default function Veg() {
  return (
    <>
      <Head>
        <title>Caving Center</title>
        <meta name="description" content="Caving Center by Anjana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <header className="text-lime-100 body-font bg-black">
          <div className="relative">
            <Image
              src="/veg_1.png"
              className="absolute inset-0 object-cover w-full h-full blur-sm"
              alt="blob"
              width={500}
              height={500}
            />
            <div className="relative bg-stone-900 bg-opacity-70">
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
                <p className="mt-4 text-2xl text-lime-600 opacity-80 lg:text-4xl italic font-bold">
                  <span>Healthy Light Delight</span>
                </p>
                <h2 className="text-5xl font-bold text-lime-500 lg:text-8xl opacity-95 text-center">
                  Craving Center
                </h2>
                <br></br>
                <h2 className="text-xl font-bold text-lime-400 lg:text-3xl opacity-95 text-clip">
                  - by Anjana Dutta
                </h2>
                <br />
              </div>
            </div>
          </div>
          <hr
            style={{
              color: "#3f2e2cc0",
              backgroundColor: "#9CD45C",
              height: 6,
              borderColor: "#3f2e2cc0",
            }}
          />
        </header>
        <Body />
        <footer className="bg-neutral-900 text-lime-400 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-lime-500">
              <span className="ml-3 text-xl hover:text-lime-600">
                <b>❝ Coded by ⒸKryKenz ❞</b>
              </span>
            </a>
            <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-lime-800 sm:py-2 sm:mt-0 mt-4">
              <b>Since 2021 and Forever</b>
              <a
                href="https://github.com/KryKenz/Vlkyre/blob/krytek/LICENSE"
                className="text-lime-500 ml-1 hover:text-lime-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>Licensed Under MPL 2.0</i>
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
            <a
              className="inline-flex items-center rounded-full bg-stone-900 px-8 py-3 text-lime-600 hover:bg-stone-800 hover:text-white focus:outline-none focus:ring active:bg-white/90"
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
      </main>
    </>
  );
}
