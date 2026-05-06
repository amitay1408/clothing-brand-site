"use client";

import { useRef } from "react";
import Link from "next/link";
import BrandImage from "@/components/BrandImage";
import Container from "@/components/Container";
import { IMG } from "@/lib/images";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
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
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[480px] max-h-[900px] overflow-hidden">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: heroY }}>
          <BrandImage
            src={IMG.editorialPier}
            alt="Collections hero — Mediterranean dock"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e2c42]/30 via-transparent to-[#1e2c42]/55" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-end w-full">
          <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10 pb-14 md:pb-20">
            <motion.p
              className="text-[#d4c4a0] text-[9px] tracking-[0.32em] uppercase mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
            >
              Le Déclin Oublié
            </motion.p>
            <motion.h1
              className="text-[#f5f2ec] text-5xl md:text-7xl"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.4 }}
            >
              Collections
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p
            className="text-2xl md:text-3xl text-[#1e2c42] leading-[1.4]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic" }}
          >
            Each collection is a chapter — a particular season, a specific light, a feeling that needed garments to hold it.
          </p>
        </Reveal>
      </section>

      <div className="border-t border-[#1e2c42]/10" />

      {/* Collection 01 */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <Reveal>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <BrandImage
                src={IMG.heroCoastal}
                alt="Collection 01 — The Adriatic"
                fill
                className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <p className="text-[9px] tracking-[0.32em] uppercase text-[#7a8a9a] mb-4">Collection No. 01</p>
              <h2
                className="text-4xl md:text-5xl lg:text-[3.25rem] text-[#1e2c42] mb-5 leading-[1.06]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                The Adriatic<br />
                <em>Summer</em>
              </h2>
              <div className="w-10 h-px bg-[#c8b99a] mb-5" />
              <p className="text-[#7a8a9a] text-sm leading-8 mb-4">
                SS 2024. Washed in the light of the Dalmatian coast — this debut collection explores the quiet elegance of Mediterranean summer culture.
              </p>
              <p className="text-[#7a8a9a] text-sm leading-8 mb-9">
                Heavyweight enzyme-washed cottons. Relaxed silhouettes. Understated nautical references. Garments that feel like they've been worn before — in the best way.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/shop"
                  className="inline-block bg-[#1e2c42] text-[#f5f2ec] text-[9px] tracking-[0.22em] uppercase px-8 py-3.5 hover:bg-[#2a3d56] transition-colors duration-300"
                >
                  Shop Collection
                </Link>
                <span className="text-[10px] tracking-[0.18em] uppercase text-[#7a8a9a]">6 pieces</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Fabric quote banner */}
      <div className="relative w-full h-56 md:h-72 overflow-hidden">
        <BrandImage
          src={IMG.fabricTexture}
          alt="Fabric detail"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1e2c42]/35" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <Reveal>
            <p
              className="text-[#f5f2ec] text-xl md:text-2xl tracking-[0.06em] text-center"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300 }}
            >
              &ldquo;Heavy cotton. Enzyme washed. Sun-aged.&rdquo;
            </p>
          </Reveal>
        </div>
      </div>

      {/* Collection 02 */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <Reveal className="md:order-2">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <BrandImage
                src={IMG.vintageFamily}
                alt="Collection 02 — Archive"
                fill
                className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#1e2c42]/10" />
            </div>
          </Reveal>
          <Reveal className="md:order-1">
            <div>
              <p className="text-[9px] tracking-[0.32em] uppercase text-[#7a8a9a] mb-4">Collection No. 02</p>
              <h2
                className="text-4xl md:text-5xl lg:text-[3.25rem] text-[#1e2c42] mb-5 leading-[1.06]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                Archive<br />
                <em>Automne</em>
              </h2>
              <div className="w-10 h-px bg-[#c8b99a] mb-5" />
              <p className="text-[#7a8a9a] text-sm leading-8 mb-4">
                AW 2024. Drawn from old photographs, family gatherings, and the particular warmth of European autumn interiors.
              </p>
              <p className="text-[#7a8a9a] text-sm leading-8 mb-9">
                Heavier fabrics. Deeper washes. The same quiet elegance, turned inward for the colder months.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[#7a8a9a] border border-[#1e2c42]/20 px-6 py-3">
                  Coming Soon
                </span>
                <Link
                  href="/journal"
                  className="text-[10px] tracking-[0.2em] uppercase text-[#1e2c42] border-b border-[#1e2c42]/35 pb-0.5 hover:border-[#1e2c42] transition-colors duration-300"
                >
                  Read the Preview
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e2c42] py-20 md:py-24 text-center">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="text-[9px] tracking-[0.32em] uppercase text-[#4a6274] mb-4">The full archive</p>
            <h2
              className="text-4xl md:text-5xl text-[#f5f2ec] mb-9"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            >
              All pieces, one place
            </h2>
            <Link
              href="/shop"
              className="inline-block bg-[#f5f2ec] text-[#1e2c42] text-[10px] tracking-[0.22em] uppercase px-10 py-4 hover:bg-[#ede5d4] transition-colors duration-300"
            >
              Visit the Shop
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
