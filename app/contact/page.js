"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Share2, Globe, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main style={{ background: "#fef7ff", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HEADER ────────────────────────────────── */}
      <section style={{ paddingTop: "140px", paddingBottom: "48px", textAlign: "center" }}>
        <div className="ms-container">
          <h1
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 900,
              color: "#1d1b20",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            LET'S TALK{" "}
            <span style={{ color: "#004e85" }}>LOGISTICS.</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "#414750",
              opacity: 0.75,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Connecting your business to the world with precision and transparency.
            Reach out to our team of logistics architects today.
          </p>
        </div>
      </section>

      {/* ── MAIN GRID ─────────────────────────────── */}
      <section style={{ padding: "48px 0 96px" }}>
        <div className="ms-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "80px",
              alignItems: "flex-start",
            }}
          >
            {/* Left Panel */}
            <div>
              <span className="ms-label" style={{ color: "#990032", display: "block", marginBottom: "16px" }}>
                Get in Touch
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  fontWeight: 800,
                  color: "#1d1b20",
                  marginBottom: "48px",
                  lineHeight: 1.2,
                }}
              >
                Global Support,
                <br />
                Local Expertise.
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
                {[
                  { icon: <Phone size={18} />, label: "Call Us", value: "+1 (555) 892-0400" },
                  { icon: <Mail size={18} />, label: "Email Us", value: "solutions@maitiandsons.com" },
                  { icon: <MapPin size={18} />, label: "HQ Address", value: "422 Logistics Way, Suite 100\nChicago, IL 60601" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div className="ms-icon-box" style={{ width: "44px", height: "44px", borderRadius: "10px", marginBottom: 0, flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <span className="ms-label" style={{ display: "block", fontSize: "0.62rem", marginBottom: "5px" }}>
                        {item.label}
                      </span>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "#1d1b20",
                          whiteSpace: "pre-line",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(0,78,133,0.07)", paddingTop: "28px" }}>
                <span className="ms-label" style={{ display: "block", marginBottom: "10px" }}>Working Hours</span>
                <p style={{ fontSize: "0.875rem", color: "#414750", lineHeight: 1.8 }}>
                  Mon — Fri: 08:00 AM – 06:00 PM CST
                  <br />
                  Sat: 09:00 AM – 02:00 PM CST
                </p>
                <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                  {[<Share2 key="s" size={15} />, <Globe key="g" size={15} />, <Users key="u" size={15} />].map((icon, i) => (
                    <div
                      key={i}
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        border: "1px solid rgba(0,78,133,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#506072",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "52px 44px",
              }}
              className="ms-shadow"
            >
              <form onSubmit={(e) => e.preventDefault()}>
                {/* Row 1 */}
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "28px" }}
                >
                  <div>
                    <label htmlFor="name" className="ms-label" style={{ display: "block", marginBottom: "8px" }}>
                      Full Name <span style={{ color: "#990032" }}>*</span>
                    </label>
                    <input id="name" className="ms-input" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="ms-label" style={{ display: "block", marginBottom: "8px" }}>
                      Email Address <span style={{ color: "#990032" }}>*</span>
                    </label>
                    <input id="email" type="email" className="ms-input" placeholder="john@company.com" required />
                  </div>
                </div>

                {/* Row 2 */}
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "28px" }}
                >
                  <div>
                    <label htmlFor="phone" className="ms-label" style={{ display: "block", marginBottom: "8px" }}>
                      Phone Number
                    </label>
                    <input id="phone" className="ms-input" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label htmlFor="service" className="ms-label" style={{ display: "block", marginBottom: "8px" }}>
                      Service Type
                    </label>
                    <select
                      id="service"
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: "2px solid rgba(200, 198, 208, 0.5)",
                        padding: "10px 0",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.9rem",
                        color: "#1d1b20",
                        outline: "none",
                        appearance: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option>Freight Forwarding</option>
                      <option>Smart Warehousing</option>
                      <option>Customs Brokerage</option>
                      <option>Last-Mile Delivery</option>
                      <option>Supply Chain Audit</option>
                      <option>Urgent Dispatch</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "36px" }}>
                  <label htmlFor="message" className="ms-label" style={{ display: "block", marginBottom: "8px" }}>
                    Message <span style={{ color: "#990032" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    className="ms-input"
                    placeholder="How can we help your business move forward?"
                    rows={5}
                    required
                    style={{ resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="ms-btn ms-btn-primary"
                  style={{ width: "100%", padding: "16px", justifyContent: "center" }}
                >
                  Send Message <ArrowRight size={16} />
                </button>
                <p style={{ textAlign: "center", fontSize: "0.7rem", color: "#506072", marginTop: "16px", opacity: 0.6 }}>
                  We typically respond within 24 hours.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT ─────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #004e85 0%, #1a66a6 100%)",
          padding: "64px 0",
        }}
      >
        <div className="ms-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
            {[
              { icon: <Phone size={20} />, label: "Call Us", desc: "Direct line for urgent inquiries" },
              { icon: <Mail size={20} />, label: "Email Us", desc: "Detailed quote requests" },
              { icon: <Users size={20} />, label: "WhatsApp Us", desc: "Instant mobile support" },
            ].map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: "18px", alignItems: "center", color: "rgba(255,255,255,0.9)", cursor: "pointer" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "3px" }}>{item.label}</h4>
                  <p style={{ fontSize: "0.8rem", opacity: 0.55 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
