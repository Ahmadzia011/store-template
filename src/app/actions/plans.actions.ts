"use server";

import { prisma } from "@/src/lib/prisma";
import { getStripe } from "@/src/lib/stripeInstance";
import { revalidatePath } from "next/cache";

const PLANS = {
  name: "Pro Plan",
  description: "This is the pro plan and it has 100 credits.",
  price: 20,
  credits: 200,
};

const stripe = getStripe();
if (!stripe) throw new Error("Error while fetching stripe instance");

export async function addPlan() {

  try {
    const product = await stripe.products.create({
      name: PLANS.name,
      description: PLANS.description,
    });

    const price = await stripe.prices.create({
      product: product.id,
      currency: "usd",
      unit_amount: Math.round(PLANS.price * 100),
    });

    await prisma.plan.create({
      data: {
        id: product.id,
        name: PLANS.name,
        desc: PLANS.description,
        price: PLANS.price,
        priceId: price.id,
        credits: PLANS.credits,
      },
    });

    revalidatePath('/subscription')
    return {success: true}

  }
  
  catch (e:any) {
    return(
        {
            success : false,
            error : e.message ?? 'Unexpected error occurred.'
        }
    )
  }
}
