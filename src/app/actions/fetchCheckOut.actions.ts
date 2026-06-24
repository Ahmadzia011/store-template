"use server";

import { CANCELLATION_PAGE, CartItem, SUCCESS_PAGE } from "@/src/constants/products.constants";
import { getStripe } from "@/src/lib/stripeInstance";
import { auth } from "@clerk/nextjs/server";
import Stripe from "stripe";

export async function getCheckOutUrl(
  cart: CartItem[],
  mode: Stripe.Checkout.SessionCreateParams.Mode,
) {
    const {userId} = await auth()
    const line_items = cart.map((prod) => {
    const item: Stripe.Checkout.SessionCreateParams.LineItem = {
      price_data: {
        currency: "usd",
        product_data: {
          name: prod.name,
        },
        unit_amount: Math.round(prod.price * 100)
      },
      quantity: prod.quantity,
    };

    // Only add recurring configuration if the mode is subscription
    if (mode === "subscription") {
    if(item.price_data){
        item.price_data.recurring = { interval: "month" };
      }
    }

    return item;
  });


  try {
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode,
      client_reference_id: userId!,
      success_url: SUCCESS_PAGE,
      cancel_url: CANCELLATION_PAGE,
    });

    if (!session.url) {
      throw new Error("Stripe session URL is missing");
    }
    return session.url;
  } catch (e: any) {
    console.log(e.message);
    throw new Error(
      e.message || "An unexpected error occurred during checkout.",
    );
  }
}
