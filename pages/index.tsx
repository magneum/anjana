import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const Main = dynamic(() => import("../components/main"));
const Navbar = dynamic(() => import("../components/nav"));
const Header = dynamic(() => import("../components/header"));
const Footer = dynamic(() => import("../components/footer"));

export default function Home() {
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
