/*
 * Footer — SGR Design
 * Design: Architectural Noir
 * Dark, minimal footer with brand info, nav links, contact, and social
 */
import { Link } from "wouter";
import { SGLogo } from "./Navigation";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060E18] border-t border-white/5">
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <SGLogo className="h-10 w-10" />
              <div>
                <div className="text-white/80 text-sm tracking-[0.25em]" style={{ fontFamily: "var(--font-body)" }}>
                  SGR DESIGN
                </div>
                <div className="text-white/40 text-[10px] tracking-[0.35em]" style={{ fontFamily: "var(--font-body)" }}>
                  LTD.
                </div>
              </div>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-body)" }}>
              Residential design grounded in construction experience. Custom homes and multi-family projects across British Columbia and internationally.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/50 text-[11px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/video-tours", label: "Video Tours" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/30 hover:text-white/60 text-sm transition-colors duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/50 text-[11px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a href="tel:250-954-7347" className="flex items-center gap-3 text-white/30 hover:text-white/60 text-sm transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                <Phone size={14} className="shrink-0" />
                250-954-7347
              </a>
              <a href="mailto:sylvain@sgrdesign.ca" className="flex items-center gap-3 text-white/30 hover:text-white/60 text-sm transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                <Mail size={14} className="shrink-0" />
                sylvain@sgrdesign.ca
              </a>
              <div className="flex items-start gap-3 text-white/30 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>Nanoose Bay, BC<br />British Columbia</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white/50 text-[11px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Follow
            </h4>
            <a
              href="https://www.instagram.com/sylvain_giroux_designs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/30 hover:text-white/60 text-sm transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Instagram size={16} />
              @sylvain_giroux_designs
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 my-12" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
            &copy; {new Date().getFullYear()} SGR Design Ltd. All rights reserved.
          </p>
          <p className="text-white/15 text-xs tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
            Based in Nanoose Bay, BC &middot; Serving clients across British Columbia and internationally
          </p>
        </div>
      </div>
    </footer>
  );
}
