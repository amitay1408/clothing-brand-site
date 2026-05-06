"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#1e2c42] text-[#f5f2ec] pt-20 pb-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-8 pb-16 border-b border-[#f5f2ec]/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2
              className="text-2xl md:text-3xl tracking-[0.18em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
            >
              Le Déclin Oublié
            </h2>
            <p className="text-[#7a8a9a] text-xs tracking-[0.1em] leading-relaxed max-w-xs">
              Garments shaped by time, salt, and sunlight. Quiet pieces for slower moments — inspired by summers along the Mediterranean coast.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[9px] tracking-[0.3em] uppercase text-[#7a8a9a] mb-6">Navigate</h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/shop", label: "Shop" },
                { href: "/collections", label: "Collections" },
                { href: "/about", label: "About" },
                { href: "/journal", label: "Journal" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-[0.15em] uppercase text-[#c8b99a] hover:text-[#f5f2ec] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-[9px] tracking-[0.3em] uppercase text-[#7a8a9a] mb-6">Information</h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/contact", label: "Customer Care" },
                { href: "/about", label: "Our Story" },
                { href: "/journal", label: "Journal" },
                { href: "#", label: "Sizing Guide" },
                { href: "#", label: "Shipping & Returns" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[11px] tracking-[0.15em] uppercase text-[#c8b99a] hover:text-[#f5f2ec] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#4a6274] text-[10px] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Le Déclin Oublié. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#4a6274] text-[10px] tracking-[0.18em] uppercase">Est. MMXXIV</span>
            <span className="text-[#4a6274] text-[10px] tracking-[0.18em] uppercase">Maison de Mode</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
