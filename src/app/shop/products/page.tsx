"use client";

import { useState } from "react";
import { CartItem, Product } from "@/src/constants/products.constants";
import { useUser } from "@clerk/nextjs";
import { getCheckOutUrl } from "../../actions/fetchCheckOut.actions";
import { addProduct } from "../../actions/addProduct.actions";

export default function Products({ products }: { products: Product[] | null}) {
  //Here we will destruct the prop {products:PRODUCTS}, {products} with this we will extract it's value which is PRODUCTS and then add type annotation on this extracted value, that it is an array of Products

  const { isLoaded } = useUser();

  const isAdmin =
    useUser().user?.organizationMemberships[0]?.roleName == "Admin";

  const [cart, setCart] = useState<CartItem[]>([]);

  if (!products || products.length === 0) {
  return ( <div className="min-h-screen flex flex-col justify-center items-center">
            <p className="text-zinc-500 text-xl">No products found.</p>;
            <button
              style={{ backgroundColor: "#816FFA" }}
              className="text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer text-center text-sm shadow-sm hover:opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#816FFA] focus:ring-offset-2"
              onClick={addProduct}>
                Add Product
            </button>
          </div>
        )
}

  const addToCart = async (id: string) => {
    setCart((prevCart) => {
      // 1. Check if the product already exists in the previous state array
      const existingProduct = prevCart.find((item) => item.id === id);
      console.log('does exist', existingProduct)
      if (existingProduct != null) {
        console.log(prevCart)
        // 2. If it exists, return a NEW array with the target item's quantity incremented cleanly
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      // 3. If it's a completely new item, append it with quantity 1
      return [...prevCart, { id, quantity: 1 }];
    });
  };

  const handleBuy = async () => {
    console.log("clicked");

    if(cart.length == 0){
      alert('Please add products to cart first.')
      return
    }
    try {
      const checkOutUrl: string = await getCheckOutUrl(cart, "payment");
      window.location.href = checkOutUrl;
    } catch (e) {
      console.log("Error while fetching checkout page..");
    }
  };

  return (
    <>
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
            <div className="min-w-xs flex justify-between">
            {isLoaded && (
              <button
                style={{ backgroundColor: "#816FFA" }}
                className="text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer text-center text-sm shadow-sm hover:opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#816FFA] focus:ring-offset-2"
                onClick={handleBuy}
              >
              {cart.length} Items' CheckOut
              </button>
            )}

            {isLoaded && isAdmin && (
              <button
                style={{ backgroundColor: "#816FFA" }}
                className="text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer text-center text-sm shadow-sm hover:opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#816FFA] focus:ring-offset-2"
                onClick={addProduct}
              >
                Add Products
              </button>
            )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((item: Product) => (
              <div
                key={item.id}
                className="flex flex-col justify-between bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-200"
              >
                <div>
                  {/* Clean, minimal product layout frame */}
                  <div className="w-full h-52 bg-zinc-50 border border-zinc-100 rounded-xl mb-5 flex items-center justify-center text-zinc-400 text-xs tracking-wider uppercase font-medium">
                    Placeholder Image
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 mb-1.5 group-hover:text-zinc-700">
                    {item.name}
                  </h3>

                  <p className="text-sm text-zinc-500 leading-relaxed mb-6 line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-2xl font-black text-zinc-900">
                      ${item.price}
                    </span>
                    <span className="text-xs font-semibold text-zinc-400 ml-1.5 uppercase">
                      USD
                    </span>
                  </div>

                  {/* Secondary Color (#816FFA) applied natively via Tailwind arbitrary values */}
                  { isLoaded && (
                    <button
                      onClick={() => addToCart(item.priceId)}
                      style={{ backgroundColor: "#816FFA" }}
                      className="w-full text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer text-center text-sm shadow-sm hover:opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#816FFA] focus:ring-offset-2"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
