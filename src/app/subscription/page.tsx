
import { getCheckOutUrl } from "../actions/fetchCheckOut.actions";
import { prisma } from "@/src/lib/prisma";
import Plans from "./plans/page";

export default async function subsPage() {

  const fetchedPlans = await prisma.plan.findMany()

  return (
    <>
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
        <Plans plans={fetchedPlans} />
        </div>
      </div>
    </>
  );
}
