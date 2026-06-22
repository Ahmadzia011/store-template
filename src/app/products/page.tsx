"use client";

import NavBar from "@/src/component/navBar";
import { getCheckOutUrl } from "../actions/fetchCheckOut.actions";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Mechanical Keyboard",
    price: 129,
    description: "Hot-swappable tactile switches with RGB backlighting.",
  },
  {
    id: 2,
    name: "Ergonomic Wireless Mouse",
    price: 89,
    description:
      "High-precision tracking with an ultra-comfortable thumb rest.",
  },
  {
    id: 3,
    name: "Ultra-Wide Monitor Lightbar",
    price: 49,
    description: "Asymmetric forward projection prevents screen glare.",
  },
];

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export default function Products() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = async (name: string, price: number) => {
    setCart((prevCart) => {
      // 1. Check if the product already exists in the previous state array
      const existingProduct = prevCart.find((item) => item.name === name);

      if (existingProduct) {
        // 2. If it exists, return a NEW array with the target item's quantity incremented cleanly
        return prevCart.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      // 3. If it's a completely new item, append it with quantity 1
      return [...prevCart, { name, price, quantity: 1 }];
    });
    console.log(cart);
  };


  const handleBuy = async () => {
    console.log("clicked");
    try {
      const checkOutUrl: string = await getCheckOutUrl(cart);

      window.location.href = checkOutUrl;
    } catch (e) {
      console.log("Error while fetching checkout page..");
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
                Featured Products
              </h2>
              <p className="text-sm text-zinc-500 mt-2">
                Engineered tools optimized for precision and daily tactile
                comfort.
              </p>
            </div>
            <button
              style={{ backgroundColor: "#816FFA" }}
              className="text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer text-center text-sm shadow-sm hover:opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#816FFA] focus:ring-offset-2"
              onClick={handleBuy}
            >
              {cart.length} Items' CheckOut
            </button>
          </div>

          {/* 3-Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
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
                    onClick={() => addToCart(product.name, product.price)}
                    style={{ backgroundColor: "#816FFA" }}
                    className="w-full text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer text-center text-sm shadow-sm hover:opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#816FFA] focus:ring-offset-2"
                  >
                    Add to Cart
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
