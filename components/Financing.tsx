"use client";

import AnimateIn from "./AnimateIn";

export default function Financing() {
  return (
    <section id="financing" className="relative py-24 bg-black carbon-fiber-bg">
      <div className="section-divider mb-24" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <AnimateIn className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
            Get Pre-Approved Today
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-white red-glow-text">
            FINANCING OPTIONS
          </h2>
          <p className="font-body text-lg text-silver mt-4 max-w-2xl mx-auto">
            We&apos;ve partnered with trusted local credit unions to make buying easy.
            Apply online in minutes — no obligation, no impact on your credit score.
          </p>
        </AnimateIn>

        <AnimateIn>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Community 1st */}
            <a
              href="https://apply.c1stcreditunion.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 md:p-10 bg-dark/50 border border-dark-light/50 hover:border-red/50 transition-all duration-500 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto mb-5 bg-red/10 border border-red/30 rounded-full flex items-center justify-center group-hover:bg-red/20 transition-colors">
                  <svg className="w-7 h-7 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-white mb-3">
                  COMMUNITY 1ST CREDIT UNION
                </h3>
                <p className="font-body text-sm text-silver mb-6">
                  Local lending you can trust. Competitive rates and flexible terms for every budget.
                </p>
                <span className="inline-block bg-red hover:bg-red-light text-white font-body text-sm uppercase tracking-wider px-8 py-3 transition-colors shadow-red-glow-sm">
                  Apply Now &rarr;
                </span>
              </div>
            </a>

            {/* Marine Credit Union */}
            <a
              href="https://marinecreditunion.my.site.com/REG/s/registration?PartnerCode=0018Y000031iGrV"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 md:p-10 bg-dark/50 border border-dark-light/50 hover:border-red/50 transition-all duration-500 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto mb-5 bg-red/10 border border-red/30 rounded-full flex items-center justify-center group-hover:bg-red/20 transition-colors">
                  <svg className="w-7 h-7 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-white mb-3">
                  MARINE CREDIT UNION
                </h3>
                <p className="font-body text-sm text-silver mb-6">
                  Flexible financing options designed to get you on the road. Fast approvals, fair terms.
                </p>
                <span className="inline-block bg-red hover:bg-red-light text-white font-body text-sm uppercase tracking-wider px-8 py-3 transition-colors shadow-red-glow-sm">
                  Apply Now &rarr;
                </span>
              </div>
            </a>
          </div>
        </AnimateIn>

        <AnimateIn className="text-center mt-8">
          <p className="font-body text-xs text-silver/50 uppercase tracking-wider">
            Financing available for qualified buyers &bull; Apply online in minutes &bull; No obligation
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
