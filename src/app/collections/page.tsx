"use client";

import { useRef } from "react";
import Link from "next/link";
import BrandImage from "@/components/BrandImage";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CollectionsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <BrandImage
            src="/images/editorial-pier.jpg"
            alt="Collections hero — Mediterranean dock"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e2c42]/30 via-transparent to-[#1e2c42]/50" />
        </motion.div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 md:px-16 max-w-screen-xl mx-auto">
          <motion.p
            className="text-[#d4c4a0] text-[9px] tracking-[0.35em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Le Déclin Oublié
          </motion.p>
          <motion.h1
            className="text-[#f5f2ec] text-5xl md:text-7xl"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4 }}
          >
            Collections
          </motion.h1>
        </div>
      </section>

      {/* Intro text */}
      <section className="py-20 md:py-28 px-6 md:px-10 max-w-screen-xl mx-auto">
        <AnimatedSection className="max-w-2xl">
          <p
            className="text-2xl md:text-3xl text-[#1e2c42] leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic" }}
          >
            Each collection is a chapter — a particular season, a specific light, a feeling that needed garments to hold it.
          </p>
        </AnimatedSection>
      </section>

      <div className="border-t border-[#1e2c42]/8 mx-6 md:mx-10" />

      {/* Collection 01 — Large editorial */}
      <section className="py-20 md:py-28 px-6 md:px-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
          <AnimatedSection>
            <div className="relative aspect-[3/4] overflow-hidden">
              <BrandImage
                src="/images/hero-coastal.jpg"
                alt="Collection 01 — The Adriatic"
                fill
                className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="md:pr-8">
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#7a8a9a] mb-4">Collection No. 01</p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl text-[#1e2c42] mb-6 leading-[1.05]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                The Adriatic<br />
                <em>Summer</em>
              </h2>
              <div className="w-10 h-px bg-[#c8b99a] mb-6" />
              <p className="text-[#7a8a9a] text-sm leading-8 mb-4">
                SS 2024. Washed in the light of the Dalmatian coast — this debut collection explores the quiet elegance of Mediterranean summer culture.
              </p>
              <p className="text-[#7a8a9a] text-sm leading-8 mb-10">
                Heavyweight enzyme-washed cottons. Relaxed silhouettes. Understated nautical references. Garments that feel like they've been worn before — in the best way.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-3 bg-[#1e2c42] text-[#f5f2ec] text-[9px] tracking-[0.25em] uppercase px-8 py-3.5 hover:bg-[#2a3d56] transition-colors duration-300"
                >
                  Shop Collection
                </Link>
                <span className="text-[10px] tracking-[0.18em] uppercase text-[#7a8a9a]">6 pieces</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Full-width fabric detail */}
      <section className="relative h-64 md:h-80 overflow-hidden mx-6 md:mx-10 mb-20">
        <BrandImage
          src="/images/fabric-texture.jpg"
          alt="Fabric detail"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1e2c42]/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedSection>
            <p
              className="text-[#f5f2ec] text-xl md:text-2xl tracking-[0.08em] text-center"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300 }}
            >
              "Heavy cotton. Enzyme washed. Sun-aged."
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Collection 02 — Upcoming */}
      <section className="pb-20 md:pb-28 px-6 md:px-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
          <AnimatedSection className="md:order-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <BrandImage
                src="/images/vintage-family.jpg"
                alt="Collection 02 — Archive"
                fill
                className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-105 sepia-[0.15]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#1e2c42]/10" />
            </div>
          </AnimatedSection>
          <AnimatedSection className="md:order-1">
            <div className="md:pl-8">
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#7a8a9a] mb-4">Collection No. 02</p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl text-[#1e2c42] mb-6 leading-[1.05]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                Archive<br />
                <em>Automne</em>
              </h2>
              <div className="w-10 h-px bg-[#c8b99a] mb-6" />
              <p className="text-[#7a8a9a] text-sm leading-8 mb-4">
                AW 2024. Drawn from old photographs, family gatherings, and the particular warmth of European autumn interiors.
              </p>
              <p className="text-[#7a8a9a] text-sm leading-8 mb-10">
                Heavier fabrics. Deeper washes. The same quiet elegance, turned inward for the colder months.
              </p>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-[#7a8a9a] border border-[#1e2c42]/20 px-6 py-3">
                  Coming Soon
                </span>
                <Link
                  href="/journal"
                  className="text-[10px] tracking-[0.22em] uppercase text-[#1e2c42] border-b border-[#1e2c42]/40 pb-0.5 hover:border-[#1e2c42] transition-colors duration-300"
                >
                  Read the Preview
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e2c42] py-20 md:py-24 px-6 md:px-10 text-center">
        <AnimatedSection>
          <p className="text-[9px] tracking-[0.35em] uppercase text-[#4a6274] mb-4">The full archive</p>
          <h2
            className="text-4xl md:text-5xl text-[#f5f2ec] mb-8"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          >
            All pieces, one place
          </h2>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-[#f5f2ec] text-[#1e2c42] text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#ede5d4] transition-colors duration-300"
          >
            Visit the Shop
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
