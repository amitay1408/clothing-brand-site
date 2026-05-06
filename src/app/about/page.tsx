"use client";

import { useRef } from "react";
import BrandImage from "@/components/BrandImage";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
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
      <section ref={heroRef} className="relative h-[75vh] min-h-[500px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <BrandImage
            src="/images/vintage-family.jpg"
            alt="Brand archival photography"
            fill
            priority
            className="object-cover object-center sepia-[0.2] brightness-85"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e2c42]/40 via-[#1e2c42]/20 to-[#1e2c42]/60" />
        </motion.div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p
            className="text-[#d4c4a0] text-[9px] tracking-[0.35em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Est. MMXXIV · Maison de Mode
          </motion.p>
          <motion.h1
            className="text-[#f5f2ec] text-5xl md:text-7xl lg:text-8xl leading-[1]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Opening statement */}
      <section className="py-20 md:py-32 px-6 md:px-10 max-w-screen-xl mx-auto">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p
            className="text-3xl md:text-4xl lg:text-5xl text-[#1e2c42] leading-[1.2]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic" }}
          >
            "Le Déclin Oublié began not with a sketch, but with a feeling."
          </p>
        </AnimatedSection>
      </section>

      <div className="border-t border-[#1e2c42]/8 mx-6 md:mx-10" />

      {/* Brand story */}
      <section className="py-20 md:py-28 px-6 md:px-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <AnimatedSection>
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#7a8a9a] mb-8">The Origin</p>
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
          </AnimatedSection>
          <AnimatedSection>
            <div className="space-y-6">
              <div className="relative aspect-[4/5] overflow-hidden">
                <BrandImage
                  src="/images/vintage-family.jpg"
                  alt="Archival inspiration — 1979"
                  fill
                  className="object-cover object-center sepia-[0.25] brightness-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-[10px] tracking-[0.18em] text-[#7a8a9a] text-center uppercase">
                Archive · October 1979
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Dark philosophy section */}
      <section className="bg-[#1e2c42] py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <AnimatedSection className="md:col-span-2">
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#4a6274] mb-8">Our Philosophy</p>
              <h2
                className="text-4xl md:text-5xl text-[#f5f2ec] mb-8 leading-[1.1]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                Quietly expensive.<br />
                <em>Never loud.</em>
              </h2>
              <div className="space-y-5 text-[#7a8a9a] text-sm leading-8 max-w-xl">
                <p>
                  We make premium essentials for people who don't need to announce themselves. Garments for those who have outgrown the need to be seen, and care instead about how they feel.
                </p>
                <p>
                  Every detail — the weight of the cotton, the depth of the wash, the placement of the stitch — is intentional. Not for effect, but for feeling.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="space-y-6 md:pt-16">
                {[
                  { label: "Fabric", value: "Heavyweight premium cotton" },
                  { label: "Wash", value: "Enzyme & sun-fade treatment" },
                  { label: "Origin", value: "European manufacture" },
                  { label: "Philosophy", value: "Quiet luxury. Zero compromise." },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[9px] tracking-[0.25em] uppercase text-[#4a6274] mb-1">{item.label}</p>
                    <p className="text-[#c8b99a] text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Visual editorial */}
      <section className="py-20 md:py-28 px-6 md:px-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-20">
          {[
            { img: "/images/hero-coastal.jpg", span: "col-span-2 row-span-2" },
            { img: "/images/fabric-texture.jpg", span: "col-span-1" },
            { img: "/images/product-tee.jpg", span: "col-span-1" },
            { img: "/images/editorial-pier.jpg", span: "col-span-2" },
          ].map((item, i) => (
            <AnimatedSection key={i} className={item.span}>
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-square md:aspect-auto md:h-full min-h-[280px]" : "aspect-square"}`}>
                <BrandImage
                  src={item.img}
                  alt="Brand visual"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-[1400ms] ease-out"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <p
            className="text-2xl md:text-3xl text-[#1e2c42] mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic" }}
          >
            "Inspired by summers along the Mediterranean coast."
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-[#1e2c42] text-[#f5f2ec] text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#2a3d56] transition-colors duration-300"
          >
            Discover the Garments
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
