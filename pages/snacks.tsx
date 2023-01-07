import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
const Main = dynamic(() => import("../components/snacks/main"));
const Navbar = dynamic(() => import("../components/snacks/nav"));
const Header = dynamic(() => import("../components/snacks/header"));
const Footer = dynamic(() => import("../components/snacks/footer"));

export default function Snacks() {
  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>Caving Center</title>
        <meta name="description" content="Caving Center by Anjana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav />
        <Header />
        <Main />
        <Footer />
      </main>
    </>
  );
}
