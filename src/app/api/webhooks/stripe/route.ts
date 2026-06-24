import { getStripeKey } from "@/src/lib/stripeInstance";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let stripe;
  let event;

  try {
    stripe = getStripeKey();
  } catch (e) {
    throw new Error("Failed to load stripe key");
  }

  try {
    event = stripe.webhooks.constructEvent(
      await req.text(), //raw payload that comes from stipe
      req.headers.get("stripe-signature")!, //signature that comes from stripe to match with our for verification
      process.env.STRIPE_WEBHOOK_SECRET!, // our stored signature for comparing
    );
  } catch (e) {
    return new NextResponse("Failed to verify the webhook", {
      status: 400,
    });
  }

  try {
    const eventType = event.type;

    switch (eventType) {
        case 'checkout.session.completed':{
            console.log(event)  
        }
    }
    return new NextResponse("Successfully verified the event", {
      status: 200,
    });
  } catch (e: any) {
    return new NextResponse(`Webhook Error: ${e.message}`, { status: 400 });
  }
}
