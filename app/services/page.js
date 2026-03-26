"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Ship, Truck, Package, Search, Settings, Play } from "lucide-react";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const services = [
  { icon: <Ship size={22} />, title: "Freight Forwarding", desc: "Global sea, air, and land transportation managed through an extensive network of Tier-1 carriers and strategic hubs." },
  { icon: <Package size={22} />, title: "Smart Warehousing", desc: "Automated inventory management systems with climate-controlled storage and real-time tracking capabilities." },
  { icon: <Search size={22} />, title: "Customs Brokerage", desc: "Streamlined international trade compliance ensuring your cargo clears borders without administrative friction." },
  { icon: <Truck size={22} />, title: "Last-Mile Delivery", desc: "Precision urban logistics focusing on the critical final leg of the journey for maximum customer satisfaction." },
  { icon: <Settings size={22} />, title: "Supply Chain Audit", desc: "Deep-dive architectural analysis of your logistics flow to identify cost-saving and efficiency opportunities." },
  { icon: <Play size={22} />, title: "Urgent Dispatch", desc: "Rapid-response transportation for high-value or time-sensitive cargo requiring immediate transit." },
];

const processSteps = [
  { title: "Discovery", desc: "We analyze your volume, routes, and specific cargo requirements to build a custom profile." },
  { title: "Architecture", desc: "Our logistics architects design the most efficient routing using multimodal optimization." },
  { title: "Execution", desc: "Shipment is initiated with 24/7 monitoring and real-time data streaming to your dashboard." },
  { title: "Optimization", desc: "Post-delivery analytics provide insights for further reducing transit times and costs." },
];

export default function Services() {
  return (
    <main style={{ background: "#fef7ff", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HEADER ──────────────────────────────────── */}
      <section style={{ paddingTop: "140px", paddingBottom: "48px", textAlign: "center" }}>
        <div className="ms-container">
          <span className="ms-chip ms-chip-info" style={{ marginBottom: "24px" }}>
            Our Services
          </span>
          <h1
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 900,
              color: "#1d1b20",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginTop: "16px",
              marginBottom: "24px",
            }}
          >
            Precision{" "}
            <span style={{ color: "#004e85" }}>Logistics Solutions</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#414750",
              lineHeight: 1.75,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Empowering your global supply chain with architectural precision,
            real-time intelligence, and unwavering reliability.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ───────────────────────────── */}
      <section style={{ padding: "48px 0 96px" }}>
        <div className="ms-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {services.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="ms-card ms-shadow-sm">
                <div className="ms-icon-box">{s.icon}</div>
                <h3 style={{ fontSize: "1.05rem", color: "#1d1b20", marginBottom: "12px" }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.72, color: "#414750" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KINETIC PROCESS ─────────────────────────── */}
      <section style={{ background: "#f0eaf8", padding: "96px 0" }}>
        <div className="ms-container">
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <h2
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "#1d1b20",
                marginBottom: "12px",
              }}
            >
              The Kinetic Process
            </h2>
            <p style={{ fontSize: "0.875rem", color: "#506072" }}>
              How we architect your logistical success.
            </p>
          </div>

          <div style={{ position: "relative" }}>
            {/* Connector line */}
            <div
              style={{
                position: "absolute",
                top: "26px",
                left: "calc(12.5% + 4px)",
                right: "calc(12.5% + 4px)",
                height: "2px",
                borderTop: "2px dashed rgba(0,78,133,0.12)",
                zIndex: 0,
              }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <div className="ms-step-num">{i + 1}</div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1d1b20", marginBottom: "10px" }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: "0.83rem", lineHeight: 1.7, color: "#414750" }}>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VERTICAL EXPERTISE ──────────────────────── */}
      <section style={{ padding: "96px 0" }}>
        <div className="ms-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div>
              <span className="ms-label" style={{ color: "#004e85", display: "block", marginBottom: "16px" }}>
                Industry Focus
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#1d1b20",
                  marginBottom: "20px",
                }}
              >
                Vertical Expertise
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#414750", marginBottom: "40px" }}>
                Tailored logistics frameworks for complex industries requiring specialized handling and strict compliance.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["E-Commerce", "Manufacturing", "Pharma", "Retail", "FMCG", "Automotive", "Textiles"].map((tag) => (
                  <span key={tag} className="ms-chip ms-chip-info">{tag}</span>
                ))}
              </div>
            </div>

            <div
              className="ms-glass ms-shadow"
              style={{
                borderRadius: "20px",
                padding: "48px",
                border: "1px solid rgba(0,78,133,0.05)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: "#1d1b20",
                  marginBottom: "12px",
                }}
              >
                Ready to architect your next shipment?
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#414750", marginBottom: "32px", lineHeight: 1.65 }}>
                Get an instant, no-obligation quote from our team.
              </p>
              <Link href="/contact" className="ms-btn ms-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Get an Instant Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
