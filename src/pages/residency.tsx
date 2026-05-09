import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Check, ArrowRight } from "lucide-react";
import { IMAGES } from "@/utils/imageConstants";
import { SITE } from "@/lib/site";

export default function ResidencyPage() {
  const PROFESSIONAL = [
    "5 private bedrooms with ensuite facilities",
    "Shared outdoor kitchen and communal dining spaces",
    "Traditional hut for reflection and gathering",
    "Private studios and creative work spaces",
    "Eco-conscious living and slow rhythms",
  ];

  const EMERGING = [
    "Mentorship from established artists and practitioners",
    "Skill development across mediums and methods",
    "Active community participation",
    "Music studio and creative production facilities",
    "Performance and screening spaces",
    "Collaboration opportunities and market access",
  ];

  return (
    <>
      {/* Cinematic Hero — full-bleed with ken-burns + dusk gradient overlay */}
      <section
        style={{ position: "relative", height: "100svh", minHeight: "600px", overflow: "hidden" }}
      >
        <img
          src={IMAGES.RES_HERO.src}
          srcSet={IMAGES.RES_HERO.srcSet}
          sizes="100vw"
          alt="Terrace Kilifi residency communal space with open-plan dining and tropical garden"
          className="ken-burns"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
          }}
          fetchPriority="high"
          loading="eager"
          decoding="sync"
        />
        {/* Dusk gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 20%, color-mix(in oklab, var(--charcoal) 55%, transparent) 100%)",
          }}
        />
        {/* Hero text */}
        <div
          className="container-editorial"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            paddingBottom: "clamp(3rem, 8vh, 6rem)",
          }}
        >
          <p className="eyebrow reveal" style={{ color: "oklch(0.92 0.028 75 / 0.7)" }}>
            The Residency
          </p>
          <h1
            className="font-serif reveal reveal-delay-1"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--ivory)",
              maxWidth: "14ch",
              marginTop: "1rem",
            }}
          >
            Reflect, Risk,&nbsp;and Listen.
          </h1>
          <p
            className="reveal reveal-delay-2"
            style={{
              marginTop: "1.5rem",
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "oklch(0.92 0.028 75 / 0.8)",
              maxWidth: "52ch",
            }}
          >
            Two distinct residencies — Professional and Emerging — held in a creekside setting
            designed for deep, generous work and creative growth.
          </p>
        </div>
      </section>

      {/* Overview Section — asymmetric pull-quote layout */}
      <section className="container-editorial py-24 md:py-32 grid md:grid-cols-12 gap-12 bg-grain">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Two paths</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
            One sanctuary. Two ways&nbsp;in.
          </h2>
        </Reveal>
        <Reveal delay={150} className="md:col-span-6 md:col-start-7 space-y-6">
          <p className="text-lg leading-relaxed text-foreground/80">
            The Terrace Residency holds space for both established and emerging voices. Each
            programme is shaped around the artist — their practice, their pace, their questions.
          </p>
          <div className="space-y-4 pt-4 border-t border-border/30">
            <div className="flex items-start gap-4">
              <div className="h-2 w-2 bg-primary rounded-full mt-3 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">Professional Residency</h4>
                <p className="text-sm text-foreground/65 mt-1">
                  For mid-career and established artists seeking deep creative reflection
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-2 w-2 bg-accent rounded-full mt-3 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">Emerging Residency</h4>
                <p className="text-sm text-foreground/65 mt-1">
                  For early-career artists with mentorship, community, and studio access
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Professional Residency */}
      <section className="bg-secondary/40 py-24 md:py-40">
        <div className="container-editorial grid md:grid-cols-12 gap-16 items-start">

          {/* Left — asymmetric image stack */}
          <Reveal className="md:col-span-6 md:sticky md:top-24">
            <div className="space-y-4">
              {/* Tall portrait hero image */}
              <div
                style={{ aspectRatio: "3/4", overflow: "hidden", borderRadius: "2px" }}
                className="shadow-deep"
              >
                <img
                  src={IMAGES.RES_PRO_MAIN.src}
                  srcSet={IMAGES.RES_PRO_MAIN.srcSet}
                  sizes="(max-width: 768px) 92vw, 45vw"
                  alt="Private bedroom with palm-filtered light and tropical garden view"
                  className="h-full w-full object-cover img-mask-in"
                  style={{ objectPosition: "center 30%" }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Accent strip — landscape pair */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: "2px" }}
                >
                  <img
                    src={IMAGES.FACILITY_SUNDECK.src}
                    srcSet={IMAGES.FACILITY_SUNDECK.srcSet}
                    sizes="(max-width: 768px) 45vw, 22vw"
                    alt="Terrace sundeck"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div
                  style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: "2px" }}
                >
                  <img
                    src={IMAGES.FACILITY_MANGROVE.src}
                    srcSet={IMAGES.FACILITY_MANGROVE.srcSet}
                    sizes="(max-width: 768px) 45vw, 22vw"
                    alt="Mangrove gardens"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — content */}
          <Reveal delay={150} className="md:col-span-6">
            <div className="sticky top-24">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 mb-8">
                <div className="h-2 w-2 bg-primary rounded-full mr-3" />
                <p className="text-sm uppercase tracking-widest text-primary font-medium">
                  Professional Residency
                </p>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-balance">
                Deep work. Open horizons.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-foreground/80">
                The Terrace Professional Residency is an artist-run residency space founded and
                operated by African Women Artists. A quiet container for ambitious projects —
                interdisciplinary, intentional, and rooted in place.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                For mid-career and established artists across disciplines seeking time for deep
                creative reflection and experimentation. We provide the silence and the space; you
                provide the vision.
              </p>

              <div className="mt-10 p-8 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
                <p className="uppercase text-xs tracking-widest text-primary font-semibold">
                  Duration
                </p>
                <p className="mt-3 text-foreground/75 leading-relaxed">
                  Stays are flexible and tailored to your creative needs — from one week to three
                  months. We work with each artist to design a residency that supports their
                  practice.
                </p>
              </div>

              <ul className="mt-12 space-y-3 border-t border-border/30 pt-8">
                {PROFESSIONAL.map((item) => (
                  <li key={item} className="flex gap-4 text-foreground/85 text-sm md:text-base">
                    <Check size={20} className="mt-0.5 text-primary shrink-0 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${SITE.email}?subject=Professional Residency Application`}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-primary hover:shadow-deep transition-all duration-500 shadow-lg group"
              >
                Apply Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cinematic divider — full-bleed guitar image */}
      <div style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <img
          src={IMAGES.RES_COLLAB.src}
          srcSet={IMAGES.RES_COLLAB.srcSet}
          sizes="100vw"
          alt="Musician playing guitar at the Terrace Kilifi"
          className="ken-burns"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 55%",
          }}
          loading="lazy"
          decoding="async"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, color-mix(in oklab, var(--charcoal) 60%, transparent) 0%, transparent 60%)",
          }}
        />
        <div
          className="container-editorial"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Reveal>
            <blockquote
              className="font-serif"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
                color: "var(--ivory)",
                maxWidth: "22ch",
                lineHeight: 1.15,
                fontStyle: "italic",
              }}
            >
              "A space where sound, silence, and story find their rhythm."
            </blockquote>
          </Reveal>
        </div>
      </div>

      {/* Emerging Residency */}
      <section className="py-24 md:py-40 bg-grain">
        <div className="container-editorial grid md:grid-cols-12 gap-16 items-start">

          {/* Left — content */}
          <Reveal className="md:col-span-6 order-2 md:order-1">
            <div className="sticky top-24">
              <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 mb-8">
                <div className="h-2 w-2 bg-accent rounded-full mr-3" />
                <p className="text-sm uppercase tracking-widest text-accent font-medium">
                  Emerging Residency
                </p>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-balance">
                Mentorship, momentum, community.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-foreground/80">
                The Terrace Residency is a creative hub for emerging artists — featuring a
                co-working studio, performance deck, and sound recording studio.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                For early-career artists, particularly from coastal Kenya and the wider region. The
                Emerging Residency pairs studio time with mentorship, mentorship with community,
                and community with the skills to sustain a practice.
              </p>

              <div className="mt-10 p-8 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
                <p className="uppercase text-xs tracking-widest text-accent font-semibold">
                  Sanara Program
                </p>
                <p className="mt-3 text-foreground/75 leading-relaxed">
                  The Terrace hosts Mastercard's Sanara Program, a community music studio and
                  mentorship initiative providing emerging musicians and audio producers access to
                  professional recording equipment and training.
                </p>
              </div>

              <ul className="mt-12 space-y-3 border-t border-border/30 pt-8">
                {EMERGING.map((item) => (
                  <li key={item} className="flex gap-4 text-foreground/85 text-sm md:text-base">
                    <Check size={20} className="mt-0.5 text-accent shrink-0 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${SITE.email}?subject=Emerging Residency Application`}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-accent hover:shadow-deep transition-all duration-500 shadow-lg group"
              >
                Apply Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>

          {/* Right — asymmetric image stack (mirrored) */}
          <Reveal delay={150} className="md:col-span-6 order-1 md:order-2 md:sticky md:top-24">
            <div className="space-y-4">
              {/* Tall portrait hero */}
              <div
                style={{ aspectRatio: "3/4", overflow: "hidden", borderRadius: "2px" }}
                className="shadow-deep"
              >
                <img
                  src={IMAGES.RES_EMERGING_MAIN.src}
                  srcSet={IMAGES.RES_EMERGING_MAIN.srcSet}
                  sizes="(max-width: 768px) 92vw, 45vw"
                  alt="Emerging artist working at a laptop in the studio hut"
                  className="h-full w-full object-cover img-mask-in"
                  style={{ objectPosition: "center 20%" }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Accent strip */}
              <div className="grid grid-cols-2 gap-4">
                <div style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: "2px" }}>
                  <img
                    src={IMAGES.RES_TERRACE_WORK.src}
                    srcSet={IMAGES.RES_TERRACE_WORK.srcSet}
                    sizes="(max-width: 768px) 45vw, 22vw"
                    alt="Two creatives collaborating on the terrace"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center 30%" }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: "2px" }}>
                  <img
                    src={IMAGES.ART_SPACE_EVENTS.src}
                    srcSet={IMAGES.ART_SPACE_EVENTS.srcSet}
                    sizes="(max-width: 768px) 45vw, 22vw"
                    alt="Community gathering at the art space"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-foreground text-background py-24 md:py-32">
        <div className="container-editorial text-center">
          <Reveal>
            <p className="eyebrow text-background/70">Next steps</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Ready to deepen your practice?
            </h2>
            <p className="mt-6 text-lg text-background/80 leading-relaxed max-w-2xl mx-auto">
              Whether you're seeking professional retreat space or mentorship and community, The
              Terrace is here to support your creative work.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`mailto:${SITE.email}?subject=Residency Inquiry`}
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-colors duration-500 shadow-lg"
            >
              Get In Touch
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 text-background px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-background/10 transition-colors duration-500"
            >
              Back Home
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
