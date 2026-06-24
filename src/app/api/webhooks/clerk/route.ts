import { WebhookEvent } from "@clerk/nextjs/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest, NextResponse } from "next/server";
import { addUser, deleteUser, updateUser } from "./helpers";

export async function POST(req: NextRequest) {
  let event: WebhookEvent;

  try {
    event = await verifyWebhook(req);
  } catch (e: any) {
    return (
      new NextResponse("Failed to verify the coming request"),
      {
        status: 403,
      }
    );
  }
  console.log(event);

  const eventType = event.type;
  try {
    switch (eventType) {
      case "user.created": {
        const { id, first_name, last_name, email_addresses } = event.data;
        const email_address =  email_addresses[0]?.email_address ?? ''
        await addUser({
          id,
          first_name: first_name ?? '',
          last_name: last_name ?? '',
          email_address,
        });
        addUserToStripe(id, email_address) //to add the user in stripe as well
        break;
      }

      case "user.updated": {
        const { id, first_name, last_name, email_addresses } = event.data; //storing for each case, because each event has some diferent fields so typescript prevents the error
        await updateUser({
          id,
          first_name: first_name ?? '',
          last_name: last_name ?? '',
          email_address: email_addresses[0]?.email_address ?? '',
        })
        break;
      }

      case "user.deleted": {
        const id:string = event.data.id!
        await deleteUser(id);
        break;
      }
    }

    return new NextResponse("Successfully recieved the notification", {
      status: 200,
    });
  } catch (e:any) {
    console.log(e.message)
    return new NextResponse(e.message, {
      status: 400,
    });
  }
}
