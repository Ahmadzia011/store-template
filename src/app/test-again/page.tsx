import React from 'react';

// --- CUSTOM INLINE SVG COMPONENTS FOR CLEAN DEPENDENCY-FREE RENDERING ---
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function ZeroCostLandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-teal-500 selection:text-white">
      
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-2xl font-black tracking-tight text-teal-950 flex items-center gap-1.5">
              <span className="w-3 h-3 bg-teal-600 rounded-full animate-pulse"></span>
              ZeroCost
            </span>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-teal-600 transition">Platform</a>
              <a href="#solutions" className="hover:text-teal-600 transition">Solutions</a>
              <a href="#pricing" className="hover:text-teal-600 transition">Pricing</a>
              <a href="#insights" className="hover:text-teal-600 transition">Insights</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-700 hover:text-teal-600 transition px-4 py-2">Login</button>
            <button className="text-sm font-medium bg-teal-950 text-white hover:bg-teal-900 transition px-5 py-2.5 rounded-full shadow-sm shadow-teal-950/10">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-teal-950 leading-[1.1]">
              Global finance payment infrastructure built for modern businesses.
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Accept payments, send payouts, and manage your business balance globally with an all-in-one financial toolkit optimized for conversion.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition shadow-lg shadow-teal-600/20">
                Get Started Now
              </button>
              <button className="border border-slate-200 bg-white text-slate-700 hover:bg-slate-5, px-8 py-4 rounded-full font-medium transition">
                Contact sales
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="pt-4 border-t border-slate-200/60 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center font-bold text-xs">A</div>
                <div className="w-9 h-9 rounded-full bg-teal-600 border-2 border-white flex items-center justify-center font-bold text-xs text-white">B</div>
                <div className="w-9 h-9 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center font-bold text-xs">C</div>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Trusted by modern product leaders <span className="text-teal-950 font-bold">4.9/5 Rating</span>
              </p>
            </div>
          </div>

          {/* Right Column (Hero App Graphic) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[9/18] bg-slate-900 rounded-[48px] shadow-2xl border-[10px] border-slate-900 overflow-hidden ring-1 ring-black/5">
              <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 flex justify-center z-20">
                <div className="w-28 h-4 bg-black rounded-b-xl"></div>
              </div>
              <div className="p-6 pt-10 h-full bg-gradient-to-b from-teal-50 to-white flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold text-slate-400 tracking-wider">BALANCE</span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">Live</span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-teal-950">$182,520.45</h3>
                  <p className="text-xs text-slate-500 mt-1">Available to withdraw</p>
                  
                  {/* Decorative Card inside frame */}
                  <div className="mt-6 bg-gradient-to-br from-teal-700 to-teal-950 p-4 rounded-2xl text-white shadow-lg">
                    <p className="text-[10px] opacity-75 uppercase tracking-widest">Corporate Card</p>
                    <p className="text-md font-medium mt-4">**** **** **** 8824</p>
                    <div className="flex justify-between items-end mt-4">
                      <span className="text-xs font-bold">ZeroCost Premium</span>
                      <span className="w-6 h-6 bg-white/20 rounded-full"></span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-2 bg-slate-100 rounded-full w-2/3"></div>
                  <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm grid grid-cols-2 md:grid-cols-3 gap-8 text-center divide-x divide-slate-100">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-teal-950">22%</p>
              <p className="text-sm font-medium text-slate-500 mt-1">Faster Checkout conversion</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-teal-950">185+</p>
              <p className="text-sm font-medium text-slate-500 mt-1">Supported countries</p>
            </div>
            <div className="col-span-2 md:col-span-1 border-t md:border-t-0 pt-6 md:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-teal-950">$20B+</p>
              <p className="text-sm font-medium text-slate-500 mt-1">Annual transaction volume</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURE CARDS GRID */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 block mb-3">Product Core</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-teal-950">
              Move your money faster with modern financial tools
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-teal-950 mb-3">Fast & secure payment processors</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Optimize checkout funnels completely tailored to your platform branding. Reduce friction effortlessly.
                </p>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                  <span className="text-xs font-bold text-slate-700">Instant Settlement</span>
                  <span className="text-xs font-bold text-teal-600">Active</span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-100 rounded w-full"></div>
                  <div className="h-3 bg-slate-100 rounded w-5/6"></div>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-teal-950 mb-3">Powerful Infrastructure & Robust APIs</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Integrate structured SDKs natively built to scale with massive volumes without system drops.
                </p>
              </div>
              <div className="bg-slate-900 rounded-2xl p-5 text-slate-400 font-mono text-[11px] leading-relaxed shadow-lg overflow-x-auto">
                <p className="text-teal-400">const<span className="text-white"> zeroCost</span> = require(<span className="text-emerald-400">'@zerocost/node'</span>);</p>
                <p className="text-teal-400">await<span className="text-white"> zeroCost.payments.create</span>(&#123;</p>
                <p className="pl-4">amount: <span className="text-amber-400">10000</span>,</p>
                <p className="pl-4">currency: <span className="text-emerald-400">'usd'</span>,</p>
                <p className="pl-4">payment_method_types: [<span className="text-emerald-400">'card'</span>],</p>
                <p>&#125;);</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DRIVEN INDUSTRY VIEW SECTION */}
      <section id="solutions" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 block mb-3">Tailored Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-teal-950 mb-6">
              Built for businesses across every industry
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Whether you are managing a high-growth e-commerce brand, recurring SaaS subscriptions, or a complex multi-sided marketplace ecosystem, our ledger scales fluidly.
            </p>
            <ul className="space-y-3.5">
              {['Global payment processing mechanisms', 'E-commerce cross-border checkouts', 'Automated reconciliation workflows', 'Adaptive platform risk & fraud protection'].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <span className="mt-0.5"><CheckIcon /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl relative">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
              <span className="w-3 h-3 rounded-full bg-rose-400"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl">
                <span className="text-xs font-semibold text-slate-700">Gross Volumetric Performance</span>
                <span className="text-xs font-bold text-teal-600">+24.8%</span>
              </div>
              <div className="h-32 bg-gradient-to-t from-teal-500/10 to-transparent rounded-xl border-b-2 border-teal-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-between px-4 pb-2 text-[10px] text-slate-400">
                  <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 block mb-3">Validation</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-teal-950">
              Trusted by 250,000+ businesses. Here's what they say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "Integrating this platform completely saved our developer workflow months of overhead. Flawless framework structure.", author: "Marcus Vance", role: "CTO at PayGrid" },
              { quote: "The conversion step updates bumped our complete storefront checkouts by over 14% inside the first two weeks alone.", author: "Sarah Jenkins", role: "Head of Growth" },
              { quote: "Exceptional system uptime combined with deep, detailed API telemetry endpoints gives our team complete infrastructure clarity.", author: "David K.", role: "Lead Systems Engineer" }
            ].map((t, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl p-6 bg-slate-50 flex flex-col justify-between">
                <p className="text-slate-600 text-sm italic leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-950 flex items-center justify-center font-bold text-white text-xs">
                    {t.author[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-teal-950">{t.author}</h4>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-teal-900 to-teal-950 text-white rounded-[40px] mx-4 my-8 overflow-hidden shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 block mb-3">Transparent Plans</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Choose the perfect plan for your business needs
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Tier 1 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold">Starter Plan</h3>
                <div className="my-6">
                  <span className="text-4xl font-extrabold">$49.00</span>
                  <span className="text-xs text-teal-200/60 block mt-1">per month fixed rate</span>
                </div>
                <ul className="space-y-3.5 border-t border-white/10 pt-6">
                  {['Standard API endpoints accessibility', 'Basic dashboard analytical tools', 'Email ticketing agent support'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-teal-100">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full mt-8 bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-xl text-xs transition">
                Choose Plan
              </button>
            </div>

            {/* Tier 2 - POPULAR */}
            <div className="bg-teal-600 border-2 border-teal-400/50 rounded-3xl p-8 flex flex-col justify-between relative shadow-xl transform lg:-translate-y-2">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-teal-400 text-teal-950 font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                Popular Choice
              </div>
              <div>
                <h3 className="text-lg font-bold">Growth Scale</h3>
                <div className="my-6">
                  <span className="text-4xl font-extrabold">$349.00</span>
                  <span className="text-xs text-teal-100 block mt-1">per month fixed rate</span>
                </div>
                <ul className="space-y-3.5 border-t border-teal-400/30 pt-6">
                  {['Advanced real-time webhook responses', 'Custom branding integrations allowed', 'Priority support access 24/7 channel'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-white">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full mt-8 bg-white text-teal-950 hover:bg-teal-50 font-bold py-3 rounded-xl text-xs transition shadow-md">
                Choose Plan
              </button>
            </div>

            {/* Tier 3 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold">Custom Enterprise</h3>
                <div className="my-6">
                  <span className="text-4xl font-extrabold">Custom</span>
                  <span className="text-xs text-teal-200/60 block mt-1">Tailored for scaling operations</span>
                </div>
                <ul className="space-y-3.5 border-t border-white/10 pt-6">
                  {['Custom contract terms setup', 'Dedicated integration solutions team', '99.99% Guaranteed uptime SLAs'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-teal-100">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full mt-8 bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-xl text-xs transition">
                Contact Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTEGRATIONS FLOW SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 block mb-3">Ecosystem Synergy</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-teal-950 mb-12 max-w-2xl mx-auto">
            Connect your financial tools effortlessly together
          </h2>
          
          {/* Dynamic Graphic Placeholder Grid */}
          <div className="flex flex-wrap items-center justify-center gap-8 max-w-4xl mx-auto opacity-75">
            {['Salesforce', 'Hubspot', 'Shopify', 'Quickbooks', 'Slack', 'Xero', 'Notion'].map((partner, index) => (
              <span key={index} className="px-6 py-3 border border-slate-200 rounded-full font-bold text-slate-400 text-sm tracking-wider hover:border-teal-500 hover:text-teal-600 transition cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-teal-950">Got questions? We've got answers</h2>
          </div>
          
          <div className="space-y-4">
            {[
              "Is there any setup processing fee required initially?",
              "How securely are transactions ledger records encrypted?",
              "Can I transition plans variant seamlessly later?",
              "What payout windows timeframes apply natively?"
            ].map((q, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center justify-between cursor-pointer hover:border-teal-200 transition">
                <span className="text-sm font-semibold text-slate-800">{q}</span>
                <ChevronDownIcon />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MOBILE APP DISCOVER BANNER */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-[32px] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
            <div className="space-y-4 max-w-md text-center md:text-left z-10">
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">Get the app for managing money anytime, anywhere</h3>
              <p className="text-xs text-teal-100">Keep complete control across your system architecture ledgers instantaneously on modern platforms.</p>
              <div className="flex justify-center md:justify-start gap-3 pt-2">
                <div className="h-10 w-28 bg-black rounded-lg flex items-center justify-center text-[10px] font-bold cursor-pointer">App Store</div>
                <div className="h-10 w-28 bg-black rounded-lg flex items-center justify-center text-[10px] font-bold cursor-pointer">Google Play</div>
              </div>
            </div>
            
            {/* Abstract geometric circle graphic mock alignment matching image frame right */}
            <div className="w-64 h-64 bg-white/5 absolute -right-12 -bottom-12 rounded-full pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 10. INSIGHTS / BLOG GRIDS */}
      <section id="insights" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 block mb-3">Resource Insights</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-teal-950">Insights from our finance teams</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Optimizing cross-border digital processing funnels safely", category: "Strategy" },
              { title: "The ultimate guide to modern global corporate taxation architectures", category: "Compliance" },
              { title: "How instant-settlement layers scale checkout efficiency architectures", category: "Tech Stack" }
            ].map((post, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
                <div className="h-48 bg-slate-200 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-950/20"></div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 block mb-2">{post.category}</span>
                    <h4 className="text-sm font-bold text-teal-950 leading-snug mb-4 hover:text-teal-600 transition cursor-pointer">
                      {post.title}
                    </h4>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">June 2026 • 5 min read</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL HERO BOTTOM CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-teal-950">Ready to simplify your global finances?</h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">Join thousands of high-velocity enterprises leveraging our processing blocks globally to optimize conversion steps.</p>
          <div className="pt-4 flex justify-center gap-4">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3.5 rounded-full text-sm transition">Get Started Now</button>
            <button className="border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium px-8 py-3.5 rounded-full text-sm transition">Talk with expert</button>
          </div>
        </div>
      </section>

      {/* 12. FOOTER SECTION & GIANT LOGO WATERMARK */}
      <footer className="bg-[#FAFBFD] border-t border-slate-100 pt-16 pb-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 relative z-10 mb-20">
          <div className="col-span-2">
            <span className="text-xl font-black text-teal-950 tracking-tight block mb-4">ZeroCost</span>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              Global algorithmic optimization financial payment infrastructure engine blocks. Built to convert natively.
            </p>
          </div>
          {['Product', 'Company', 'Resources'].map((group, gIdx) => (
            <div key={gIdx}>
              <h5 className="text-xs font-bold text-teal-950 tracking-wider uppercase mb-4">{group}</h5>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li><a href="#" className="hover:text-teal-600 transition">Features Variant</a></li>
                <li><a href="#" className="hover:text-teal-600 transition">Pricing System</a></li>
                <li><a href="#" className="hover:text-teal-600 transition">Developer Documentation</a></li>
              </ul>
            </div>
          ))}
        </div>

        {/* Big Giant Accent Watermark Branding Text Layer matching image exactly */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none select-none">
          <h1 className="text-[12vw] font-black tracking-tighter text-slate-200/40 text-center leading-none uppercase">
            ZeroCost
          </h1>
        </div>
      </footer>

    </div>
  );
}