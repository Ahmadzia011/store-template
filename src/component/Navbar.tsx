import { UserButton, useUser } from "@clerk/nextjs";

export default function NavBar(){

    const { isLoaded } = useUser()
    return(

      <nav className="w-full bg-white text-primary border-b mt-5 py-5 border-light sticky top-0 z-50 bg-white">
        <div className="container-custom flex items-center justify-between py-4">
          <div className="text-xl font-bold" style={{ color: 'var(--color-5)' }}>
            <a href="/" className="transition-fast hover:text-accent">Scrapcher</a>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="/products" className="transition-fast hover:text-accent">Products</a>
            <a href="/subscription" className="transition-fast hover:text-accent">Subscription</a>
            <a href="#testimonials" className="transition-fast hover:text-accent">Testimonials</a>
            <a href="#pricing" className="transition-fast hover:text-accent">Pricing</a>
            
          </div>
          <UserButton/>   
        </div>
      </nav>
    )
    }
