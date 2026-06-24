'use server'

import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addProduct(){    

    const productAdded = await prisma.product.create({
        data : {
            name:'Test Product',
            price: 12.5,
            desc: 'This is a test product that we are adding'
        }
    })
    console.log(productAdded)
    revalidatePath('/shop')
}