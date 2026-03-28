"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function Home() {
  return (
    <main style={{ background: "#fef7ff", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <div className="ms-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="ms-chip ms-chip-info" style={{ marginBottom: "24px" }}>
                Kinetic Architecture
              </span>
              <h1
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                  fontWeight: 900,
                  color: "#1d1b20",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.0,
                  marginTop: "20px",
                  marginBottom: "24px",
                }}
              >
                WE MOVE
                <br />
                <span style={{ color: "#004e85" }}>WHAT MATTERS.</span>
              </h1>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "#414750",
                  maxWidth: "480px",
                  marginBottom: "40px",
                }}
              >
                End-to-end logistics solutions across global corridors. Architecting
                the future of B2B supply chains through precision, real-time intelligence,
                and unwavering reliability.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="ms-btn ms-btn-primary">
                  Get a Quote
                </Link>
                <Link href="/services" className="ms-btn ms-btn-secondary">
                  Our Services <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                height: "500px",
                position: "relative",
              }}
              className="ms-shadow"
            >
              <Image
                src="/images/hero.png"
                alt="Maiti & Sons logistics fleet"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(150deg, rgba(0,78,133,0.14) 0%, transparent 55%)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────── */}
      <section style={{ background: "#f0eaf8", padding: "64px 0" }}>
        <div className="ms-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px",
            }}
          >
            {[
              { value: "8+", label: "Years Experience" },
              { value: "2,000+", label: "Deliveries Monthly" },
              { value: "15+", label: "Cities Covered" },
              { value: "99.8%", label: "On-Time Rate" },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="ms-stat">
                <div className="ms-stat-value">{s.value}</div>
                <div className="ms-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ────────────────────────────────────── */}
      <section style={{ padding: "96px 0" }}>
        <div className="ms-container">
          <div style={{ marginBottom: "64px" }}>
            <span className="ms-label" style={{ color: "#004e85", display: "block", marginBottom: "14px" }}>
              What We Do
            </span>
            <h2
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "#1d1b20",
                maxWidth: "520px",
              }}
            >
              Built for Every Logistic Challenge
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {[
              { icon: <Zap size={22} />, title: "Express Road Freight", desc: "Swift and secure surface transport across major industrial corridors with real-time GPS fleet monitoring.", href: "/services" },
              { icon: <Globe size={22} />, title: "Global Air Cargo", desc: "International shipping connections with simplified customs clearance and door-to-door delivery.", href: "/services" },
              { icon: <Shield size={22} />, title: "Smart Warehousing", desc: "Grade-A facilities equipped with WMS, temperature control, and high-security storage solutions.", href: "/services" },
            ].map((card, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="ms-card ms-shadow-sm"
              >
                <div className="ms-icon-box">{card.icon}</div>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", color: "#1d1b20" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.72, color: "#414750", marginBottom: "24px" }}>
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#004e85",
                    textDecoration: "none",
                  }}
                >
                  Explore <ArrowRight size={11} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE MAITI STANDARD ──────────────────────────────────── */}
      <section style={{ background: "#f0eaf8", padding: "96px 0" }}>
        <div className="ms-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
          >
            {/* Image */}
            <div style={{ position: "relative" }}>
              <div
                style={{ borderRadius: "20px", overflow: "hidden", height: "460px", position: "relative" }}
                className="ms-shadow"
              >
                <Image
                  src="/images/warehouse.png"
                  alt="Maiti warehouse operations"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Floating info box */}
              <div
                className="ms-glass ms-shadow"
                style={{
                  position: "absolute",
                  bottom: "-28px",
                  right: "-20px",
                  borderRadius: "16px",
                  padding: "22px 28px",
                  maxWidth: "256px",
                  border: "1px solid rgba(0,78,133,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <div
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background: "#22c55e",
                    }}
                  />
                  <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", color: "#004e85" }}>
                    LIVE SYSTEM OK
                  </span>
                </div>
                <p style={{ fontSize: "0.78rem", color: "#506072", lineHeight: 1.6 }}>
                  Real-time visibility over your inventory across all 28+ locations.
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#1d1b20",
                  marginBottom: "48px",
                }}
              >
                The Maiti Standard
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {[
                  { n: "1", title: "Real-time AI-powered tracking", desc: "Never lose sight of your cargo with edge-computed arrival times." },
                  { n: "2", title: "Dedicated 24/7 account manager", desc: "One point of contact for all your logistical complexities." },
                  { n: "3", title: "Comprehensive insured shipments", desc: "Total peace of mind with end-to-end liability coverage." },
                  { n: "4", title: "Custom logistics architecture", desc: "Tailored routing strategies built around your supply chain profile." },
                ].map((item) => (
                  <div key={item.n} style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #004e85, #1a66a6)",
                        color: "#fff",
                        fontSize: "0.82rem",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 4px 12px rgba(0,78,133,0.25)",
                      }}
                    >
                      {item.n}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1d1b20", marginBottom: "6px" }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: "0.85rem", color: "#414750", lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section style={{ padding: "96px 0" }}>
        <div className="ms-container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>
              Trusted by Industry Leaders
            </h2>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
          >
            {[
              { name: "Ramya Iyer, CEO, First Praviita", quote: '"Maiti & Sons transformed our distribution network. Their transparency and reliability are unmatched in the cargo market."' },
              { name: "Ananya Sharma, Logistics Dir, MedLink", quote: '"Their specialized routing for our fragile equipment was flawless. Highly recommended for complex cargo requirements."' },
              { name: "Vikram Desai, Supply Chain Mgr", quote: '"The real-time updates gave us full follow-up visibility we\'ve never experienced before. A truly world-class partner."' },
            ].map((t, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="ms-card ms-shadow-sm">
                <div style={{ display: "flex", gap: "3px", marginBottom: "18px" }}>
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: "#f59e0b", fontSize: "0.9rem" }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "#414750", marginBottom: "20px" }}>
                  {t.quote}
                </p>
                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#004e85", letterSpacing: "0.04em" }}>
                  — {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #004e85 0%, #1a66a6 100%)",
          padding: "96px 0",
          textAlign: "center",
        }}
      >
        <div className="ms-container">
          <h2
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            READY TO SHIP SMARTER?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.68)", fontSize: "1rem", marginBottom: "40px" }}>
            Connect with our logistics architects and optimize your supply chain today.
          </p>
          <Link href="/contact" className="ms-btn ms-btn-white" style={{ padding: "16px 48px" }}>
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
