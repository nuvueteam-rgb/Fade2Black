"use client";

import AnimateIn from "./AnimateIn";

const trustPoints = [
  {
    title: "Hand-Selected Inventory",
    desc: "Austin personally inspects every vehicle before it hits the lot. No auction junk, no flood cars — only rides he'd put his own name behind.",
  },
  {
    title: "Full Transparency",
    desc: "Complete vehicle history on every car. Honest pricing with no hidden fees, no dealer add-ons, no games. The price you see is the price you pay.",
  },
  {
    title: "Local Reputation",
    desc: "Built on trust right here in the Indianola community. Word-of-mouth is our best advertising — ask around.",
  },
  {
    title: "Financing Friendly",
    desc: "We work with you to find a path to ownership. Good credit, rebuilding credit — let's talk and figure it out together.",
  },
  {
    title: "Inspected & Detailed",
    desc: "Every vehicle gets a thorough mechanical inspection and professional detail before you ever see it. Drive off with confidence.",
  },
];

export default function CarSales() {
  return (
    <section id="inventory" className="relative py-28 bg-black-soft carbon-fiber-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-6">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
            Indianola&apos;s Trusted Dealer
          </p>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white red-glow-text">
            FIND YOUR NEXT RIDE
          </h2>
        </AnimateIn>

        <AnimateIn className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-body text-lg text-silver leading-relaxed">
            Quality pre-owned vehicles, hand-picked and priced right. Every car on our lot has been
            personally inspected and detailed by Austin — no surprises, no pressure.
          </p>
        </AnimateIn>

        {/* Massive Facebook CTA */}
        <AnimateIn>
          <div className="relative bg-gradient-to-br from-dark to-dark-light border border-red/40 p-10 md:p-16 text-center mb-16 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(220,38,38,0.08) 0%, transparent 70%)" }} />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-red/10 border border-red/40 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </div>

              <h3 className="font-heading text-4xl md:text-5xl text-white mb-4">
                BROWSE OUR <span className="text-red">INVENTORY</span>
              </h3>
              <p className="font-body text-silver text-lg mb-8 max-w-xl mx-auto">
                All of our current vehicles are listed on Facebook Marketplace. Browse photos, pricing, and details — then call Austin to set up a time to see it in person.
              </p>

              <a
                href="https://www.facebook.com/marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-red hover:bg-red-light text-white font-heading text-2xl md:text-3xl tracking-wider px-12 py-5 transition-colors shadow-red-glow"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                VIEW ON FACEBOOK MARKETPLACE
              </a>

              <p className="font-body text-xs text-silver/50 mt-4 uppercase tracking-wider">
                New vehicles added weekly &bull; Message us on Facebook or call directly
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Trust points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, i) => (
            <AnimateIn key={point.title} delay={i * 0.08}>
              <div className="flex gap-5 p-6 bg-dark/50 border border-dark-light/50 hover:border-red/30 transition-colors h-full">
                <div className="flex-shrink-0 w-12 h-12 bg-red/10 border border-red/30 flex items-center justify-center">
                  <span className="font-heading text-xl text-red">{`0${i + 1}`}</span>
                </div>
                <div>
                  <h4 className="font-heading text-xl text-white mb-1">{point.title}</h4>
                  <p className="font-body text-sm text-silver leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA row */}
        <AnimateIn className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+15155522660"
            className="inline-flex items-center justify-center gap-2 border border-silver/30 hover:border-red text-white font-body uppercase tracking-wider px-8 py-4 transition-colors"
          >
            <svg className="w-5 h-5 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Austin — (515) 552-2660
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
