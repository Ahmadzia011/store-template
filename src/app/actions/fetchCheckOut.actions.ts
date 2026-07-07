"use server";

import { CANCELLATION_PAGE, CartItem, SUCCESS_PAGE } from "@/src/constants/products.constants";
import { getStripe } from "@/src/lib/stripeInstance";
import Stripe from "stripe";

export async function getCheckOutUrl(
  cart: CartItem[],
  mode: Stripe.Checkout.SessionCreateParams.Mode,
) {

    const line_items = cart.map((prod) => {
    const item: Stripe.Checkout.SessionCreateParams.LineItem = {
      price: prod.id,
      quantity: prod.quantity,
    };
    return item;
  });


  try {
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode,
      success_url: SUCCESS_PAGE,
      cancel_url: CANCELLATION_PAGE,
    });

    if (!session.url) {
      throw new Error("Stripe session URL is missing");
    }
    return session.url;
  } catch (e: any) {
    throw new Error(
      e.message || "An unexpected error occurred during checkout.",
    );
  }
}
