import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="text-amber-100 body-font bg-black">
      <div className="relative">
        <Image
          src="/bground.jpg"
          className="absolute inset-0 object-cover w-full h-full blur-sm"
          alt="blob"
          width={500}
          height={500}
        />
        <div className="relative bg-stone-900 bg-opacity-70">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
            <p className="mt-4 text-2xl text-amber-600 opacity-80 lg:text-4xl font-mono italic font-bold">
              <span>Healthy Light Delight</span>
            </p>
            <h2 className="text-5xl font-bold font-serif text-amber-500 lg:text-8xl opacity-95 text-center">
              Craving Center
            </h2>
            <br></br>
            <h2 className="text-xl font-bold font-serif text-amber-400 lg:text-3xl opacity-95 text-clip">
              - by Anjana Dutta
            </h2>
            <br />
          </div>
        </div>
      </div>
      <hr
        style={{
          color: "#3f2e2cc0",
          backgroundColor: "#cac48a",
          height: 6,
          borderColor: "#3f2e2cc0",
        }}
      />
    </header>
  );
}