"use client";

import NavBar from "@/src/component/Navbar";
import { getCheckOutUrl } from "../actions/fetchCheckOut.actions";
import { useState } from "react";
import { PLANS, CartItem } from "@/src/constants/products.constants";

export default function Plans() {

  const handleBuy = async (cart:CartItem[]) => {
    try {
      const checkOutUrl = await getCheckOutUrl(cart, 'subscription');

      // Add a safety check
    if (!checkOutUrl) {
      throw new Error("No checkout URL was returned from the server.");
    }
      window.location.href = checkOutUrl;
      
    } catch (e) {
      console.error("Error while fetching checkout page..");
    }
  };

  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen bg-white text-zinc-900 px-4 py-16">
        <div className="w-full max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="flex justify-between items-center">
            <div className="mb-12 text-center md:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
                Featured Plans
              </h2>
              <p className="text-sm text-zinc-500 mt-2">
                Engineered tools optimized for precision and daily tactile
                comfort.
              </p>
            </div>
          </div>

          {/* 3-Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((product) => (
              <div
                key={product.id}
                className="flex flex-col justify-between bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-200"
              >
                <div>
                  {/* Clean, minimal product layout frame */}
                  <div className="w-full h-52 bg-zinc-50 border border-zinc-100 rounded-xl mb-5 flex items-center justify-center text-zinc-400 text-xs tracking-wider uppercase font-medium">
                    Placeholder Image
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 mb-1.5 group-hover:text-zinc-700">
                    {product.name}
                  </h3>

                  <p className="text-sm text-zinc-500 leading-relaxed mb-6 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-2xl font-black text-zinc-900">
                      ${product.price}
                    </span>
                    <span className="text-xs font-semibold text-zinc-400 ml-1.5 uppercase">
                      USD
                    </span>
                  </div>

                  {/* Secondary Color (#816FFA) applied natively via Tailwind arbitrary values */}
                  <button
                    onClick={() => {
                        const prod:CartItem = {
                            name: product.name,
                            price: product.price,
                            quantity: 1
                        }
                        handleBuy([prod])}}
                    style={{ backgroundColor: "#816FFA" }}
                    className="w-full text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer text-center text-sm shadow-sm hover:opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#816FFA] focus:ring-offset-2"
                  >
                    Buy Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
