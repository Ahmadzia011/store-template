import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// middleware checks if the user is allowed to get this path data or not
const isPublic = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/api/webhooks(.*)'])

 export default clerkMiddleware(async (auth, req)=>{
   if(!isPublic(req)) await auth.protect();
 })


//  Next js matcher determines which path should hit the middleware
 export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/(.*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};