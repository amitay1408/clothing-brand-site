"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import BrandImage from "@/components/BrandImage";
import Container from "@/components/Container";
import { IMG } from "@/lib/images";
import { motion, useInView } from "framer-motion";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const products = [
  { id: 1, name: "Le Tee — Washed Navy", price: "€185", category: "T-Shirts", tag: "Signature", img: IMG.productTee, hoverImg: IMG.editorialPier, details: "Heavyweight enzyme-washed cotton · Relaxed fit · Small embroidered logo" },
  { id: 2, name: "Le Tee — Washed Steel", price: "€185", category: "T-Shirts", tag: null, img: IMG.productTee, hoverImg: IMG.fabricTexture, details: "Heavyweight enzyme-washed cotton · Relaxed fit · 4-stitch side detail" },
  { id: 3, name: "Le Pantalon — Off-White", price: "€220", category: "Trousers", tag: "New", img: IMG.editorialPier, hoverImg: IMG.heroCoastal, details: "Brushed French terry · Wide-leg · Script embroidery" },
  { id: 4, name: "Le Crewneck — Washed Navy", price: "€265", category: "Knitwear", tag: null, img: IMG.heroCoastal, hoverImg: IMG.productTee, details: "Garment-dyed heavy fleece · Boxy fit · Faded finish" },
  { id: 5, name: "Le Jacket — Coastal", price: "€395", category: "Outerwear", tag: "Limited", img: IMG.fabricTexture, hoverImg: IMG.editorialPier, details: "Canvas cotton · Unstructured · Vintage wash treatment" },
  { id: 6, name: "Le Tee — Archive Grey", price: "€185", category: "T-Shirts", tag: null, img: IMG.heroCoastal, hoverImg: IMG.fabricTexture, details: "Heavyweight enzyme-washed cotton · Relaxed fit · Tonal print" },
];

const filters = ["All", "T-Shirts", "Trousers", "Knitwear", "Outerwear"];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? products : products.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Page header */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[9px] tracking-[0.32em] uppercase text-[#7a8a9a] mb-4">Le Déclin Oublié</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-[#1e2c42] mb-5"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          >
            The Shop
          </h1>
          <p className="text-[#7a8a9a] text-sm max-w-xs leading-7">
            Quiet pieces made to last. Each garment carries the memory of a slower season.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-[#1e2c42]/10" />

      {/* Filters */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 py-7">
        <div className="flex items-center gap-7 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-[10px] tracking-[0.2em] uppercase whitespace-nowrap pb-1 transition-all duration-300 ${
                activeFilter === f
                  ? "text-[#1e2c42] border-b border-[#1e2c42]"
                  : "text-[#7a8a9a] hover:text-[#1e2c42] border-b border-transparent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.04}>
              <div
                className="bg-[#f0ebe0] group cursor-pointer"
                onMouseEnter={() => setHovered(product.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Product image with hover swap */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#ede5d4]">
                  <BrandImage
                    src={product.img}
                    alt={product.name}
                    fill
                    className={`object-cover object-center transition-all duration-[1000ms] ease-out ${
                      hovered === product.id ? "opacity-0 scale-[1.04]" : "opacity-100 scale-100"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <BrandImage
                    src={product.hoverImg}
                    alt={`${product.name} — styled`}
                    fill
                    className={`object-cover object-center transition-all duration-[1000ms] ease-out ${
                      hovered === product.id ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-[#1e2c42] text-[#d4c4a0] px-3 py-1">
                      <span className="text-[8px] tracking-[0.22em] uppercase">{product.tag}</span>
                    </div>
                  )}
                </div>

                {/* Product info */}
                <div className="p-5">
                  <p className="text-[9px] tracking-[0.22em] uppercase text-[#7a8a9a] mb-2">{product.category}</p>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3
                      className="text-[1.1rem] leading-snug text-[#1e2c42]"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                    >
                      {product.name}
                    </h3>
                    <span className="text-sm text-[#1e2c42] shrink-0 pt-0.5">{product.price}</span>
                  </div>
                  <p className="text-[11px] text-[#7a8a9a] leading-5 mb-5">{product.details}</p>
                  <button className="w-full bg-[#1e2c42] text-[#f5f2ec] text-[9px] tracking-[0.22em] uppercase py-3 hover:bg-[#2a3d56] transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
