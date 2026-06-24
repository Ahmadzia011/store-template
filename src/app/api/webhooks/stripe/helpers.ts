import { prisma } from "@/src/lib/prisma";

export async function handleCheckoutSuccess(customerId : string) {

try {
    if(!customerId || customerId.length == 0){
        console.log(customerId)
        throw new Error('Customer Id is null or undefined')
    }
   const results =  await prisma.purchase.create({
        data : {
            customer:{
                connect:{
                    id:customerId
                }
            },
            timeStamp: new Date()
        }
    })
}
catch(e){
        console.log('Purchase failed', e)

}
}