import { getCredits } from "@/src/app/actions/credits.actions";
import {  UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function NavBar(){

  const {userId} = await auth()
  if(!userId) return
  
  const credits = await getCredits(userId)
    return(

      <nav className="h-[10vh] w-full bg-white text-primary border-b mt-5 py-5 border-light top-0 z-50 bg-white">
        <div className="container-custom flex items-center justify-between py-4">
          <div className="text-xl font-bold" style={{ color: 'var(--color-5)' }}>
            <a href="/" className="transition-fast hover:text-accent">Zyntra</a>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="/shop" className="transition-fast hover:text-accent">Shop</a>
            <a href="/service" className="transition-fast hover:text-accent">Service</a>
            <a href="/subscription" className="transition-fast hover:text-accent">Subscription</a>
            <a href="#testimonials" className="transition-fast hover:text-accent">Testimonials</a>
            <a href="#pricing" className="transition-fast hover:text-accent">Pricing</a>
          </div>
           <p className="bg-amber-500 text-white py-1 px-2 text-sm rounded-sm">Credits: {credits}</p>
          <UserButton/>
        </div>
      </nav>
    )
    }
