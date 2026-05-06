"use client";

import { useRef, useState } from "react";
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

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#1e2c42]/20 py-3.5 text-sm text-[#1e2c42] placeholder:text-[#7a8a9a] focus:outline-none focus:border-[#1e2c42]/60 transition-colors duration-300 tracking-[0.04em]";

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <BrandImage
          src="/images/hero-coastal.jpg"
          alt="Contact — coastal"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e2c42]/40 to-[#1e2c42]/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p
            className="text-[#d4c4a0] text-[9px] tracking-[0.35em] uppercase mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            We would love to hear from you
          </motion.p>
          <motion.h1
            className="text-[#f5f2ec] text-5xl md:text-7xl"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5 }}
          >
            Contact
          </motion.h1>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 md:py-32 px-6 md:px-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — Info */}
          <AnimatedSection>
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#7a8a9a] mb-8">Get in touch</p>
              <h2
                className="text-4xl md:text-5xl text-[#1e2c42] mb-8 leading-[1.1]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                Quiet conversations<br />
                <em>welcome</em>
              </h2>
              <p className="text-[#7a8a9a] text-sm leading-8 mb-12 max-w-sm">
                Whether it's about a garment, an order, a collaboration, or simply to say hello — we read everything and respond with care.
              </p>

              <div className="space-y-8">
                {[
                  {
                    label: "Customer Care",
                    value: "contact@ledeclinoublie.com",
                    sub: "We respond within 24–48 hours",
                  },
                  {
                    label: "Press & Editorial",
                    value: "press@ledeclinoublie.com",
                    sub: "Media & collaboration enquiries",
                  },
                  {
                    label: "Wholesale",
                    value: "wholesale@ledeclinoublie.com",
                    sub: "Stockist & retail partnerships",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[9px] tracking-[0.28em] uppercase text-[#7a8a9a] mb-1.5">{item.label}</p>
                    <p className="text-sm text-[#1e2c42] mb-0.5">{item.value}</p>
                    <p className="text-xs text-[#7a8a9a]">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[#1e2c42]/10">
                <p className="text-[9px] tracking-[0.28em] uppercase text-[#7a8a9a] mb-4">Follow</p>
                <div className="flex gap-6">
                  {["Instagram", "Pinterest"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-[10px] tracking-[0.18em] uppercase text-[#1e2c42]/60 hover:text-[#1e2c42] transition-colors duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.1}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <p
                    className="text-3xl text-[#1e2c42] mb-4"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                  >
                    Message received.
                  </p>
                  <p className="text-[#7a8a9a] text-sm leading-7 max-w-xs mx-auto">
                    Thank you for reaching out. We'll respond within 24–48 hours with the same care you've written with.
                  </p>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[9px] tracking-[0.28em] uppercase text-[#7a8a9a] mb-3">
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
                    <label className="block text-[9px] tracking-[0.28em] uppercase text-[#7a8a9a] mb-3">
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
                  <label className="block text-[9px] tracking-[0.28em] uppercase text-[#7a8a9a] mb-3">
                    Subject
                  </label>
                  <select
                    className={`${inputClass} cursor-pointer`}
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
                  <label className="block text-[9px] tracking-[0.28em] uppercase text-[#7a8a9a] mb-3">
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
                  className="w-full bg-[#1e2c42] text-[#f5f2ec] text-[10px] tracking-[0.28em] uppercase py-4 hover:bg-[#2a3d56] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom image strip */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <BrandImage
          src="/images/editorial-pier.jpg"
          alt="Mediterranean coast"
          fill
          className="object-cover object-[center_60%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1e2c42]/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="text-[#f5f2ec]/80 text-sm md:text-base tracking-[0.18em] text-center"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            Quiet pieces for slower moments.
          </p>
        </div>
      </section>
    </>
  );
}
