import Stripe from "stripe";

let stripeInstance: Stripe;

export function getStripeKey(): Stripe {

  if (!stripeInstance) {
    const stripe_key = process.env.STRIPE_SECRET_KEY!;
    if (!stripe_key) {
      throw new Error(
        "STRIPE_SECRET_KEY is missing from environment variables",
      );
    }
    stripeInstance = new Stripe(stripe_key);
  }
  return stripeInstance;
}
