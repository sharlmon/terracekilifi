import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/utils/imageConstants";

const NAV = [
  { to: "/art-space", label: "ART SPACE" },
  { to: "/residency/emerging", label: "EMERGING RESIDENCY" },
  { to: "/residency/professional", label: "PROFESSIONAL RESIDENCY" },
  { to: "/exchange", label: "THE COLLECTIVE" },
  { to: "/team", label: "TEAM" },
  { to: "/contact", label: "CONTACT US" },
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
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 px-4 sm:px-6 md:px-8 mt-4 sm:mt-6">
        <div
          className={`mx-auto max-w-[1800px] flex items-center justify-between px-6 md:px-10 transition-all duration-500 rounded-[16px] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ${
            scrolled ? "bg-black py-3.5" : "bg-black py-5"
          }`}
        >
          <Link
            to="/"
            className="group flex items-center z-50 relative"
            onClick={() => setOpen(false)}
          >
            <img
              src={IMAGES.LOGO_MAIN.src}
              alt="The Terrace Logo"
              width={128}
              height={128}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-700 group-hover:scale-[1.03] mix-blend-screen drop-shadow-[0_0_12px_rgba(96,165,250,0.4)]"
              loading="eager"
              decoding="sync"
            />
          </Link>

          <nav className="hidden lg:flex flex-1 justify-end items-center gap-6 xl:gap-10 2xl:gap-14 mx-8">
            {NAV.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-[10px] xl:text-[12px] font-medium tracking-[0.18em] whitespace-nowrap uppercase transition-all duration-500 hover:-translate-y-0.5 hover:text-white drop-shadow-[0_0_8px_rgba(96,165,250,0.3)] ${
                    isActive ? "text-white" : "text-white/80"
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

          <div className="hidden lg:flex items-center ml-4 xl:ml-8">
            <a
              href={`mailto:${SITE.email}?subject=Residency Application`}
              className="inline-flex justify-center items-center rounded-full bg-[#f5f5f0] px-8 py-3.5 text-[11px] xl:text-xs font-bold uppercase tracking-[0.25em] text-[#0f0f0f] hover:scale-105 hover:bg-white transition-all duration-500 shadow-[0_0_15px_rgba(96,165,250,0.4)]"
            >
              Apply
            </a>
          </div>

          <div className="flex items-center lg:hidden z-50 relative">
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

          <a
            href={`mailto:${SITE.email}?subject=Residency Application`}
            onClick={() => setOpen(false)}
            className="w-full inline-flex items-center justify-center rounded-full bg-[#f5f5f0] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0f0f0f] hover:scale-105 transition-transform duration-300"
          >
            Apply for Residency
          </a>

          <div className="flex gap-4 mt-4">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0f0f0f] transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0f0f0f] transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0f0f0f] transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
