import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ms-footer">
      <div className="ms-container">
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "60px",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2px",
                marginBottom: "18px",
              }}
            >
              <span style={{ fontSize: "1.7rem", fontWeight: 900, lineHeight: 1, color: "#fff", letterSpacing: "-0.04em" }}>MSE</span>
              <span style={{ fontSize: "0.55rem", fontWeight: 800, letterSpacing: "0.1em", color: "rgba(255,255,255,0.6)" }}>
                MAITI & SONS LOGISTICS
              </span>
            </Link>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "rgba(255,255,255,0.36)", maxWidth: "220px" }}>
              Architecting the future of logistics through precision, transparency, and kinetic movement.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="ms-footer-col-title">Company</p>
            <Link href="/about" className="ms-footer-link">About Us</Link>
            <Link href="/services" className="ms-footer-link">Services</Link>
            <Link href="/contact" className="ms-footer-link">Contact</Link>
            <Link href="#" className="ms-footer-link">Sustainability</Link>
          </div>

          {/* Services */}
          <div>
            <p className="ms-footer-col-title">Services</p>
            <Link href="/services" className="ms-footer-link">Freight Forwarding</Link>
            <Link href="/services" className="ms-footer-link">Warehousing</Link>
            <Link href="/services" className="ms-footer-link">Customs Brokerage</Link>
            <Link href="/services" className="ms-footer-link">Supply Chain Audit</Link>
          </div>

          {/* Legal */}
          <div>
            <p className="ms-footer-col-title">Legal & Support</p>
            <Link href="#" className="ms-footer-link">Privacy Policy</Link>
            <Link href="#" className="ms-footer-link">Terms of Service</Link>
            <Link href="#" className="ms-footer-link">Career Portal</Link>
            <Link href="#" className="ms-footer-link">Track Shipment</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.22)" }}>
            © {year} Maiti & Sons Logistics. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["LinkedIn", "Twitter", "Facebook"].map((s) => (
              <Link
                key={s}
                href="#"
                style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.28)", textDecoration: "none" }}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
