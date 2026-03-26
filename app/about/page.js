"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const timeline = [
  { year: "1982", event: "Founding Vision", desc: "Arjun Maiti starts with a single truck, delivering regional supplies with a promise of 100% reliability." },
  { year: "1998", event: "Cross-Border Expansion", desc: "The fleet grows to 50 vehicles, establishing the first international freight routes into neighboring territories." },
  { year: "2012", event: "Digital Transformation", desc: "Maiti & Sons implements real-time satellite tracking and AI-driven route optimization for all logistics nodes." },
  { year: "2024", event: "Global Leadership", desc: "Now a multi-national brand, we handle over 50,000 shipments annually with the same founding precision." },
];

const values = [
  { n: "01", title: "Unwavering Integrity", desc: "We operate with transparent honesty in every contract. If we say it's arriving Tuesday, it's there by Monday night." },
  { n: "02", title: "Kinetic Innovation", desc: "Stagnation is the enemy of trade. We constantly refine our algorithms and routes to save time and carbon footprints." },
  { n: "03", title: "Safety First Hierarchy", desc: "The well-being of our drivers and the security of your cargo are paramount. We never compromise safety for speed." },
  { n: "04", title: "Radical Reliability", desc: "We build systems that don't fail. Our redundancy protocols ensure your business keeps moving regardless of global turbulence." },
];

export default function About() {
  return (
    <main style={{ background: "#fef7ff", minHeight: "100vh" }}>
      <Navbar />

      {/* ── EDITORIAL HEADER ──────────────────────── */}
      <section style={{ paddingTop: "140px", paddingBottom: "64px" }}>
        <div className="ms-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "80px",
              alignItems: "flex-end",
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                  fontWeight: 900,
                  color: "#1d1b20",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.0,
                  marginBottom: "16px",
                }}
              >
                MAITI <span style={{ color: "#004e85" }}>& SONS</span>
              </h1>
              <h2
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#506072",
                  marginBottom: "24px",
                }}
              >
                A Legacy of Trust & Precision
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#414750", maxWidth: "520px" }}>
                Navigating global trade with unmatched architectural precision. From local haulage
                to international freight, we build the bridges that keep commerce moving across every border.
              </p>
            </div>
            <div
              style={{
                borderLeft: "3px solid rgba(0,78,133,0.1)",
                paddingLeft: "40px",
                paddingBottom: "4px",
              }}
            >
              <p className="ms-label" style={{ marginBottom: "12px" }}>Established</p>
              <div
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "5.5rem",
                  fontWeight: 900,
                  color: "#1d1b20",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                1982
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────── */}
      <section style={{ background: "#f0eaf8", padding: "96px 0" }}>
        <div className="ms-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>
            {/* Timeline */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  fontWeight: 800,
                  color: "#1d1b20",
                  marginBottom: "56px",
                }}
              >
                The Journey of a Thousand Miles
              </h2>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {timeline.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "22px" }}>
                    {/* Axis */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div className="ms-timeline-dot" />
                      {i < timeline.length - 1 && (
                        <div className="ms-timeline-line" />
                      )}
                    </div>
                    {/* Content */}
                    <div style={{ paddingBottom: i < timeline.length - 1 ? "36px" : 0, paddingTop: "0" }}>
                      <span className="ms-label" style={{ color: "#004e85", display: "block", marginBottom: "6px" }}>
                        {item.year}
                      </span>
                      <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1d1b20", marginBottom: "8px" }}>
                        {item.event}
                      </h4>
                      <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#414750" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div style={{ position: "relative" }}>
              <div
                style={{ borderRadius: "20px", overflow: "hidden", height: "540px", position: "relative" }}
                className="ms-shadow"
              >
                <Image
                  src="/images/warehouse.png"
                  alt="Maiti legacy"
                  fill
                  style={{ objectFit: "cover", filter: "grayscale(35%)" }}
                />
              </div>
              {/* Quote overlay */}
              <div
                className="ms-glass ms-shadow"
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "-20px",
                  borderRadius: "16px",
                  padding: "24px 28px",
                  maxWidth: "280px",
                  border: "1px solid rgba(0,78,133,0.06)",
                }}
              >
                <p style={{ fontSize: "0.82rem", fontStyle: "italic", lineHeight: 1.75, color: "#414750" }}>
                  "What began in a modest office with a handwritten ledger has transformed
                  into a pinnacle of modern logistics."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────── */}
      <section style={{ padding: "96px 0" }}>
        <div className="ms-container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="ms-label" style={{ display: "block", marginBottom: "16px" }}>
              The People Behind Every Delivery
            </span>
            <h2
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "#1d1b20",
              }}
            >
              Our Leadership Team
            </h2>
            <div className="ms-accent-line" style={{ margin: "24px auto 0" }} />
          </div>

          <div
            style={{ borderRadius: "20px", overflow: "hidden", height: "400px", position: "relative", marginBottom: "64px" }}
            className="ms-shadow"
          >
            <Image
              src="/images/team.png"
              alt="Maiti & Sons leadership team"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────── */}
      <section style={{ background: "#f0eaf8", padding: "96px 0" }}>
        <div className="ms-container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "#1d1b20",
              }}
            >
              Our Core Values
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {values.map((val, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="ms-card ms-shadow-sm">
                <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontSize: "2.8rem",
                      fontWeight: 900,
                      color: "rgba(0,78,133,0.07)",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {val.n}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1d1b20", marginBottom: "10px" }}>
                      {val.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#414750" }}>{val.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
