import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
const Main = dynamic(() => import("../components/veg/main"));
const Navbar = dynamic(() => import("../components/veg/nav"));
const Header = dynamic(() => import("../components/veg/header"));
const Footer = dynamic(() => import("../components/veg/footer"));

export default function Veg() {
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
