/*
 * Navigation — SGR Design
 * Design: Architectural Noir — Cinematic Brutalist Luxury
 * Fixed top nav, transparent on hero, solid on scroll
 * Logo left, nav links right, hamburger on mobile
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/video-tours", label: "Video Tours" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <SGLogo className="h-10 w-10 lg:h-12 lg:w-12 transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:block">
              <div className="text-white/90 text-sm tracking-[0.3em] font-body leading-none" style={{ fontFamily: "var(--font-body)" }}>
                SGR DESIGN
              </div>
              <div className="text-white/50 text-[10px] tracking-[0.4em] mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                LTD.
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  location === link.href
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white/70 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0D1B2A]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`text-2xl tracking-[0.2em] uppercase transition-colors ${
                    location === link.href
                      ? "text-white"
                      : "text-white/40 hover:text-white/70"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/*
 * SG Monogram Logo — Interlocking squared spirals
 * Derived from pixel-grid analysis of the original business card.
 * ViewBox 300×300; each grid-unit = 10 px (30×30 logical grid).
 *
 * Shape S (lighter silver, front layer): top-left spiral
 * Shape G (darker silver, back layer): bottom-right spiral
 */
function SGLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sgFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="30%" stopColor="#AAAAAA" />
          <stop offset="55%" stopColor="#D4D4D4" />
          <stop offset="80%" stopColor="#A5A5A5" />
          <stop offset="100%" stopColor="#C0C0C0" />
        </linearGradient>
        <linearGradient id="sgBack" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B8B8B8" />
          <stop offset="30%" stopColor="#8A8A8A" />
          <stop offset="55%" stopColor="#BCBCBC" />
          <stop offset="80%" stopColor="#868686" />
          <stop offset="100%" stopColor="#A8A8A8" />
        </linearGradient>
      </defs>

      {/* Shape G — back layer (bottom-right spiral) */}
      <rect x="260" y="40" width="40" height="30" fill="url(#sgBack)" />
      <rect x="240" y="130" width="60" height="40" fill="url(#sgBack)" />
      <rect x="260" y="170" width="40" height="100" fill="url(#sgBack)" />
      <rect x="0" y="270" width="300" height="30" fill="url(#sgBack)" />
      <rect x="0" y="230" width="40" height="40" fill="url(#sgBack)" />
      <rect x="150" y="130" width="80" height="40" fill="url(#sgBack)" />
      <rect x="190" y="170" width="40" height="20" fill="url(#sgBack)" />
      <rect x="110" y="190" width="120" height="40" fill="url(#sgBack)" />

      {/* Shape S — front layer (top-left spiral) */}
      <rect x="0" y="0" width="300" height="40" fill="url(#sgFront)" />
      <rect x="0" y="40" width="40" height="90" fill="url(#sgFront)" />
      <rect x="0" y="130" width="60" height="40" fill="url(#sgFront)" />
      <rect x="70" y="70" width="160" height="40" fill="url(#sgFront)" />
      <rect x="70" y="110" width="40" height="120" fill="url(#sgFront)" />
    </svg>
  );
}

export { SGLogo };
