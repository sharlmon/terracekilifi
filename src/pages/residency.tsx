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
        </div>
      </section>

      {/* Professional Residency Section - Narrative Editorial Redesign */}
      <section className="bg-background pt-32 pb-20 overflow-hidden relative">
        <div className="container-editorial">
          {/* Section 1: Intro Block - Layered Editorial */}
          <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-end mb-32 md:mb-48">
            <Reveal className="md:col-span-7">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 mb-10">
                <div className="h-2 w-2 bg-primary rounded-full mr-3" />
                <p className="text-sm uppercase tracking-widest text-primary font-medium">
                  Professional Residency
                </p>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-balance mb-12 drop-shadow-[0_0_30px_rgba(96,165,250,0.3)]">
                Professional Residency: Uninterrupted Mastery
              </h2>
              <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-foreground/90 max-w-2xl font-light">
                <p>
                  The Terrace Professional Residency is an artist-run residency space on the Kenyan
                  coast, created to support time for reflection, creation, experimentation and
                  creative exchange. The program welcomes multi-sectoral and interdisciplinary
                  artists, working either individually or collaboratively.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200} className="md:col-span-5 relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={IMAGES.RES_PRO_MAIN.src}
                  srcSet={IMAGES.RES_PRO_MAIN.srcSet}
                  alt="Artist residence view"
                  className="h-full w-full object-cover img-mask-in"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 aspect-square overflow-hidden rounded-sm border-8 border-background hidden lg:block shadow-2xl float-slow">
                <img
                  src={IMAGES.FACILITY_MANGROVE.src}
                  alt="Mangrove detail"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Section 2: Environment & Pace - Alternating Block */}
          <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center mb-32 md:mb-48">
            <Reveal className="md:col-span-5 order-2 md:order-1">
              <div className="aspect-square overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={IMAGES.RES_TERRACE_WORK.src}
                  srcSet={IMAGES.RES_TERRACE_WORK.srcSet}
                  alt="Creative work on the terrace"
                  className="h-full w-full object-cover img-mask-in"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={150} className="md:col-span-6 md:col-start-7 order-1 md:order-2">
              <div className="space-y-10">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
                  The residency sits quietly overlooking the mangrove forests and tidal waters of
                  Kilifi Creek, offering artists a peaceful environment away from urban distractions
                  - a place where ideas can unfold slowly and work can deepen.
                </p>
                <div className="pt-10 border-t border-border/40">
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
                    Founded and operated by African Women Artists, the Terrace is part of a growing
                    independent cultural ecosystem in Kilifi dedicated to nurturing artistic
                    practice while remaining deeply connected to place and community.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Section 3: Featured Editorial Chapter - Large Typography */}
          <div className="py-24 md:py-40 bg-grain/50 -mx-6 md:-mx-20 px-6 md:px-20 mb-32 md:mb-48">
            <div className="max-w-4xl mx-auto text-center space-y-16">
              <Reveal>
                <h3 className="font-serif text-4xl md:text-6xl leading-tight text-pretty drop-shadow-[0_0_25px_rgba(96,165,250,0.25)]">
                  "The Terrace works in dialogue with our sister venue, The Terrace Arts Space, hosting performances, exhibitions, screenings and music production."
                </h3>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-12 text-left items-start mt-20">
                <Reveal delay={100}>
                  <p className="text-lg leading-relaxed text-foreground/80">
                    The Terrace Residency offers a rare balance of focused solitude and meaningful
                    exchange. Residents develop their work alongside a community of artists and
                    cultural practitioners, with space for informal dialogue, shared meals and
                    organic collaboration.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <p className="text-lg leading-relaxed text-foreground/80 italic font-serif">
                    Many use the time to slow down, reconnect with their practice and pursue ideas
                    that need depth and duration. Daily life is unhurried - walking, swimming, and
                    time on The Terrace often shape the creative process.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Section 4: Programs & Context */}
          <div className="grid md:grid-cols-12 gap-12 md:gap-20 mb-32 md:mb-48">
            <Reveal className="md:col-span-6">
              <div className="space-y-8">
                <p className="eyebrow">Disciplines</p>
                <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">
                  The program welcomes cross-disciplinary work spanning visual art, writing, film,
                  sound, performance, research, craft, design and socially engaged practices.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150} className="md:col-span-5 md:col-start-8">
              <div className="space-y-8">
                <p className="eyebrow">Location & Sustainability</p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Located about 35 minutes from Kilifi town, it offers both seclusion and access to
                  a vibrant local cultural scene. The residency operates with an eco-conscious
                  approach, in collaboration with a local mangrove conservation group.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Section 5: Living & Working - Hospitalty Layout */}
          <div className="mb-32 md:mb-48">
            <Reveal className="mb-16">
              <h3 className="font-serif text-4xl md:text-5xl">Living & Working</h3>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-12 md:gap-1px bg-border border border-border">
              <div className="bg-background p-10 md:p-16 space-y-10">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">
                    The Atmosphere
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Residents stay in private rooms within the Residency Premises, many with views
                    of the creek and mangrove forest. The residency hosts a small number of artists
                    at a time, creating a calm and supportive living environment.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    "5 Private bedrooms with ensuite facilities",
                    "Quiet indoor and outdoor nooks for reading",
                    "Rooftop, terraces and shaded outdoor areas",
                    "Informal meeting and collaboration areas",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-foreground/75">
                      <div className="h-1 w-1 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background p-10 md:p-16 space-y-10">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">
                    Workspace & Collaboration
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    It offers flexible creative workspaces suited to a wide range of practices.
                    Residents also have access to a workspace and a music studio at our sister
                    venue, The Terrace Arts Space.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Traditional hut ideal for edit/design suite",
                    "Access to professional music studio",
                    "Shared outdoor kitchen and dining",
                    "Creekside sundecks and gathering places",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-foreground/75">
                      <div className="h-1 w-1 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6: Duration & Call to Action */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <Reveal className="md:col-span-6">
              <div className="p-10 md:p-16 bg-secondary/30 rounded-sm border border-border/50">
                <p className="eyebrow mb-8">Duration</p>
                <div className="space-y-8">
                  <div>
                    <p className="text-2xl font-serif mb-2">One week to 3 months</p>
                    <p className="text-foreground/70 leading-relaxed">
                      Residencies typically range from one week deep dive up to 3 months. While
                      shorter stays are possible, we recommend 4–8 weeks or longer.
                    </p>
                  </div>
                  <div className="pt-8 border-t border-border/20">
                    <p className="text-lg font-medium mb-2">Collaborative Project Sessions</p>
                    <p className="text-foreground/70 leading-relaxed">
                      We also tailor residencies for groups of collaborators working on specific
                      projects requiring a quick turnaround - usually intensive one-week sessions.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200} className="md:col-span-5 md:col-start-8 text-center md:text-left">
              <div className="space-y-10">
                <h4 className="font-serif text-3xl md:text-4xl leading-tight">
                  Ready to Pursue Your Ideas in Kilifi?
                </h4>
                <a
                  href={`mailto:${SITE.email}?subject=Professional Residency Application`}
                  className="inline-flex items-center gap-4 rounded-full bg-foreground px-10 py-5 text-xs uppercase tracking-[0.25em] text-background hover:bg-primary hover:shadow-deep transition-all duration-500 shadow-lg group"
                >
                  Apply Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-foreground/50 tracking-wide uppercase">
                  Currently accepting applications for Spring 2026
                </p>
              </div>
            </Reveal>
          </div>
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

      {/* Emerging Residency - Vibrant Collaborative Hub */}
      <section className="py-24 md:py-40 bg-secondary/15 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent/5 blur-[120px] rounded-full" />
        <div className="container-editorial grid md:grid-cols-12 gap-16 items-start relative z-10">

          {/* Left — content */}
          <Reveal className="md:col-span-6 order-2 md:order-1">
            <div className="sticky top-24">
              <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 mb-8">
                <div className="h-2 w-2 bg-accent rounded-full mr-3" />
                <p className="text-sm uppercase tracking-widest text-accent font-medium">
                  Emerging Residency
                </p>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-balance drop-shadow-[0_0_20px_rgba(96,165,250,0.25)]">
                Emerging Residency: Cultivate Your Voice
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/80 max-w-xl">
                <p>
                  The Terrace Emerging Residency is a hub designed for artistic exploration, mentorship, and community. Nestled along Kilifi Creek, it provides accessible infrastructure for local talent.
                </p>
                <p>
                  The grounds feature a co-working studio, a performance deck, an outdoor screening venue, a sound recording studio, and a lively bar and restaurant—creating a vibrant fusion of art, culture, and practical collaboration.
                </p>
              </div>

              <div className="mt-10 p-8 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
                <p className="uppercase text-xs tracking-widest text-accent font-semibold">
                  Sanara Program
                </p>
                <div className="mt-3 text-foreground/75 leading-relaxed space-y-4">
                  <p>
                    With the support of Mastercard&apos;s Sanara Program, The Terrace operates a community music studio offering direct mentorship, technical training, and performance opportunities.
                  </p>
                  <p>
                    Artists are supported in refining their skills, accessing markets, and building sustainable networks for growth.
                  </p>
                </div>
              </div>

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
