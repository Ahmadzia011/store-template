import { WebhookEvent } from "@clerk/nextjs/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest) {
    
    let event : WebhookEvent;

    try{
        event = await verifyWebhook(req)
        console.log(event.type)
        return new NextResponse('Success', {
            status: 200
        })
    }
    catch(e){
        return new NextResponse('Found an error', {
            status:400
        })
    }

}
