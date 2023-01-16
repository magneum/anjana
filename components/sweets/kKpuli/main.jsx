import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
export default function Main() {
  useEffect(() => {}, []);
  return (
    <section>
      <a className="block border bg-amber-50 p-8">
        <h3 className="font-bold text-white text-center text-3xl md:text-4xl lg:text-5xl">
          <span className="hover:px-3  text-yellow-800 font-serif font-extrabold">
            Khoya{" "}
          </span>{" "}
          <span className="hover:px-3  text-yellow-800 font-serif font-extrabold">
            Kheer{" "}
          </span>{" "}
          <span className="hover:px-3  text-yellow-800 font-serif font-extrabold">
            Puli{" "}
          </span>
        </h3>
        <br></br>

        <div className="px-4 py-8 bg-amber-50">
          <div className="rounded-lg bg-yellow-800 p-8">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <blockquote className="sm:col-span-2 text-amber-50 ">
                <cite className="mt-8 inline-flex items-center not-italic">
                  <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                  <p className="text-lg uppercase text-amber-200 sm:ml-3 ">
                    <strong>stuffing / filling</strong>
                  </p>
                </cite>
                <p>
                  ● Take the shredded coconut in a bowl, mix it well with 100gm
                  of Khowa/mawa kheer (dried evaporated milk) and 100gm of
                  sugar.<br></br>● Your filling is ready, keep it aside and now
                  prepare the puli.
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="px-4 py-8 bg-amber-50">
          <div className="rounded-lg bg-yellow-800 p-8">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <blockquote className="sm:col-span-2 text-amber-50 ">
                <cite className="mt-8 inline-flex items-center not-italic">
                  <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                  <p className="text-lg uppercase text-amber-200 sm:ml-3 ">
                    <strong>preparation</strong>, get started.
                  </p>
                </cite>
                <p>
                  ● Heat around 500ml of water in a pan, till it is a little
                  boiled.<br></br>● Add 250gm of flour and 250gm of rice flour
                  in it and mix it well, add 1tablespoon of ghee to the mix.
                  <br></br>● Turn off the flame.<br></br>● Mix all the
                  ingredients well amd prepare a soft pliable dough.<br></br>●
                  Make some small round shapes like balls, as you make for puri,
                  luchi or roti.<br></br>● Flatten it into pattie y pressing it
                  in between your palms.<br></br>● Place approximately 1
                  tablespoon of the filling im the centre of the pattie,.
                  <br></br>● Donot over stuff it, otherwise it will be difficult
                  to get a proper "puli" shape.<br></br>● Lift the edge from one
                  side over the other side giving a semicircular shape and start
                  pleating.<br></br>● Prepare puli from the remaining dough
                  patties in the similar way.<br></br>● Keep all the pulis
                  aside.
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="px-4 py-8 bg-amber-50">
          <div className="rounded-lg bg-yellow-800 p-8">
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
                  paste in it along with some turmeric powder, salt and yellow
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
className="collapse collapse-plus border bg-yellow-900 rounded-lg text-white border-stone-900"
>
<div className="collapse-title text-xl font-bold text-yellow-100 text-center tracking-widest">
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
