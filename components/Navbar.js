"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="ms-navbar">
        <div className="ms-navbar-inner">
          {/* Logo */}
          <Link href="/" className="ms-navbar-logo">
            Maiti{" "}
            <span style={{ color: "#1a66a6", opacity: 0.85 }}>& Sons</span>
          </Link>

          {/* Desktop Links */}
          <ul className="ms-navbar-links">
            {links.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="ms-btn ms-btn-primary ms-navbar-quote-desktop"
            style={{ padding: "10px 22px", fontSize: "0.75rem" }}
          >
            Get a Quote
          </Link>

          {/* Mobile Toggle */}
          <button
            className="ms-mobile-btn"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`ms-mobile-menu${isOpen ? " open" : ""}`}>
        {links.map((l) => (
          <Link key={l.label} href={l.href} onClick={() => setIsOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="ms-btn ms-btn-primary"
          style={{ marginTop: "8px", justifyContent: "center" }}
          onClick={() => setIsOpen(false)}
        >
          Get a Quote
        </Link>
      </div>
    </>
  );
}
