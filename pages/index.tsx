import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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

        <section className="text-amber-600 body-font bg-[url('/bground.jpg')]">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                className="object-cover object-center rounded-lg border-2 border-amber-800"
                src="/bg.png"
                alt="blob"
                width={500}
                height={500}
              ></Image>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-amber-300">
                About me
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.Copper mug try-hard pitchfork
                pour-over freegan heirloom neutra air plant cold-pressed tacos
                poke beard tote bag. Heirloom echo park mlkshk tote bag selvage
                hot chicken authentic tumeric truffaut hexagon try-hard
                chambray.
              </p>
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
        </section>

        <section className="bg-gradient-to-tr from-neutral-900 via-stone-800 to-neutral-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/nonVeg.jpg"
                    alt="blob"
                    width={500}
                    height={500}
                  ></Image>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-red-400 mb-3">
                      NON VEGETARIAN
                    </h1>
                    <p className="leading-relaxed mb-3 text-amber-100">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link href="/non_veg">
                        <button className="flex items-center mt-auto text-white bg-red-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-red-700 rounded">
                          Non Vegetarian
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/veg_1.png"
                    alt="blob"
                    width={500}
                    height={500}
                  ></Image>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-lime-400 mb-3">
                      VEGETARIAN
                    </h1>
                    <p className="leading-relaxed mb-3 text-amber-100">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <Link href="/veg">
                        <button className="flex items-center mt-auto text-white bg-lime-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-lime-700 rounded">
                          Vegetarian
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/sweets.PNG"
                    alt="blob"
                    width={500}
                    height={500}
                  ></Image>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-yellow-400 mb-3">
                      SWEETS & DESERTS
                    </h1>
                    <p className="leading-relaxed mb-3 text-amber-100">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link href="/sweets">
                        <button className="flex text-center mt-auto text-white bg-yellow-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-yellow-700 rounded">
                          Sweets
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/snacks.PNG"
                    alt="blob"
                    width={500}
                    height={500}
                  ></Image>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">
                      SNACKS & CHAI
                    </h1>
                    <p className="leading-relaxed mb-3 text-amber-100">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link href="/snacks">
                        <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
                          Snacks
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
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
        </section>

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
      </main>
    </>
  );
}
