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

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isLight = !scrolled && isHome;

  const navBg = scrolled || !isHome
    ? "bg-[#f5f2ec]/96 backdrop-blur-sm border-b border-[#1e2c42]/10"
    : "bg-transparent";

  const textColor = isLight ? "text-[#f5f2ec]" : "text-[#1e2c42]";
  const subtextColor = isLight ? "text-[#f5f2ec]/50" : "text-[#7a8a9a]";
  const linkColor = isLight
    ? "text-[#f5f2ec]/80 hover:text-[#f5f2ec]"
    : "text-[#1e2c42]/60 hover:text-[#1e2c42]";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${navBg}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* 3-column grid: left-links | logo | right-links */}
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10 h-16 md:h-20 grid grid-cols-3 items-center">

          {/* Left — desktop nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] tracking-[0.2em] uppercase font-light transition-colors duration-300 ${linkColor}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center — logo (always centered in the middle column) */}
          <div className="flex justify-center">
            <Link
              href="/"
              className={`flex flex-col items-center leading-none transition-opacity duration-300 hover:opacity-60 ${textColor}`}
            >
              <span
                className="text-sm md:text-base tracking-[0.2em] uppercase whitespace-nowrap"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                Le Déclin Oublié
              </span>
              <span className={`text-[7px] tracking-[0.28em] uppercase mt-0.5 ${subtextColor}`}>
                Maison de Mode
              </span>
            </Link>
          </div>

          {/* Right — desktop nav + mobile hamburger */}
          <div className="flex items-center justify-end">
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[10px] tracking-[0.2em] uppercase font-light transition-colors duration-300 ${linkColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 transition-opacity duration-300 hover:opacity-60 ${textColor}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-5 h-px bg-current mx-auto"
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-5 h-px bg-current mx-auto"
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-px bg-current mx-auto"
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
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
            transition={{ duration: 0.35 }}
          >
            <nav className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="text-[#f5f2ec] text-[2rem] tracking-[0.14em] uppercase hover:text-[#d4c4a0] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.p
              className="mt-16 text-[#4a6274] text-[9px] tracking-[0.28em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Maison de Mode · Est. MMXXIV
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
