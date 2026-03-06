"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function WindowTinting() {
  return (
    <section id="tinting" className="relative py-20 bg-black carbon-fiber-bg">
      <div className="section-divider mb-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
            We Also Offer
          </p>
          <h2 className="font-heading text-4xl md:text-6xl text-white">
            CERAMIC WINDOW TINTING
          </h2>
          <p className="font-body text-silver mt-4 max-w-2xl mx-auto">
            Professional-grade ceramic film installation by Kevin Jones, our tinting specialist
            with over 10 years of experience. Whether it&apos;s a car you bought from us or one you
            already own — Kevin will make it look right.
          </p>
        </AnimateIn>

        {/* Tint work showcase image */}
        <AnimateIn className="mb-12">
          <div className="relative w-full aspect-[21/9] overflow-hidden border border-dark-light/50">
            <Image
              src="/tint-work.jpg"
              alt="Dark tinted vehicle — professional window tinting by Fade 2 Black"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
            <div className="absolute bottom-4 left-6 bg-black/70 text-white font-body text-xs uppercase tracking-wider px-3 py-1.5">
              Professional Ceramic Tint
            </div>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Before/After Slider */}
          <AnimateIn direction="left">
            <div>
              <BeforeAfterSlider />
              <p className="font-body text-xs text-silver/60 mt-3 text-center uppercase tracking-wider">
                Drag to compare &mdash; Before &amp; After
              </p>
            </div>
          </AnimateIn>

          {/* Tint levels + quick benefits */}
          <AnimateIn direction="right">
            <div className="bg-dark/30 border border-dark-light/50 p-6 md:p-8">
              {/* Kevin callout */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-dark-light/50">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-dark-light border-2 border-red/30 flex items-center justify-center">
                  <span className="font-heading text-2xl text-red">KJ</span>
                </div>
                <div>
                  <p className="font-heading text-lg text-white">Kevin Jones</p>
                  <p className="font-body text-xs text-silver uppercase tracking-wider">Tinting Specialist &bull; 10+ Years Experience</p>
                </div>
              </div>

              <h3 className="font-heading text-2xl text-white mb-5 text-center">
                AVAILABLE TINT LEVELS
              </h3>
              <div className="grid grid-cols-5 gap-3 mb-6">
                {[
                  { level: "70%", label: "Light", color: "bg-neutral-600/70" },
                  { level: "50%", label: "Medium", color: "bg-neutral-700/80" },
                  { level: "35%", label: "Factory", color: "bg-neutral-800/85" },
                  { level: "20%", label: "Dark", color: "bg-neutral-900/90" },
                  { level: "5%", label: "Limo", color: "bg-black" },
                ].map((tint) => (
                  <div key={tint.level} className="text-center">
                    <div
                      className={`${tint.color} w-full aspect-square border border-dark-light/50 mb-1.5 flex items-center justify-center`}
                    >
                      <span className="font-heading text-lg text-white/80">{tint.level}</span>
                    </div>
                    <p className="font-body text-[10px] uppercase tracking-wider text-silver">
                      {tint.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-body text-xs text-silver/60 text-center mb-6">
                Iowa legal limit: 70% front &bull; Any darkness rear windows
              </p>

              {/* Quick benefit list */}
              <div className="space-y-3">
                {[
                  "99% UV ray blockage — protects skin & interior",
                  "Up to 99% infrared heat rejection",
                  "Top-tier ceramic film — no signal interference",
                  "Privacy & security for your vehicle",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <span className="text-red mt-0.5 flex-shrink-0">&#10003;</span>
                    <p className="font-body text-sm text-silver">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="tel:+15155522660"
                  className="inline-block bg-red hover:bg-red-light text-white font-body uppercase tracking-wider px-8 py-3 transition-colors shadow-red-glow-sm text-sm"
                >
                  Get a Free Tint Quote
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
