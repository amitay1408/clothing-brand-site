"use client";

import { useRef } from "react";
import Link from "next/link";
import BrandImage from "@/components/BrandImage";
import { motion, useScroll, useTransform, useInView, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ── HERO ────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <BrandImage
            src="/images/hero-coastal.jpg"
            alt="Man at Mediterranean waterfront at sunset"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e2c42]/20 via-transparent to-[#1e2c42]/55" />
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 md:px-16 max-w-screen-xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="text-[#d4c4a0] text-[10px] tracking-[0.35em] uppercase mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Spring — Summer Collection
          </motion.p>
          <motion.h1
            className="text-[#f5f2ec] text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 max-w-2xl"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            The Forgotten<br />
            <em>Decline</em>
          </motion.h1>
          <motion.div
            className="flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link
              href="/collections"
              className="text-[#f5f2ec] text-[10px] tracking-[0.28em] uppercase border-b border-[#f5f2ec]/60 pb-0.5 hover:border-[#f5f2ec] transition-all duration-300"
            >
              Discover the Collection
            </Link>
            <span className="text-[#7a8a9a] text-[10px] tracking-[0.2em] uppercase hidden md:block">
              ↓ Scroll
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-px h-12 bg-[#f5f2ec]/40"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </section>

      {/* ── PHILOSOPHY STRIP ─────────────────────────────── */}
      <section className="bg-[#1e2c42] py-6">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-center">
          <p
            className="text-[#d4c4a0] text-sm md:text-base tracking-[0.12em] text-center"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300 }}
          >
            &ldquo;Garments shaped by time, salt, and sunlight.&rdquo;
          </p>
        </div>
      </section>

      {/* ── FEATURED EDITORIAL ───────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          {/* Left — large image */}
          <AnimatedSection>
            <div className="relative aspect-[3/4] overflow-hidden">
              <BrandImage
                src="/images/editorial-pier.jpg"
                alt="Editorial lifestyle photography — Mediterranean dock"
                fill
                className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          {/* Right — text + small image */}
          <div className="flex flex-col justify-between gap-8 md:pt-20">
            <AnimatedSection>
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#7a8a9a] mb-6">
                  SS — 2024 · Collection No. 01
                </p>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#1e2c42] mb-8"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                >
                  Washed by<br />
                  <em>the Adriatic</em>
                </h2>
                <p className="text-[#7a8a9a] text-sm leading-7 max-w-sm mb-10">
                  Each piece carries the memory of a slower season — sun-faded cotton, soft from salt air, worn with quiet confidence along old stone quays.
                </p>
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-[#1e2c42] group"
                >
                  <span className="border-b border-[#1e2c42]/40 pb-0.5 group-hover:border-[#1e2c42] transition-colors duration-300">
                    View Collection
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative aspect-[4/3] overflow-hidden">
                <BrandImage
                  src="/images/fabric-texture.jpg"
                  alt="Washed fabric texture detail"
                  fill
                  className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PRODUCT HIGHLIGHT ────────────────────────────── */}
      <section className="bg-[#f0ebe0] py-24 md:py-36">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#7a8a9a] mb-4">The Signature Piece</p>
            <h2
              className="text-4xl md:text-5xl text-[#1e2c42]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            >
              Le Tee — Washed Navy
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d4c4a0]/30">
            {[
              {
                img: "/images/product-tee.jpg",
                label: "Product View",
                desc: "Heavyweight washed cotton · Enzyme washed · Relaxed fit",
                wide: true,
              },
              {
                img: "/images/editorial-pier.jpg",
                label: "Styled",
                desc: "Worn along the coast",
                wide: false,
              },
              {
                img: "/images/fabric-texture.jpg",
                label: "Detail",
                desc: "Fabric & finish",
                wide: false,
              },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="relative overflow-hidden bg-[#ede5d4] group">
                  <div className={`relative ${item.wide ? "aspect-[3/4]" : "aspect-[3/4]"} overflow-hidden`}>
                    <BrandImage
                      src={item.img}
                      alt={item.label}
                      fill
                      className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-103"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[9px] tracking-[0.25em] uppercase text-[#7a8a9a] mb-1">{item.label}</p>
                    <p className="text-[11px] text-[#1e2c42]/70">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Link
              href="/shop"
              className="inline-flex items-center gap-4 bg-[#1e2c42] text-[#f5f2ec] text-[10px] tracking-[0.28em] uppercase px-10 py-4 hover:bg-[#2a3d56] transition-colors duration-400"
            >
              Shop Now
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ARCHIVAL SECTION ─────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden">
                <BrandImage
                  src="/images/vintage-family.jpg"
                  alt="Archival family photography — 1979"
                  fill
                  className="object-cover object-center sepia-[0.2] brightness-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#1e2c42] text-[#d4c4a0] px-5 py-3">
                <p className="text-[9px] tracking-[0.25em] uppercase">Archive · MCMLXXIX</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#7a8a9a] mb-8">The Inspiration</p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-[#1e2c42] mb-8"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                Rooted in<br />
                <em>memory</em>
              </h2>
              <div className="w-12 h-px bg-[#c8b99a] mb-8" />
              <p className="text-[#7a8a9a] text-sm leading-8 mb-6">
                Le Déclin Oublié began not with a sketch, but with a feeling — the particular quality of afternoon light on a Mediterranean terrace. The smell of salt in old linen. The way time moves differently near the sea.
              </p>
              <p className="text-[#7a8a9a] text-sm leading-8 mb-10">
                Our garments carry that feeling forward. Not as nostalgia, but as a quiet understanding of what endures.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-[#1e2c42] group"
              >
                <span className="border-b border-[#1e2c42]/40 pb-0.5 group-hover:border-[#1e2c42] transition-colors duration-300">
                  Our Story
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FULL WIDTH LIFESTYLE ─────────────────────────── */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <BrandImage
          src="/images/hero-coastal.jpg"
          alt="Mediterranean coastal lifestyle"
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e2c42]/60 via-[#1e2c42]/20 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-screen-xl mx-auto px-6 md:px-16 w-full">
            <AnimatedSection>
              <p className="text-[#d4c4a0] text-[10px] tracking-[0.3em] uppercase mb-6">Quiet Luxury</p>
              <h2
                className="text-[#f5f2ec] text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-xl mb-10"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                Made for<br />
                slower days
              </h2>
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 text-[#f5f2ec] text-[10px] tracking-[0.28em] uppercase border-b border-[#f5f2ec]/50 pb-0.5 hover:border-[#f5f2ec] transition-all duration-300"
              >
                Shop the Collection
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── BRAND PILLARS ────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e2c42]/8">
          {[
            {
              number: "I",
              title: "Sun-Faded",
              text: "Each piece is enzyme-washed and sun-treated to achieve a natural, lived-in quality that deepens over time.",
            },
            {
              number: "II",
              title: "Ocean-Worn",
              text: "Inspired by coastal living — the softness of fabrics weathered by salt air, sea mist, and warm afternoons.",
            },
            {
              number: "III",
              title: "Timeless",
              text: "No seasonal trends. No hype. Garments designed to last decades — in quality, in feeling, in memory.",
            },
          ].map((pillar, i) => (
            <AnimatedSection key={i}>
              <div className="bg-[#f5f2ec] p-10 md:p-14 h-full">
                <p
                  className="text-[#d4c4a0] text-3xl mb-6"
                  style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                >
                  {pillar.number}
                </p>
                <h3
                  className="text-xl md:text-2xl text-[#1e2c42] mb-5"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  {pillar.title}
                </h3>
                <div className="w-8 h-px bg-[#c8b99a] mb-5" />
                <p className="text-[#7a8a9a] text-sm leading-7">{pillar.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── JOURNAL PREVIEW ──────────────────────────────── */}
      <section className="bg-[#1e2c42] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <AnimatedSection className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#4a6274] mb-3">The Journal</p>
              <h2
                className="text-4xl md:text-5xl text-[#f5f2ec]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                Stories from the coast
              </h2>
            </div>
            <Link
              href="/journal"
              className="hidden md:flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-[#7a8a9a] hover:text-[#c8b99a] transition-colors duration-300"
            >
              All Articles →
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Craft",
                title: "On the art of enzyme washing",
                excerpt: "How we achieve the perfect sun-faded finish through an ancient Japanese textile technique.",
                img: "/images/fabric-texture.jpg",
              },
              {
                category: "Place",
                title: "The Adriatic in October",
                excerpt: "A quiet week along the Dalmatian coast — the light, the stone, the stillness.",
                img: "/images/hero-coastal.jpg",
              },
              {
                category: "Archive",
                title: "Old summers, new garments",
                excerpt: "How family photographs from the 1970s shaped the visual language of Le Déclin Oublié.",
                img: "/images/vintage-family.jpg",
              },
            ].map((article, i) => (
              <AnimatedSection key={i}>
                <Link href="/journal" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-5">
                    <BrandImage
                      src={article.img}
                      alt={article.title}
                      fill
                      className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[#4a6274] mb-2">{article.category}</p>
                  <h3
                    className="text-xl text-[#f5f2ec] mb-3 group-hover:text-[#d4c4a0] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-[#7a8a9a] text-xs leading-6">{article.excerpt}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#f0ebe0]">
        <div className="max-w-screen-xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#7a8a9a] mb-4">Stay close</p>
            <h2
              className="text-4xl md:text-5xl text-[#1e2c42] mb-5"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            >
              Quiet letters from the coast
            </h2>
            <p className="text-[#7a8a9a] text-sm mb-10 max-w-md mx-auto leading-7">
              Occasional dispatches — new collections, journal entries, and fragments of the world that inspires us.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-[#1e2c42]/20 px-5 py-3.5 text-xs tracking-[0.12em] text-[#1e2c42] placeholder:text-[#7a8a9a] focus:outline-none focus:border-[#1e2c42]/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-[#1e2c42] text-[#f5f2ec] px-8 py-3.5 text-[10px] tracking-[0.22em] uppercase hover:bg-[#2a3d56] transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
