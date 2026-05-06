"use client";

import { useRef } from "react";
import BrandImage from "@/components/BrandImage";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[72vh] min-h-[480px] max-h-[900px] overflow-hidden">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: heroY }}>
          <BrandImage
            src="/images/vintage-family.jpg"
            alt="Brand archival photography"
            fill
            priority
            className="object-cover object-center brightness-90"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e2c42]/45 via-[#1e2c42]/20 to-[#1e2c42]/65" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            className="text-[#d4c4a0] text-[9px] tracking-[0.32em] uppercase mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Est. MMXXIV · Maison de Mode
          </motion.p>
          <motion.h1
            className="text-[#f5f2ec] text-5xl md:text-7xl lg:text-8xl leading-[1]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Opening quote */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <Reveal className="max-w-3xl mx-auto text-center">
          <p
            className="text-2xl md:text-3xl lg:text-4xl text-[#1e2c42] leading-[1.25]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic" }}
          >
            &ldquo;Le Déclin Oublié began not with a sketch, but with a feeling.&rdquo;
          </p>
        </Reveal>
      </section>

      <div className="border-t border-[#1e2c42]/10" />

      {/* Brand story */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <Reveal>
            <div>
              <p className="text-[9px] tracking-[0.32em] uppercase text-[#7a8a9a] mb-7">The Origin</p>
              <div className="space-y-6 text-[#7a8a9a] text-sm leading-8">
                <p>
                  It started with a photograph — an image from October 1979 of people gathered around a table on a Mediterranean afternoon. Something in the quality of that light, the ease of those bodies, the warmth of those fabrics, felt like everything fashion had stopped trying to be.
                </p>
                <p>
                  Le Déclin Oublié was founded on the belief that garments should carry memory. Not in a literal way, but in the way an old linen shirt carries the summer it was worn in. The way washed cotton remembers the salt of the sea.
                </p>
                <p>
                  The name — the forgotten decline — refers to the gentle, inevitable aging of beautiful things. The fading of dye. The softening of fabric. The way colour becomes more itself when it loses its edge.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-4">
                <BrandImage
                  src="/images/vintage-family.jpg"
                  alt="Archival inspiration — 1979"
                  fill
                  className="object-cover object-center brightness-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-[10px] tracking-[0.18em] text-[#7a8a9a] text-center uppercase">
                Archive · October 1979
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy — dark panel */}
      <section className="bg-[#1e2c42] py-16 md:py-24">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <Reveal className="md:col-span-2">
              <p className="text-[9px] tracking-[0.32em] uppercase text-[#4a6274] mb-7">Our Philosophy</p>
              <h2
                className="text-4xl md:text-5xl text-[#f5f2ec] mb-7 leading-[1.1]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                Quietly expensive.<br />
                <em>Never loud.</em>
              </h2>
              <div className="space-y-5 text-[#7a8a9a] text-sm leading-8 max-w-lg">
                <p>
                  We make premium essentials for people who don't need to announce themselves. Garments for those who have outgrown the need to be seen, and care instead about how they feel.
                </p>
                <p>
                  Every detail — the weight of the cotton, the depth of the wash, the placement of the stitch — is intentional. Not for effect, but for feeling.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="space-y-7 md:pt-14">
                {[
                  { label: "Fabric", value: "Heavyweight premium cotton" },
                  { label: "Wash", value: "Enzyme & sun-fade treatment" },
                  { label: "Origin", value: "European manufacture" },
                  { label: "Philosophy", value: "Quiet luxury. Zero compromise." },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[9px] tracking-[0.24em] uppercase text-[#4a6274] mb-1.5">{item.label}</p>
                    <p className="text-[#c8b99a] text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visual mosaic — simplified 2-col layout that actually works */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* Left — tall portrait */}
          <Reveal className="md:row-span-2">
            <div className="relative w-full aspect-[3/4] md:h-full overflow-hidden" style={{ minHeight: "320px" }}>
              <BrandImage
                src="/images/hero-coastal.jpg"
                alt="Brand visual — coastal"
                fill
                className="object-cover object-center hover:scale-[1.04] transition-transform duration-[1400ms] ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          {/* Right — two stacked squares */}
          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="relative w-full aspect-square overflow-hidden">
                <BrandImage
                  src="/images/fabric-texture.jpg"
                  alt="Brand visual — fabric"
                  fill
                  className="object-cover object-center hover:scale-[1.04] transition-transform duration-[1400ms] ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal>
              <div className="relative w-full aspect-square overflow-hidden">
                <BrandImage
                  src="/images/product-tee.jpg"
                  alt="Brand visual — product"
                  fill
                  className="object-cover object-center hover:scale-[1.04] transition-transform duration-[1400ms] ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="text-center pt-4">
          <p
            className="text-2xl md:text-3xl text-[#1e2c42] mb-9 leading-[1.3]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic" }}
          >
            &ldquo;Inspired by summers along the Mediterranean coast.&rdquo;
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#1e2c42] text-[#f5f2ec] text-[10px] tracking-[0.22em] uppercase px-10 py-4 hover:bg-[#2a3d56] transition-colors duration-300"
          >
            Discover the Garments
          </Link>
        </Reveal>
      </section>
    </>
  );
}
