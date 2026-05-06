"use client";

import { useRef } from "react";
import Link from "next/link";
import BrandImage from "@/components/BrandImage";
import Container from "@/components/Container";
import { IMG } from "@/lib/images";
import { motion, useScroll, useTransform, useInView, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
        {/* Parallax image layer */}
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: heroY }}>
          <BrandImage
            src={IMG.heroCoastal}
            alt="Mediterranean waterfront at sunset"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e2c42]/15 via-transparent to-[#1e2c42]/60" />
        </motion.div>

        {/* Hero text — sits at bottom left */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end w-full"
          style={{ opacity: heroOpacity }}
        >
          <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10 pb-16 md:pb-24">
            <motion.p
              className="text-[#d4c4a0] text-[10px] tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              Spring — Summer Collection
            </motion.p>
            <motion.h1
              className="text-[#f5f2ec] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1] mb-8 max-w-2xl"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.55 }}
            >
              The Forgotten<br />
              <em>Decline</em>
            </motion.h1>
            <motion.div
              className="flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.0 }}
            >
              <Link
                href="/collections"
                className="text-[#f5f2ec] text-[10px] tracking-[0.26em] uppercase border-b border-[#f5f2ec]/50 pb-0.5 hover:border-[#f5f2ec] transition-all duration-300"
              >
                Discover the Collection
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated scroll line */}
        <motion.div
          className="absolute bottom-8 right-8 md:right-12 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <motion.div
            className="w-px h-10 bg-[#f5f2ec]/35 mx-auto"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </section>

      {/* ── PHILOSOPHY STRIP ── */}
      <div className="bg-[#1e2c42] py-5">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10 text-center">
          <p
            className="text-[#d4c4a0] text-sm md:text-base tracking-[0.1em]"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300 }}
          >
            &ldquo;Garments shaped by time, salt, and sunlight.&rdquo;
          </p>
        </div>
      </div>

      {/* ── FEATURED EDITORIAL ── */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* Left — portrait image */}
          <Reveal>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <BrandImage
                src={IMG.editorialPier}
                alt="Editorial lifestyle — Mediterranean dock"
                fill
                className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          {/* Right — text + small image */}
          <div className="flex flex-col justify-between gap-10 md:pt-16">
            <Reveal>
              <div>
                <p className="text-[9px] tracking-[0.28em] uppercase text-[#7a8a9a] mb-5">
                  SS 2024 · Collection No. 01
                </p>
                <h2
                  className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.06] text-[#1e2c42] mb-6"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                >
                  Washed by<br />
                  <em>the Adriatic</em>
                </h2>
                <p className="text-[#7a8a9a] text-sm leading-7 max-w-xs mb-9">
                  Each piece carries the memory of a slower season — sun-faded cotton, soft from salt air, worn with quiet confidence along old stone quays.
                </p>
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-[#1e2c42] group"
                >
                  <span className="border-b border-[#1e2c42]/35 pb-0.5 group-hover:border-[#1e2c42] transition-colors duration-300">
                    View Collection
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 text-xs">→</span>
                </Link>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <BrandImage
                  src={IMG.fabricTexture}
                  alt="Washed fabric texture detail"
                  fill
                  className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRODUCT HIGHLIGHT ── */}
      <section className="bg-[#f0ebe0] py-20 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10">
          <Reveal className="text-center mb-14">
            <p className="text-[9px] tracking-[0.32em] uppercase text-[#7a8a9a] mb-3">The Signature Piece</p>
            <h2
              className="text-4xl md:text-5xl text-[#1e2c42]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            >
              Le Tee — Washed Navy
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { img: IMG.productTee, label: "Product View", desc: "Heavyweight washed cotton · Enzyme washed · Relaxed fit" },
              { img: IMG.editorialPier, label: "Styled", desc: "Worn along the coast" },
              { img: IMG.fabricTexture, label: "Detail", desc: "Fabric & finish" },
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="bg-[#ede5d4] group overflow-hidden">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <BrandImage
                      src={item.img}
                      alt={item.label}
                      fill
                      className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="text-[9px] tracking-[0.24em] uppercase text-[#7a8a9a] mb-1">{item.label}</p>
                    <p className="text-[11px] text-[#1e2c42]/65 leading-5">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block bg-[#1e2c42] text-[#f5f2ec] text-[10px] tracking-[0.26em] uppercase px-10 py-4 hover:bg-[#2a3d56] transition-colors duration-300"
            >
              Shop Now
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── ARCHIVAL SECTION ── */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Archive image with label badge */}
          <Reveal>
            <div className="relative w-full">
              <div className="relative w-full aspect-square overflow-hidden">
                <BrandImage
                  src={IMG.vintageFamily}
                  alt="Archival family photography — 1979"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Badge — inside the image container so it never overflows */}
              <div className="absolute bottom-4 right-4 bg-[#1e2c42] text-[#d4c4a0] px-4 py-2">
                <p className="text-[9px] tracking-[0.22em] uppercase">Archive · MCMLXXIX</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="text-[9px] tracking-[0.32em] uppercase text-[#7a8a9a] mb-7">The Inspiration</p>
              <h2
                className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] text-[#1e2c42] mb-6"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                Rooted in<br />
                <em>memory</em>
              </h2>
              <div className="w-10 h-px bg-[#c8b99a] mb-7" />
              <p className="text-[#7a8a9a] text-sm leading-8 mb-5">
                Le Déclin Oublié began not with a sketch, but with a feeling — the particular quality of afternoon light on a Mediterranean terrace. The smell of salt in old linen. The way time moves differently near the sea.
              </p>
              <p className="text-[#7a8a9a] text-sm leading-8 mb-9">
                Our garments carry that feeling forward. Not as nostalgia, but as a quiet understanding of what endures.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-[#1e2c42] group"
              >
                <span className="border-b border-[#1e2c42]/35 pb-0.5 group-hover:border-[#1e2c42] transition-colors duration-300">
                  Our Story
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300 text-xs">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FULL-WIDTH LIFESTYLE ── */}
      <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden">
        <BrandImage
          src={IMG.heroCoastal}
          alt="Mediterranean coastal lifestyle"
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e2c42]/65 via-[#1e2c42]/25 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10">
            <Reveal>
              <p className="text-[#d4c4a0] text-[10px] tracking-[0.28em] uppercase mb-5">Quiet Luxury</p>
              <h2
                className="text-[#f5f2ec] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.06] max-w-lg mb-9"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                Made for<br />
                slower days
              </h2>
              <Link
                href="/shop"
                className="inline-block text-[#f5f2ec] text-[10px] tracking-[0.26em] uppercase border-b border-[#f5f2ec]/45 pb-0.5 hover:border-[#f5f2ec] transition-all duration-300"
              >
                Shop the Collection
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BRAND PILLARS ── */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1e2c42]/10">
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
            <Reveal key={i}>
              <div className="py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                <p
                  className="text-[#d4c4a0] text-3xl mb-5"
                  style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                >
                  {pillar.number}
                </p>
                <h3
                  className="text-xl md:text-2xl text-[#1e2c42] mb-4"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  {pillar.title}
                </h3>
                <div className="w-8 h-px bg-[#c8b99a] mb-4" />
                <p className="text-[#7a8a9a] text-sm leading-7">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── JOURNAL PREVIEW ── */}
      <section className="bg-[#1e2c42] py-20 md:py-28">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[9px] tracking-[0.32em] uppercase text-[#4a6274] mb-3">The Journal</p>
                <h2
                  className="text-4xl md:text-5xl text-[#f5f2ec]"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                >
                  Stories from the coast
                </h2>
              </div>
              <Link
                href="/journal"
                className="hidden md:inline-block text-[10px] tracking-[0.2em] uppercase text-[#7a8a9a] hover:text-[#c8b99a] transition-colors duration-300"
              >
                All Articles →
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { category: "Craft", title: "On the art of enzyme washing", excerpt: "How we achieve the perfect sun-faded finish through an ancient Japanese textile technique.", img: IMG.fabricTexture },
              { category: "Place", title: "The Adriatic in October", excerpt: "A quiet week along the Dalmatian coast — the light, the stone, the stillness.", img: IMG.heroCoastal },
              { category: "Archive", title: "Old summers, new garments", excerpt: "How family photographs from the 1970s shaped the visual language of Le Déclin Oublié.", img: IMG.vintageFamily },
            ].map((article, i) => (
              <Reveal key={i}>
                <Link href="/journal" className="group block">
                  <div className="relative w-full aspect-[4/3] overflow-hidden mb-5">
                    <BrandImage
                      src={article.img}
                      alt={article.title}
                      fill
                      className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-[9px] tracking-[0.28em] uppercase text-[#4a6274] mb-2">{article.category}</p>
                  <h3
                    className="text-xl text-[#f5f2ec] mb-2 group-hover:text-[#d4c4a0] transition-colors duration-300 leading-snug"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-[#7a8a9a] text-xs leading-6">{article.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="bg-[#f0ebe0] py-20 md:py-28">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="text-[9px] tracking-[0.32em] uppercase text-[#7a8a9a] mb-3">Stay close</p>
            <h2
              className="text-4xl md:text-5xl text-[#1e2c42] mb-4"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            >
              Quiet letters from the coast
            </h2>
            <p className="text-[#7a8a9a] text-sm mb-9 max-w-sm mx-auto leading-7">
              Occasional dispatches — new collections, journal entries, and fragments of the world that inspires us.
            </p>
            <form
              className="flex flex-col sm:flex-row max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-0 bg-transparent border border-[#1e2c42]/20 px-5 py-3.5 text-xs tracking-[0.1em] text-[#1e2c42] placeholder:text-[#7a8a9a] focus:outline-none focus:border-[#1e2c42]/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-[#1e2c42] text-[#f5f2ec] px-8 py-3.5 text-[10px] tracking-[0.2em] uppercase hover:bg-[#2a3d56] transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
