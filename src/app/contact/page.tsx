"use client";

import { useRef, useState } from "react";
import BrandImage from "@/components/BrandImage";
import Container from "@/components/Container";
import { IMG } from "@/lib/images";
import { motion, useInView } from "framer-motion";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#1e2c42]/20 py-3 text-sm text-[#1e2c42] placeholder:text-[#b0a899] focus:outline-none focus:border-[#1e2c42]/55 transition-colors duration-300";

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] max-h-[700px] overflow-hidden">
        <BrandImage
          src={IMG.heroCoastal}
          alt="Contact — coastal"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e2c42]/40 via-[#1e2c42]/30 to-[#1e2c42]/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            className="text-[#d4c4a0] text-[9px] tracking-[0.32em] uppercase mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            We would love to hear from you
          </motion.p>
          <motion.h1
            className="text-[#f5f2ec] text-5xl md:text-7xl"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5 }}
          >
            Contact
          </motion.h1>
        </div>
      </section>

      {/* Main contact section */}
      <section className="w-full max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 lg:gap-28">

          {/* Left — contact info */}
          <Reveal>
            <div>
              <p className="text-[9px] tracking-[0.32em] uppercase text-[#7a8a9a] mb-7">Get in touch</p>
              <h2
                className="text-4xl md:text-5xl text-[#1e2c42] mb-7 leading-[1.1]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                Quiet conversations<br />
                <em>welcome</em>
              </h2>
              <p className="text-[#7a8a9a] text-sm leading-8 mb-10 max-w-xs">
                Whether it&rsquo;s about a garment, an order, a collaboration, or simply to say hello — we read everything and respond with care.
              </p>

              <div className="space-y-7 mb-10">
                {[
                  { label: "Customer Care", value: "contact@ledeclinoublie.com", sub: "We respond within 24–48 hours" },
                  { label: "Press & Editorial", value: "press@ledeclinoublie.com", sub: "Media & collaboration enquiries" },
                  { label: "Wholesale", value: "wholesale@ledeclinoublie.com", sub: "Stockist & retail partnerships" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[9px] tracking-[0.26em] uppercase text-[#7a8a9a] mb-1.5">{item.label}</p>
                    <p className="text-sm text-[#1e2c42] mb-0.5">{item.value}</p>
                    <p className="text-xs text-[#7a8a9a]">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="pt-7 border-t border-[#1e2c42]/10">
                <p className="text-[9px] tracking-[0.26em] uppercase text-[#7a8a9a] mb-4">Follow</p>
                <div className="flex gap-6">
                  {["Instagram", "Pinterest"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-[10px] tracking-[0.16em] uppercase text-[#1e2c42]/50 hover:text-[#1e2c42] transition-colors duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — form or success */}
          <Reveal delay={0.1}>
            {sent ? (
              <div className="flex flex-col justify-center py-16 md:py-24">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <p
                    className="text-3xl md:text-4xl text-[#1e2c42] mb-5"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                  >
                    Message received.
                  </p>
                  <div className="w-10 h-px bg-[#c8b99a] mb-5" />
                  <p className="text-[#7a8a9a] text-sm leading-7 max-w-xs">
                    Thank you for reaching out. We&rsquo;ll respond within 24–48 hours with the same care you&rsquo;ve written with.
                  </p>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label className="block text-[9px] tracking-[0.26em] uppercase text-[#7a8a9a] mb-3">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="—"
                      className={inputClass}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-[0.26em] uppercase text-[#7a8a9a] mb-3">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="—"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] tracking-[0.26em] uppercase text-[#7a8a9a] mb-3">
                    Subject
                  </label>
                  <select
                    className={`${inputClass} cursor-pointer bg-[#f5f2ec]`}
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  >
                    <option value="">— Select —</option>
                    <option value="order">Order Enquiry</option>
                    <option value="product">Product Question</option>
                    <option value="press">Press & Editorial</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[9px] tracking-[0.26em] uppercase text-[#7a8a9a] mb-3">
                    Your message
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Write freely."
                    className={`${inputClass} resize-none`}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e2c42] text-[#f5f2ec] text-[10px] tracking-[0.26em] uppercase py-4 hover:bg-[#2a3d56] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* Bottom image strip */}
      <section className="relative w-full h-44 md:h-56 overflow-hidden">
        <BrandImage
          src={IMG.editorialPier}
          alt="Mediterranean coast"
          fill
          className="object-cover object-[center_60%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1e2c42]/45" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p
            className="text-[#f5f2ec]/75 text-base md:text-lg tracking-[0.12em] text-center"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            Quiet pieces for slower moments.
          </p>
        </div>
      </section>
    </>
  );
}
