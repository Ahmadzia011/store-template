'use server'

import { getStripeKey } from "@/src/lib/stripeInstance";


interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export async function getCheckOutUrl(cart:CartItem[]) {

  const line_items = cart.map(
    prod => {
      return {
        price_data: {
          currency : 'usd',
          product_data: {
            name: prod.name
          },
          unit_amount: prod.price * 100,
        },
        quantity:prod.quantity
      }
    }
  )
  try {
    const stripe = getStripeKey();

    const session = await stripe.checkout.sessions.create({

      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "http://localhost:3000/",
      cancel_url: "http://localhost:3000/cancel",
    });

    
    return(session.url)
  }
  
  catch (e: any) {
    console.log(e)
    return e
  }
}
