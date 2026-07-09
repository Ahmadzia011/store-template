'use server'

import { prisma } from "@/src/lib/prisma";
import { getStripe } from "@/src/lib/stripeInstance";
import { revalidatePath } from "next/cache";


const PRODUCTS = {
    name: 'Water bottle',
    description : 'Stainless steel water bottle with 200ml capacity.',
    price : 10
}
  const stripe = getStripe()
  if (!stripe) throw new Error('Failed to fetch stripe instance')

export async function addProduct(){    

  try{
    const product = await stripe.products.create({
        name : PRODUCTS.name,
        description: PRODUCTS.description
    })

    const price = await stripe.prices.create({
        product: product.id,
        unit_amount: Math.round(PRODUCTS.price * 100), // Multiplied with 100 to convert cents to dollars.
        currency: 'usd',
     })

     
    const productAdded = await prisma.product.create({
        data : {
            id : product.id,
            name: PRODUCTS.name,
            priceId: price.id,
            desc: PRODUCTS.description,
            price: PRODUCTS.price
        }
    })
    revalidatePath('/shop')
    return {
        success : true
    }

}
catch(e:any){
    return {
        success : false,
        error : e.message ?? 'Unexpected Error Occurred'
    }
}
}