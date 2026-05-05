import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/utils/imageConstants";

const NAV = [
  { to: "/art-space", label: "Art Space" },
  { to: "/residency", label: "Residency" },
  { to: "/exchange", label: "Exchange" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 mt-4 sm:mt-6">
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between px-5 md:px-8 transition-all duration-300 rounded-[16px] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ${
            scrolled ? "bg-[#0f0f0f]/75 backdrop-blur-md py-2.5" : "bg-[#0f0f0f]/55 backdrop-blur-md py-4"
          }`}
        >
          <Link to="/" className="group flex items-baseline gap-2 z-50 relative" onClick={() => setOpen(false)}>
            <span className="font-serif text-2xl tracking-wide text-white">The Terrace</span>
            <span className="eyebrow hidden sm:inline text-white/80">Kilifi</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-white ${
                    isActive ? "text-white" : "text-white/75"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 w-1 h-1 -translate-x-1/2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6 ml-4">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center rounded-full bg-[#f5f5f0] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0f0f0f] hover:scale-105 transition-transform duration-300"
            >
              Apply
            </Link>
            <button aria-label="Cart" className="p-1 hover:opacity-70 transition-opacity invert">
              <img src={IMAGES.UI_CART.src} alt="Cart" className="w-5 h-5 object-contain" />
            </button>
          </div>

          <div className="flex items-center gap-4 lg:hidden z-50 relative">
            <button aria-label="Cart" className="p-1 hover:opacity-70 transition-opacity invert">
              <img src={IMAGES.UI_CART.src} alt="Cart" className="w-5 h-5 object-contain" />
            </button>
            <button
              aria-label="Toggle menu"
              className="p-1 text-white"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0f0f0f]/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center w-full max-w-sm px-6">
          <nav className="flex flex-col gap-8 w-full">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-serif text-3xl md:text-4xl transition-colors ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="w-12 h-[1px] bg-white/20 my-2" />

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="w-full inline-flex items-center justify-center rounded-full bg-[#f5f5f0] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0f0f0f] hover:scale-105 transition-transform duration-300"
          >
            Apply for Residency
          </Link>

          <div className="flex gap-4 mt-4">
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0f0f0f] transition-all">
              <Instagram size={18} />
            </a>
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0f0f0f] transition-all">
              <Facebook size={18} />
            </a>
            <a href={`mailto:${SITE.email}`} aria-label="Email"
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0f0f0f] transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
