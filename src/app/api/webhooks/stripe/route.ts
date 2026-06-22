import { getStripeKey } from "@/src/lib/stripeInstance"
import { NextRequest, NextResponse } from "next/server"


export async function POST(req : NextRequest){
   try{
    const stripe = getStripeKey();

    const event = stripe.webhooks.constructEvent(
      await req.text(), //raw payload that comes from stipe
      req.headers.get("stripe-signature")!, //signature that comes from stripe to match with our for verification
      process.env.STRIPE_WEBHOOK_SECRET! // our stored signature for comparing
    );

    return new NextResponse('Successfully verified the event', {
        status:200
    })

}
catch(e:any){
    return new NextResponse(`Webhook Error: ${e.message}`, { status: 400 });
}
}