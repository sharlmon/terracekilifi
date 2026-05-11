import { Link } from "react-router-dom";
import { ArrowUpRight, Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Team } from "@/components/site/Team";
import { IMAGES } from "@/utils/imageConstants";

export default HomePage;

const PILLARS = [
  {
    label: "01 — Art Space",
    title: "A platform for community voice",
    body: "Exhibitions, performances, screenings, workshops and talks that connect, inspire and amplify.",
    image: IMAGES.ART_SPACE_PILLAR.src,
    href: "/art-space" as const,
  },
  {
    label: "02 — Residency",
    title: "Time, space and the creek",
    body: "Professional and emerging residencies set in creekside seclusion. From a week to three months.",
    image: IMAGES.RESIDENCY_PILLAR.src,
    href: "/residency" as const,
  },
  {
    label: "03 — Artists' Exchange",
    title: "A bridge between cultures",
    body: "Cross-cultural dialogue, knowledge exchange and collaborative creation across disciplines.",
    image: IMAGES.EXCHANGE_PILLAR.src,
    href: "/exchange" as const,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The Terrace is rare — a place where the rhythm of the creek shapes the work, and the work in turn shapes a community.",
    name: "Jackie Lebo",
    role: "Writer & Filmmaker",
  },
  {
    quote:
      "An honest, generous space. The kind of residency that quietly changes how you see your own practice.",
    name: "Visiting Artist",
    role: "Professional Residency, 2025",
  },
  {
    quote:
      "Mentorship here isn't a programme — it's a way of being together. I left with skills, friends, and a body of work.",
    name: "Emerging Resident",
    role: "Kilifi, 2025",
  },
];

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={IMAGES.ART_SPACE_HERO.src}
          srcSet={IMAGES.ART_SPACE_HERO.srcSet}
          alt="Art space at The Terrace Kilifi"
          className="absolute inset-0 h-full w-full object-cover ken-burns img-mask-in"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,0.1)]" />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 text-white max-w-[760px]">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-white/70 font-medium reveal">
            Artist-led sanctuary
          </p>
          <h1 className="reveal reveal-delay-1 mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            On the East African Coast
          </h1>
          <div className="reveal reveal-delay-2 mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link
              to="/residency"
              className="inline-flex justify-center items-center rounded-full bg-[#f5f5f0] text-charcoal px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              Apply for Residency
            </Link>
            <Link
              to="/art-space"
              className="inline-flex justify-center items-center rounded-full border border-white/40 bg-white/5 text-white backdrop-blur-sm px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-charcoal hover:border-white transition-all duration-300"
            >
              Explore the art space
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO / STORY */}
      <section id="intro" className="relative container-editorial py-28 md:py-40 bg-grain">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">A creekside ethos</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Independent. Artist-led. Rooted in place.
            </h2>
          </Reveal>
          <Reveal
            delay={150}
            className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-foreground/80"
          >
            <p>
              The Terrace is an artist-led, independent arts space and residency created to provide
              a focused environment for reflection and creation. It offers respite from
              the everyday challenges of creative careers, supporting artistic exploration.
            </p>
            <p>
              Guided by the Sawazisha (Equalize) approach, we support
              multidisciplinary artists through training, career development, and community-driven
              projects, including Sawazisha Sinema (Film) and Sawazisha Sekta (Music &amp; Fashion).
            </p>
            <p>
              Founded to decentralize the arts from major urban centers, The Terrace operates
              through three interconnected initiatives along Kilifi Creek:
            </p>
            <ul className="space-y-1 pl-4 list-none text-foreground/90 font-medium">
              <li>• The Terrace Art Space</li>
              <li>• The Terrace Residency</li>
              <li>• The Terrace Artists&apos; Exchange</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="bg-secondary/40 py-28 md:py-40">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Three pillars</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.02] max-w-3xl text-balance">
              One ecosystem of art, residency and exchange.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <Link to={p.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 text-ivory eyebrow opacity-90">
                      {p.label}
                    </div>
                    <div className="absolute bottom-5 right-5 rounded-full bg-ivory/95 p-3 text-charcoal opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <h3 className="mt-7 font-serif text-2xl md:text-3xl leading-tight">{p.title}</h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed">{p.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section id="place" className="container-editorial py-28 md:py-40 bg-grain">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal className="md:col-span-6 order-2 md:order-1">
            <p className="eyebrow">The place</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Where the mangroves meet the morning tide.
            </h2>
            <div className="mt-7 space-y-5 text-foreground/80 leading-relaxed max-w-xl">
              <p>
                Kilifi Creek is a slow, generous landscape — silver water at dawn, mangrove forests
                stitched with dhows, the call of birds at dusk. It shapes the way we work and the
                way we host.
              </p>
              <p>
                Our spaces are designed for conversation and quiet alike: open studios, a screening
                room, a music studio, a kitchen that becomes a gathering place.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-foreground link-underline"
            >
              Read our story
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={200} className="md:col-span-6 order-1 md:order-2">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={IMAGES.FACILITY_MANGROVE.src}
                  alt="Mangrove roots in still water"
                  className="h-full w-full object-cover img-mask-in"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 aspect-square overflow-hidden rounded-sm border-8 border-background hidden md:block float-slow shadow-xl">
                <img
                  src={IMAGES.FACILITY_SUNDECK.src}
                  alt="Sundeck"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section id="testimonials" className="bg-charcoal text-ivory py-28 md:py-40">
        <div className="container-editorial">
          <Reveal>
            <Quote className="text-clay" size={36} />
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 150}
                className="bg-ivory/5 p-8 rounded-lg border border-ivory/10 hover:bg-ivory/10 transition-colors duration-500"
              >
                <Quote className="text-clay mb-6 opacity-40" size={24} />
                <blockquote className="font-serif text-xl md:text-2xl leading-[1.3] text-ivory/95 text-pretty italic">
                  "{t.quote}"
                </blockquote>
                <footer className="mt-8 pt-6 border-t border-ivory/10">
                  <p className="text-sm font-medium tracking-wide">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40 mt-1">
                    {t.role}
                  </p>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <Team />

      {/* PROGRAMS PREVIEW */}
      <section id="programs" className="container-editorial py-28 md:py-40 bg-grain">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <Reveal>
            <p className="eyebrow">Programmes & opportunities</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Apply, propose, participate.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/contact" className="text-sm font-medium link-underline">
              View all open calls →
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3 border border-border">
          {[
            {
              tag: "Open call",
              title: "Professional Residency · Spring 2026",
              body: "8 fellowships for mid-career artists across disciplines. Stays from one week to three months.",
            },
            {
              tag: "Now accepting",
              title: "Emerging Residency · Cohort 04",
              body: "Mentorship, studio time, and community participation for early-career Kenyan artists.",
            },
            {
              tag: "Proposal",
              title: "Exhibitions & Public Programmes",
              body: "Curators, performers, and collectives invited to propose exhibitions and live events.",
            },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="bg-background p-10 group">
              <p className="eyebrow text-primary">{p.tag}</p>
              <h3 className="mt-6 font-serif text-2xl leading-tight">{p.title}</h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">{p.body}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium link-underline">
                Learn more <ArrowUpRight size={14} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-32 md:py-44 overflow-hidden">
        <img
          src={IMAGES.HERO_SUNSET.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover img-mask-in"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative container-editorial text-center text-ivory">
          <Reveal>
            <p className="eyebrow text-ivory/70">An invitation</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl mx-auto text-balance">
              Ready to create with us?
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-xl md:text-2xl text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              A space to express freely, exchange ideas, and connect. We bring together emerging and established voices seeking the time and support to develop their creative projects.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-ivory px-8 py-4 text-xs uppercase tracking-[0.22em] text-charcoal hover:bg-clay transition-colors duration-500 shadow-lg"
              >
                Collaborate With Us <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/residency"
                className="inline-flex items-center gap-3 px-2 py-4 text-xs uppercase tracking-[0.22em] text-ivory link-underline"
              >
                Join the Community
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
