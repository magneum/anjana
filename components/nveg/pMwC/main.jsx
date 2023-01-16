import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
export default function Main() {
  return (
    <section>
      <a className="block border bg-amber-50 p-8">
        <h3 className="font-bold text-white text-center text-3xl md:text-4xl lg:text-5xl">
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

        <div className="px-4 py-8 bg-amber-50">
          <div className="rounded-lg bg-orange-800 p-8">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <blockquote className="sm:col-span-2 text-amber-50 ">
                <cite className="mt-8 inline-flex items-center not-italic">
                  <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                  <p className="text-lg uppercase text-amber-200 sm:ml-3 ">
                    <strong>preparation</strong>, get started.
                  </p>
                </cite>
                <p>
                  ● Mix the prawn and mushroom in separte bowls with turmeric
                  powder and salt.<br></br>● Heat up a pan, pour oil as
                  required.
                  <br></br>● Fry the prawns and mushrooms separately in medium
                  flame.<br></br>● Donot fry them too much.<br></br>● Keep them
                  a little less then fully cooked.
                  <br></br>● Keep them aside in a bowl.
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="px-4 py-8 bg-amber-50">
          <div className="rounded-lg bg-orange-800 p-8">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <blockquote className="sm:col-span-2 text-amber-50">
                <cite className="mt-8 inline-flex items-center not-italic">
                  <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                  <p className="text-xl uppercase text-amber-200 sm:ml-3">
                    <strong>gravy</strong>, finalize.
                  </p>
                </cite>
                <p>
                  ● In the same pan now cook the choopped onions.<br></br>● You
                  can add more oil if required but before you give oniom you
                  need to add the oil, otherwise you will get a raw oil smell in
                  the dish.
                  <br></br>● Donot deep dry the onions, them should turn a
                  little golden brown colour, now add the tomato-ginger-chilli
                  paste in it along with some turmeric powder, salt and red
                  chilli powder (as per your taste buds).<br></br>● Now cook all
                  the ingredients well in medium flame properly.<br></br>● You
                  may add a little water as required to let cook the ingredients
                  well.<br></br>● Now add the fried mushrooms and prawns in the
                  mix and cook them well till they get mixed up well.
                  <br></br>● Add the cashew paste and a little water.<br></br>●
                  Cook until you are happy with the consistency and
                  color of the gravy.
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* <div
tabIndex={0}
className="collapse collapse-plus border bg-orange-900 rounded-lg text-white border-stone-900"
>
<div className="collapse-title text-xl font-bold text-orange-100 text-center tracking-widest">
Preapration
</div>
<div className="collapse-content">
<p>
● Mix the prawn and mushroom in separte bowls with turmeric powder
and salt.<br></br>● Heat up a pan, pour oil as required.<br></br>●
Fry the prawns and mushrooms separately in medium flame.<br></br>●
Donot fry them too much.<br></br>● Keep them a little less then
fully cooked.
<br></br>● Keep them aside in a bowl.
</p>
</div>
</div> */}
      </a>
    </section>
  );
}
