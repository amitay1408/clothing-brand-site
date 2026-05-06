"use client";

import { useRef } from "react";
import Link from "next/link";
import BrandImage from "@/components/BrandImage";
import { motion, useInView } from "framer-motion";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const articles = [
  {
    id: 1,
    category: "Craft",
    title: "On the art of enzyme washing",
    subtitle: "A slow transformation",
    excerpt:
      "How we achieve the perfect sun-faded finish through an ancient Japanese textile technique that strips colour softly, the way time does.",
    date: "April 2024",
    readTime: "6 min",
    img: "/images/fabric-texture.jpg",
    featured: true,
  },
  {
    id: 2,
    category: "Place",
    title: "The Adriatic in October",
    subtitle: "A quiet week on the Dalmatian coast",
    excerpt:
      "The light, the stone, the stillness. What we found when we went looking for the soul of the collection.",
    date: "March 2024",
    readTime: "8 min",
    img: "/images/hero-coastal.jpg",
    featured: false,
  },
  {
    id: 3,
    category: "Archive",
    title: "Old summers, new garments",
    subtitle: "How family photographs shaped our visual language",
    excerpt:
      "An October afternoon in 1979, five people around a table, the warmth in their fabrics — and how that image became Le Déclin Oublié.",
    date: "February 2024",
    readTime: "5 min",
    img: "/images/vintage-family.jpg",
    featured: false,
  },
  {
    id: 4,
    category: "Garment",
    title: "The weight of cotton",
    subtitle: "Why heavier is better",
    excerpt:
      "On the quiet luxury of heavyweight cotton — why fabric weight matters more than price, and what 300gsm actually feels like.",
    date: "January 2024",
    readTime: "4 min",
    img: "/images/product-tee.jpg",
    featured: false,
  },
  {
    id: 5,
    category: "Culture",
    title: "The old money summer",
    subtitle: "On quiet wealth and coastal ease",
    excerpt:
      "A meditation on the European summer aesthetic — not the yacht, but the ease. Not the label, but the linen.",
    date: "December 2023",
    readTime: "7 min",
    img: "/images/editorial-pier.jpg",
    featured: false,
  },
];

export default function JournalPage() {
  const featuredArticle = articles.find((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[9px] tracking-[0.35em] uppercase text-[#7a8a9a] mb-4">Le Déclin Oublié</p>
          <h1
            className="text-5xl md:text-7xl text-[#1e2c42] mb-6"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          >
            The Journal
          </h1>
          <p className="text-[#7a8a9a] text-sm max-w-sm leading-7">
            Stories from the coast. On craft, place, memory, and the quiet art of making things that last.
          </p>
        </motion.div>
      </section>

      <div className="border-t border-[#1e2c42]/8" />

      {/* Featured article */}
      {featuredArticle && (
        <section className="py-16 md:py-24 px-6 md:px-10 max-w-screen-xl mx-auto">
          <AnimatedSection>
            <Link href="#" className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
              <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden">
                <BrandImage
                  src={featuredArticle.img}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-[#1e2c42] text-[#d4c4a0] px-3 py-1">
                  <span className="text-[8px] tracking-[0.25em] uppercase">Featured</span>
                </div>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#7a8a9a] mb-3">
                  {featuredArticle.category} · {featuredArticle.date} · {featuredArticle.readTime} read
                </p>
                <h2
                  className="text-4xl md:text-5xl text-[#1e2c42] mb-3 group-hover:text-[#2a3d56] transition-colors duration-300 leading-[1.08]"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                >
                  {featuredArticle.title}
                </h2>
                <p
                  className="text-[#7a8a9a] text-lg mb-5"
                  style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                >
                  {featuredArticle.subtitle}
                </p>
                <p className="text-[#7a8a9a] text-sm leading-7 mb-8">{featuredArticle.excerpt}</p>
                <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-[#1e2c42] border-b border-[#1e2c42]/40 pb-0.5 group-hover:border-[#1e2c42] transition-colors duration-300">
                  Read Article →
                </span>
              </div>
            </Link>
          </AnimatedSection>
        </section>
      )}

      <div className="border-t border-[#1e2c42]/8 mx-6 md:mx-10" />

      {/* Article grid */}
      <section className="py-16 md:py-24 px-6 md:px-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {regularArticles.map((article, i) => (
            <AnimatedSection key={article.id} delay={i * 0.08}>
              <Link href="#" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <BrandImage
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="text-[9px] tracking-[0.28em] uppercase text-[#7a8a9a] mb-2">
                  {article.category} · {article.date}
                </p>
                <h3
                  className="text-2xl text-[#1e2c42] mb-2 group-hover:text-[#2a3d56] transition-colors duration-300 leading-[1.2]"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-[#7a8a9a] text-sm mb-4"
                  style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                >
                  {article.subtitle}
                </p>
                <p className="text-[#7a8a9a] text-xs leading-6 mb-4 line-clamp-3">{article.excerpt}</p>
                <span className="text-[9px] tracking-[0.22em] uppercase text-[#1e2c42]/60 group-hover:text-[#1e2c42] transition-colors duration-300">
                  {article.readTime} read →
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1e2c42] py-20 md:py-28 px-6 md:px-10 text-center">
        <AnimatedSection>
          <p className="text-[9px] tracking-[0.35em] uppercase text-[#4a6274] mb-4">The Dispatch</p>
          <h2
            className="text-4xl md:text-5xl text-[#f5f2ec] mb-4"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          >
            Quiet letters from the coast
          </h2>
          <p className="text-[#7a8a9a] text-sm mb-10 max-w-sm mx-auto leading-7">
            Occasional dispatches — new collections, journal entries, and fragments of the world that inspires us.
          </p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-[#4a6274] px-5 py-3.5 text-xs tracking-[0.12em] text-[#f5f2ec] placeholder:text-[#4a6274] focus:outline-none focus:border-[#7a8a9a] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#f5f2ec] text-[#1e2c42] px-8 py-3.5 text-[10px] tracking-[0.22em] uppercase hover:bg-[#ede5d4] transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </AnimatedSection>
      </section>
    </>
  );
}
