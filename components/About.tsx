"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black carbon-fiber-bg">
      <div className="section-divider mb-24" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <AnimateIn direction="left">
            <div className="relative">
              <div className="aspect-[4/5] bg-dark border border-dark-light/50 overflow-hidden">
                <Image
                  src="/austin.jpg"
                  alt="Austin Easter — Owner of Fade 2 Black pre-owned vehicles in Indianola Iowa"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-black/70 border-2 border-red/50 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-3xl text-red">AE</span>
                    </div>
                    <div>
                      <p className="font-heading text-2xl text-white">Austin Easter</p>
                      <p className="font-body text-sm text-silver">Owner & Operator</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-red/50" />
            </div>
          </AnimateIn>

          {/* Content */}
          <AnimateIn direction="right">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
                Young. Driven. Relentless.
              </p>
              <h2 className="font-heading text-5xl md:text-6xl text-white mb-6 red-glow-text">
                MEET AUSTIN
              </h2>
              <div className="space-y-4 font-body text-silver leading-relaxed">
                <p>
                  At just 21 years old, Austin Easter built Fade 2 Black from the ground up.
                  While most people his age are figuring out what they want to do, Austin was
                  already doing it — sourcing quality vehicles, building a reputation, and
                  earning the trust of buyers across central Iowa.
                </p>
                <p>
                  Austin is a motorcycle racer with fuel in his blood and a competitor&apos;s
                  mentality. That same drive he brings to the track — the obsession with
                  performance, the refusal to cut corners, the need to be the best — is
                  exactly what he brings to every deal at Fade 2 Black.
                </p>
                <p>
                  He hand-picks every vehicle on the lot and stands behind each one. No
                  corporate games, no slick sales tactics — just a young entrepreneur who
                  built something real and puts his name on every car he sells. Come see
                  the difference for yourself.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { number: "21", label: "Years Old" },
                  { number: "500+", label: "Cars Sold" },
                  { number: "5★", label: "Customer Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-heading text-4xl text-red">{stat.number}</div>
                    <div className="font-body text-xs uppercase tracking-wider text-silver mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social link */}
              <div className="mt-8">
                <a
                  href="https://www.facebook.com/austin.easter.371059/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-body text-sm uppercase tracking-wider text-silver hover:text-red transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Follow Austin on Facebook &rarr;
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
