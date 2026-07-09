"use client";

import { Plan } from "@/src/constants/plan.constants";
import { getCheckOutUrl } from "../../actions/checkOut.actions";
import { addPlan } from "../../actions/plans.actions";
import { useUser } from "@clerk/nextjs";

export default function Plans({ plans }: { plans: Plan[] | null }) {
  const { user } = useUser();
  const isAdmin = user?.organizationMemberships[0]?.roleName;

  if (!plans || plans.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <p className="text-zinc-500 text-xl">No products found.</p>;
        {isAdmin && (
          <button
            style={{ backgroundColor: "#816FFA" }}
            className="text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer text-center text-sm shadow-sm hover:opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#816FFA] focus:ring-offset-2"
            onClick={addPlan}
          >
            Add Product
          </button>
        )}
      </div>
    );
  }
  const handleBuy = async (id: string, quantity: number) => {
    try {
      const checkOutUrl = await getCheckOutUrl(
        [
          {
            id,
            quantity,
          },
        ],
        "subscription",
      );

      // Add a safety check
      if (!checkOutUrl) {
        throw new Error("No checkout URL was returned from the server.");
      }
      window.location.href = checkOutUrl;
    } catch (e) {
      console.error("Error while fetching checkout page..");
    }
  };


  const handleAddPlan = async () => {
    const isPlanAdded = await addPlan()
    if(!isPlanAdded.success) alert('Failed to add the product..')
  }

  return (
    <>
      
        {isAdmin && (
          <button
            style={{ backgroundColor: "#816FFA" }}
            className="mb-10 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer text-center text-sm shadow-sm hover:opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#816FFA] focus:ring-offset-2"
            onClick={handleAddPlan}
          >
            Add Product
          </button>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan: Plan) => (
            <div
              key={plan.id}
              className="flex flex-col justify-between bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-200"
            >
              <div>
                {/* Clean, minimal product layout frame */}
                <div className="w-full h-52 bg-zinc-50 border border-zinc-100 rounded-xl mb-5 flex items-center justify-center text-zinc-400 text-xs tracking-wider uppercase font-medium">
                  Placeholder Image
                </div>

                <h3 className="text-lg font-bold text-zinc-900 mb-1.5 group-hover:text-zinc-700">
                  {plan.name}
                </h3>
              </div>

              <div>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-black text-zinc-900">
                    ${plan.price}
                  </span>
                  <span className="text-xs font-semibold text-zinc-400 ml-1.5 uppercase">
                    USD
                  </span>
                </div>

                {/* Secondary Color (#816FFA) applied natively via Tailwind arbitrary values */}
                <button
                  onClick={() => {
                    handleBuy(plan.id, 1);
                  }}
                  style={{ backgroundColor: "#816FFA" }}
                  className="w-full text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer text-center text-sm shadow-sm hover:opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#816FFA] focus:ring-offset-2"
                >
                  Buy Plan
                </button>
              </div>
            </div>
          ))}
        </div>
    </>
  );
}
