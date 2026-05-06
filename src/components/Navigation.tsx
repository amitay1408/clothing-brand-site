"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = scrolled
    ? "bg-[#f5f2ec]/95 backdrop-blur-sm border-b border-[#1e2c42]/8"
    : isHome
    ? "bg-transparent"
    : "bg-[#f5f2ec]/95 backdrop-blur-sm border-b border-[#1e2c42]/8";

  const textColor = scrolled
    ? "text-[#1e2c42]"
    : isHome
    ? "text-[#f5f2ec]"
    : "text-[#1e2c42]";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${navBg}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Left nav links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] tracking-[0.22em] uppercase font-medium transition-opacity duration-300 hover:opacity-60 ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link
            href="/"
            className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none transition-opacity duration-300 hover:opacity-70 ${textColor}`}
          >
            <span
              className="text-base md:text-lg tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, letterSpacing: "0.18em" }}
            >
              Le Déclin Oublié
            </span>
            <span className="text-[7px] tracking-[0.3em] uppercase mt-0.5 opacity-60">
              Maison de Mode
            </span>
          </Link>

          {/* Right nav links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] tracking-[0.22em] uppercase font-medium transition-opacity duration-300 hover:opacity-60 ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ml-auto flex flex-col gap-1.5 p-1 transition-opacity duration-300 hover:opacity-60 ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-px bg-current"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-px bg-current"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-px bg-current"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#1e2c42] flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="text-[#f5f2ec] text-3xl tracking-[0.15em] uppercase hover:opacity-60 transition-opacity duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.p
              className="absolute bottom-12 text-[#7a8a9a] text-[9px] tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Maison de Mode · Est. MMXXIV
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
