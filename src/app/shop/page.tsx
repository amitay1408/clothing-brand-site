"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import BrandImage from "@/components/BrandImage";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

function AnimatedItem({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const products = [
  {
    id: 1,
    name: "Le Tee — Washed Navy",
    price: "€185",
    category: "T-Shirts",
    tag: "Signature",
    img: "/images/product-tee.jpg",
    hoverImg: "/images/editorial-pier.jpg",
    details: "Heavyweight enzyme-washed cotton · Relaxed fit · Small embroidered logo",
  },
  {
    id: 2,
    name: "Le Tee — Washed Steel",
    price: "€185",
    category: "T-Shirts",
    tag: null,
    img: "/images/product-tee.jpg",
    hoverImg: "/images/fabric-texture.jpg",
    details: "Heavyweight enzyme-washed cotton · Relaxed fit · 4-stitch side detail",
  },
  {
    id: 3,
    name: "Le Pantalon — Off-White",
    price: "€220",
    category: "Trousers",
    tag: "New",
    img: "/images/editorial-pier.jpg",
    hoverImg: "/images/hero-coastal.jpg",
    details: "Brushed French terry · Wide-leg · Script embroidery",
  },
  {
    id: 4,
    name: "Le Crewneck — Washed Navy",
    price: "€265",
    category: "Knitwear",
    tag: null,
    img: "/images/hero-coastal.jpg",
    hoverImg: "/images/product-tee.jpg",
    details: "Garment-dyed heavy fleece · Boxy fit · Faded finish",
  },
  {
    id: 5,
    name: "Le Jacket — Coastal",
    price: "€395",
    category: "Outerwear",
    tag: "Limited",
    img: "/images/fabric-texture.jpg",
    hoverImg: "/images/editorial-pier.jpg",
    details: "Canvas cotton · Unstructured · Vintage wash treatment",
  },
  {
    id: 6,
    name: "Le Tee — Archive Grey",
    price: "€185",
    category: "T-Shirts",
    tag: null,
    img: "/images/hero-coastal.jpg",
    hoverImg: "/images/fabric-texture.jpg",
    details: "Heavyweight enzyme-washed cotton · Relaxed fit · Tonal print",
  },
];

const filters = ["All", "T-Shirts", "Trousers", "Knitwear", "Outerwear"];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
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
            The Shop
          </h1>
          <p className="text-[#7a8a9a] text-sm max-w-sm leading-7">
            Quiet pieces made to last. Each garment carries the memory of a slower season.
          </p>
        </motion.div>
      </section>

      <div className="border-t border-[#1e2c42]/8" />

      {/* Filters */}
      <section className="py-8 px-6 md:px-10 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-8 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-[10px] tracking-[0.22em] uppercase whitespace-nowrap transition-all duration-300 pb-1 ${
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
      <section className="pb-28 px-6 md:px-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e2c42]/6">
          {filtered.map((product, i) => (
            <AnimatedItem key={product.id} delay={i * 0.05}>
              <div
                className="bg-[#f5f2ec] group cursor-pointer"
                onMouseEnter={() => setHovered(product.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#ede5d4]">
                  <BrandImage
                    src={product.img}
                    alt={product.name}
                    fill
                    className={`object-cover object-center transition-all duration-[1200ms] ease-out ${
                      hovered === product.id ? "opacity-0 scale-105" : "opacity-100 scale-100"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <BrandImage
                    src={product.hoverImg}
                    alt={`${product.name} styled`}
                    fill
                    className={`object-cover object-center transition-all duration-[1200ms] ease-out ${
                      hovered === product.id ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-[#1e2c42] text-[#d4c4a0] px-3 py-1">
                      <span className="text-[8px] tracking-[0.25em] uppercase">{product.tag}</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 md:p-6">
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#7a8a9a] mb-1.5">{product.category}</p>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      className="text-lg text-[#1e2c42]"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                    >
                      {product.name}
                    </h3>
                    <span className="text-sm text-[#1e2c42] whitespace-nowrap">{product.price}</span>
                  </div>
                  <p className="text-[11px] text-[#7a8a9a] leading-5 mb-5">{product.details}</p>
                  <button className="w-full bg-[#1e2c42] text-[#f5f2ec] text-[9px] tracking-[0.25em] uppercase py-3 hover:bg-[#2a3d56] transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </section>
    </>
  );
}
