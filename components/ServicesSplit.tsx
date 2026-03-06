"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function ServicesSplit() {
  return (
    <section id="services" className="relative py-24 bg-black-soft carbon-fiber-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-white red-glow-text">
            OUR SERVICES
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Pre-Owned Vehicles — Primary (2/3 width) */}
          <AnimateIn delay={0} direction="left" className="md:col-span-2">
            <a
              href="#inventory"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#inventory")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group block relative h-full min-h-[400px] overflow-hidden border border-red/30 hover:border-red/60 transition-all duration-500"
            >
              {/* Background image */}
              <Image
                src="/services-cars.jpg"
                alt="Premium pre-owned vehicles"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

              {/* "Primary" badge */}
              <div className="absolute top-0 right-0 bg-red text-white font-body text-xs uppercase tracking-wider px-4 py-1.5 z-10">
                Featured
              </div>

              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                <div className="text-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-red mb-2">
                  Our Core Business
                </p>
                <h3 className="font-heading text-4xl md:text-5xl text-white mb-4">
                  PRE-OWNED VEHICLES
                </h3>
                <p className="font-body text-silver leading-relaxed mb-6 max-w-lg">
                  Hand-picked, quality pre-owned vehicles. Every car is personally inspected by Austin, fully detailed, and priced honestly. Browse our inventory on Facebook Marketplace.
                </p>
                <span className="font-body text-sm uppercase tracking-wider text-red group-hover:tracking-[0.2em] transition-all">
                  View Inventory &rarr;
                </span>
              </div>
            </a>
          </AnimateIn>

          {/* Window Tinting — Secondary (1/3 width) */}
          <AnimateIn delay={0.15} direction="right">
            <a
              href="#tinting"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#tinting")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group block relative h-full min-h-[400px] overflow-hidden border border-dark-light/50 hover:border-red/50 transition-all duration-500"
            >
              {/* Background image */}
              <Image
                src="/services-tint.jpg"
                alt="Window tinting service"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                <div className="text-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-red mb-2">
                  Also Available
                </p>
                <h3 className="font-heading text-4xl md:text-5xl text-white mb-4">
                  WINDOW TINTING
                </h3>
                <p className="font-body text-silver leading-relaxed mb-6">
                  Professional ceramic window tint. Heat rejection, UV protection, and that murdered-out look.
                </p>
                <span className="font-body text-sm uppercase tracking-wider text-red group-hover:tracking-[0.2em] transition-all">
                  Learn More &rarr;
                </span>
              </div>
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
