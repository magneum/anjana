import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Body() {
  return (
    <div>
      <section className="bg-gradient-to-br from-stone-900 via-stone-900 to-[#3d1710] backdrop-blur-md">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-lg border-2 border-amber-800"
              src="/bground.jpg"
              alt="blob"
              width={500}
              height={500}
            ></Image>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold font-serif text-amber-500">
              About me
            </h1>
            <p className="mb-8 leading-relaxed text-amber-100 italic capitalize">
              Instead of going out to dinner, buy good food. Cooking at home
              shows such affection. In a bad economy, it's more important to
              make yourself feel good.
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

      <section className="bg-gradient-to-br from-[#3d1710] via-stone-900 to-stone-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 hover:scale-105">
              <Link href="/non_veg">
                <div className="h-full rounded-b-3xl hover:rounded-2xl overflow-hidden glass bg-gradient-to-t from-red-900 via-stone-900 to-stone-900">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/nonVeg.jpg"
                    alt="blob"
                    width={500}
                    height={500}
                  ></Image>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-red-400 mb-3 font-maven uppercase">
                      NON VEGETARIAN
                    </h1>
                    <p className="leading-relaxed mb-3 text-amber-100 capitalize font-sans">
                      Browse through this collection of Non-Vegetarian Recipes
                      from Indian and world Cuisines. Non-vegetarian cuisine
                      includes recipes made with meat, eggs, fish, and more.
                    </p>
                  </div>
                </div>{" "}
              </Link>
            </div>
            <div className="p-4 md:w-1/3 hover:scale-105">
              <Link href="/veg">
                <div className="h-full rounded-b-3xl hover:rounded-2xl overflow-hidden glass bg-gradient-to-t from-lime-900 via-stone-900 to-stone-900">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/veg_1.jpg"
                    alt="blob"
                    width={500}
                    height={500}
                  ></Image>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-lime-400 mb-3 font-maven uppercase">
                      VEGETARIAN
                    </h1>
                    <p className="leading-relaxed mb-3 text-amber-100 capitalize font-sans">
                      Vegetables are very important for our health. They help us
                      to build our health properly. But if you don’t know the
                      perfect method to cook vegetables, then you will find it
                      very boring while eating.So let's start cooking delicious
                      and easy veg foods.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 hover:scale-105">
              <Link href="/sweets">
                <div className="h-full rounded-b-3xl hover:rounded-2xl overflow-hidden glass bg-gradient-to-t from-yellow-900 via-stone-900 to-stone-900">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/sweets.PNG"
                    alt="blob"
                    width={500}
                    height={500}
                  ></Image>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-yellow-400 mb-3 font-maven uppercase">
                      Sweets & Deserts
                    </h1>
                    <p className="leading-relaxed mb-3 text-amber-100 capitalize font-sans">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 hover:scale-105">
              <Link href="/snacks">
                <div className="h-full rounded-b-3xl hover:rounded-2xl overflow-hidden glass bg-gradient-to-t from-gray-900 via-stone-900 to-stone-900">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/snacks.PNG"
                    alt="blob"
                    width={500}
                    height={500}
                  ></Image>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3 font-maven uppercase">
                      Snacks & Chai
                    </h1>
                    <p className="leading-relaxed mb-3 text-amber-100 capitalize font-sans">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </Link>
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
    </div>
  );
}
