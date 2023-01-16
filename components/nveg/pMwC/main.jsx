import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
export default function Main() {
  return (
    <section className=" bg-zinc-900">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-3">
              <p className="font-sans text-5xl font-extrabold leading-none tracking-tight text-red-800">
                Prawn Mushroom With Cashew
              </p>
            </div>
            <br></br>
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center rounded-3xl"
              src="/prawn_1.png"
              alt="blob"
              width={500}
              height={500}
            ></Image>
          </div>

          <div className="flex flex-col space-y-8 lg:col-span-3">
            <div>
              <div className="mb-3">
                <p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-red-700">
                  - Preparation
                </p>
              </div>
              <p className="mb-4 text-base text-red-50 md:text-lg">
                <span className="text-red-700">● </span>Mix the prawn and
                mushroom in separte bowls with turmeric powder and salt.
                <br></br>
                <span className="text-red-700">● </span>Heat up a pan, pour oil
                as required.
                <br></br>
                <span className="text-red-700">● </span>Fry the prawns and
                mushrooms separately in medium flame.<br></br>
                <span className="text-red-700">● </span>Donot fry them too much.
                <br></br>
                <span className="text-red-700">● </span>Keep them a little less
                then fully cooked.
                <br></br>
                <span className="text-red-700">● </span>Keep them aside in a
                bowl.
              </p>
            </div>
            <div>
              <div className="mb-3">
                <p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-red-700">
                  - Gravy
                </p>
              </div>
              <p className="mb-4 text-base text-red-50 md:text-lg">
                <span className="text-red-700">● </span>In the same pan now cook
                the choopped onions.<br></br>
                <span className="text-red-700">● </span>You can add more oil if
                required but before you give oniom you need to add the oil,
                otherwise you will get a raw oil smell in the dish.
                <br></br>
                <span className="text-red-700">● </span>Donot deep dry the
                onions, them should turn a little golden brown colour, now add
                the tomato-ginger-chilli paste in it along with some turmeric
                powder, salt and red chilli powder (as per your taste buds).
                <br></br>
                <span className="text-red-700">● </span>Now cook all the
                ingredients well in medium flame properly.<br></br>
                <span className="text-red-700">● </span>You may add a little
                water as required to let cook the ingredients well.<br></br>
                <span className="text-red-700">● </span>Now add the fried
                mushrooms and prawns in the mix and cook them well till they get
                mixed up well.
                <br></br>
                <span className="text-red-700">● </span>Add the cashew paste and
                a little water.<br></br>
                <span className="text-red-700">● </span>Cook until you are happy
                with the consistency and color of the gravy.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <h3 className="py-16 px-6 font-bold text-white text-center text-4xl md:text-5xl lg:text-6xl">
<span className="hover:px-3  text-orange-800 font-serif font-extrabold">
Prawn{" "}
</span>{" "}
<span className="hover:px-3  text-orange-800 font-serif font-extrabold">
Mushroom{" "}
</span>{" "}
<span className="hover:px-3  text-orange-800 font-serif font-extrabold">
With{" "}
</span>{" "}
<span className="hover:px-3  text-orange-800 font-serif font-extrabold">
Cashew{" "}
</span>
</h3>
<br></br>

<div className="px-4 py-8 bg-stone-900 rounded-lg">
<div className="rounded-lg bg-[#30261fb2] hover:bg-[#413126b2] placeholder:p-8">
<div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
<blockquote className="sm:col-span-2 text-amber-50 ">
<cite className="mt-8 inline-flex items-center not-italic">
<span className="hidden h-px w-6 bg-gray-400 sm:inline-"></span>
<p className="text-lg uppercase text-amber-200 sm:ml-3">
<strong>preparation</strong>, get started.
</p>
</cite>
<p className="lg:text-center">

● Mix the prawn and mushroom in separte bowls with turmeric
powder and salt.<br></br>
● Heat up a pan, pour oil as required.
<br></br>
● Fry the prawns and mushrooms separately in medium
flame.<br></br>
● Donot fry them too much.<br></br>
● Keep them a
little less then fully cooked.<br></br>
● Keep them aside in a
bowl.<br></br>
<br></br>
</p>
</blockquote>
</div>
</div>
</div>

<div className="px-4 py-8 bg-stone-900 rounded-lg lg:text-center">
<div className="rounded-lg bg-[#30261fb2] hover:bg-[#413126b2] p-8">
<div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
<blockquote className="sm:col-span-2 text-amber-50">
<cite className="mt-8 inline-flex items-center not-italic">
<span className="hidden h-px w-6 bg-gray-400 sm:inline-"></span>
<p className="text-xl uppercase text-amber-200 sm:ml-3">
<strong>gravy</strong>, finalize.
</p>
</cite>
<p>

● In the same pan now cook the choopped onions.<br></br>
● You
can add more oil if required but before you give oniom you need
to add the oil, otherwise you will get a raw oil smell in the
dish.
<br></br>
● Donot deep dry the onions, them should turn a little
golden brown colour, now add the tomato-ginger-chilli paste in
it along with some turmeric powder, salt and red chilli powder
(as per your taste buds).<br></br>
● Now cook all the ingredients
well in medium flame properly.<br></br>
● You may add a little
water as required to let cook the ingredients well.<br></br>●
Now add the fried mushrooms and prawns in the mix and cook them
well till they get mixed up well.
<br></br>
● Add the cashew paste and a little water.<br></br>●
Cook until you are happy with the consistency and
color of the gravy.
</p>
</blockquote>
</div>
</div>
</div>

<div
tabIndex={0}
className="collapse collapse-plus border bg-orange-900 rounded-lg text-white border-stone-900"
>
<div className="collapse-title text-xl font-bold text-orange-100 text-center tracking-widest">
Preapration
</div>
<div className="collapse-content">
<p>

● Mix the prawn and mushroom in separte bowls with turmeric powder
and salt.<br></br>
● Heat up a pan, pour oil as required.<br></br>●
Fry the prawns and mushrooms separately in medium flame.<br></br>●
Donot fry them too much.<br></br>
● Keep them a little less then
fully cooked.
<br></br>
● Keep them aside in a bowl.
</p>
</div>
</div> */}
    </section>
  );
}
