import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
export default function Main() {
  useEffect(() => {}, []);
  return (
    <section className="bg-amber-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gradient-to-r from-[#520301] to-[#ac4814] shadow-lg">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/prawn_1.png"
                alt="blob"
                width={500}
                height={500}
              ></Image>
              <div className="p-6">
                <a
                  className="bg-gradient-to-r from-stone-900 via-stone-800 to-orange-900 shadow-lg inline-flex items-center rounded-lg px-8 py-3 text-orange-300 hover:bg-stone-800 hover:text-white focus:outline-none focus:ring active:bg-white/90"
                  href="/receipes/PrawnMushroomWithCashew"
                >
                  <span className="text-lg font-medium">
                    Prawn Mushroom with Cashew Receipe
                  </span>
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
                <br></br>
                <br></br>
                <h1 className="title-font text-lg font-medium text-white mb-3 ">
                  Ingrediants
                </h1>
                <p className="leading-relaxed mb-3 text-orange-100">
                  <span className="text-orange-300 font-bold">1.</span>
                  Prawn<br></br>
                  <span className="text-orange-300 font-bold">2.</span>
                  Button Mushroom<br></br>
                  <span className="text-orange-300 font-bold">3.</span>
                  Cashew paste<br></br>
                  <span className="text-orange-300 font-bold">4.</span>
                  Tomato, chilli, onions, ginger paste<br></br>
                  <span className="text-orange-300 font-bold">5.</span>
                  Turmeric powder, salt, red chilli powder.<br></br>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="p-4 md:w-1/3">
<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gradient-to-r from-[#520301] to-[#ac4814] shadow-lg">
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center"
src="/tikka.jpg"
alt="blob"
width={500}
height={500}
></Image>
<div className="p-6">
<a
className="bg-gradient-to-r from-stone-900 via-stone-800 to-orange-900 shadow-lg inline-flex items-center rounded-lg px-8 py-3 text-orange-300 hover:bg-stone-800 hover:text-white focus:outline-none focus:ring active:bg-white/90"
href="#"
>
<span className="text-lg font-medium">
Chicken Tikka Masala Receipe
</span>
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
<br></br>
<br></br>
<h1 className="title-font text-lg font-medium text-white mb-3 ">
Ingrediants
</h1>
<p className="leading-relaxed mb-3 text-orange-100">
<span className="text-orange-300 font-bold">1.</span> 100g
Shemin’s Indian Curry Paste<br></br>
<span className="text-orange-300 font-bold">2.</span> 2
tsp Shemin’s Garam Masala<br></br>
<span className="text-orange-300 font-bold">3.</span>
375ml full fat yoghurt<br></br>
<span className="text-orange-300 font-bold">4.</span> 1
tsp salt (optional)<br></br>
<span className="text-orange-300 font-bold">5.</span> 750g
skinless, boneless chicken breasts, halved lengthwise into
strips<br></br>
<span className="text-orange-300 font-bold">6.</span> 2
tbsp oil<br></br>
<span className="text-orange-300 font-bold">7.</span> 1
small onion, thinly sliced<br></br>
<span className="text-orange-300 font-bold">8.</span> 1
tbsp tomato paste<br></br>
<span className="text-orange-300 font-bold">9.</span> 6
cardamom pods, crushed (optional)<br></br>
<span className="text-orange-300 font-bold">10.</span> 1 x
400g can chopped tomatoes<br></br>
<span className="text-orange-300 font-bold">11.</span> 2
small green chillies, split (optional)<br></br>
<span className="text-orange-300 font-bold">12.</span>
100ml whipping cream<br></br>
<span className="text-orange-300 font-bold">13.</span> 3/4
cup chopped fresh coriander plus sprigs for garnish
<br></br>
<span className="text-orange-300 font-bold">14.</span>
Juice of 1 lime or lemon<br></br>
<span className="text-orange-300 font-bold">15.</span>
Steamed basmati rice (for serving)<br></br>
</p>
</div>
</div>
</div> */}
          {/* <div className="p-4 md:w-1/3">
<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gradient-to-r from-[#520301] to-[#ac4814] shadow-lg">
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center"
src="/prawn_1.png"
alt="blob"
width={500}
height={500}
></Image>
<div className="p-6">
<a
className="bg-gradient-to-r from-stone-900 via-stone-800 to-orange-900 shadow-lg inline-flex items-center rounded-lg px-8 py-3 text-orange-300 hover:bg-stone-800 hover:text-white focus:outline-none focus:ring active:bg-white/90"
href="#"
>
<span className="text-lg font-medium">
Prawn Mushroom with Cashew Receipe
</span>
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
<br></br>
<br></br>
<h1 className="title-font text-lg font-medium text-white mb-3 ">
Ingrediants
</h1>
<p className="leading-relaxed mb-3 text-orange-100">
<span className="text-orange-300 font-bold">1.</span>
Prawn<br></br>
<span className="text-orange-300 font-bold">2.</span>
Button Mushroom<br></br>
<span className="text-orange-300 font-bold">3.</span>
Cashew paste<br></br>
<span className="text-orange-300 font-bold">4.</span>
Tomato, chilli, onions, ginger paste<br></br>
<span className="text-orange-300 font-bold">5.</span>
Turmeric powder, salt, red chilli powder.<br></br>
</p>
</div>
</div>
</div> */}
        </div>
      </div>{" "}
      <hr
        style={{
          color: "#3f2e2cc0",
          backgroundColor: "#D4645C",
          height: 6,
          borderColor: "#3f2e2cc0",
        }}
      />
    </section>
  );
}
