import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/utils/imageConstants";

// --- EXISTING ASSET IMPORTS ---
import collectiveSectionImg from "@/assets/images/collectivesection.jpg";
import pillarsImage from "@/assets/images/pillarsimage.jpeg"; 

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
    label: "03 — The Collective", 
    title: "A bridge between cultures",
    body: "Cross-cultural dialogue, knowledge exchange and collaborative creation across disciplines.",
    image: pillarsImage, 
    href: "/collaborative-projects" as const,
  },
];

// --- TESTIMONIALS WITH STRICTLY RELATIVE PATHS ---
const TESTIMONIALS = [
  {
    quote: "This is the perfect embodiment of a space that allows collaboration within us Black African Women. I can’t wait to see what we create together.",
    name: "MUTHONI DRUMMER QUEEN",
    role: "Musician & Founder Blankets & Wine Festival",
    imagePath: "assets/images/placeholder1.jpg",
  },
  {
    quote: "I like how everytime I come here it enables me to forget all my troubles and opens me up to new ways of being, new ways to view my projects. I get unstuck and the interactions I get makes me have a new perspective to viewing life.",
    name: "JACKIE LEBO",
    role: "Filmmaker & Cultural Enthusiast",
    imagePath: "assets/images/placeholder2.jpeg",
  },
  {
    quote: "It was magical waking up to the epic view of the mangroves and the creek. It was the perfect, serene environment to be with my team, and just focus on producing my third album. It’s my best hideout ever!",
    name: "POLYCARP 'FANCY FINGERS' OTIENO",
    role: "Grammy Winning Musician, Producer & Songwriter",
    imagePath: "assets/images/placeholder3.jpg",
  },
  {
    quote: "It’s just great to have spaces for not only black people, but also queer friendly that allows us to be and create. That was always hard to find in Kilifi.",
    name: "KEVIN MWACHIRO",
    role: "Award Winning Writer & Podcaster",
    imagePath: "assets/images/placeholder4.jpg",
  },
];

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={IMAGES.ART_SPACE_HERO.src}
          srcSet={IMAGES.ART_SPACE_HERO.srcSet}
          alt="Art space at The Terrace Kilifi"
          width={2500}
          height={1667}
          className="absolute inset-0 h-full w-full object-cover ken-burns img-mask-in"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,0.1)]" />

        <div className="relative z-10 h-full flex items-start justify-center px-6 md:px-20 text-white pt-32 md:pt-40">
          <div className="text-center max-w-3xl">
            <p className="uppercase tracking-widest text-sm md:text-base text-white/80 font-medium reveal">
              The Terrace Kilifi
            </p>
            
            <h1 className="reveal reveal-delay-1 mt-6 font-serif text-4xl md:text-5xl lg:text-5xl leading-[1.1] tracking-tight">
              An Artist-led Sanctuary<br />
              on the East African Coast
            </h1>
            
            <p className="reveal reveal-delay-2 mt-8 uppercase tracking-widest text-sm md:text-base font-bold text-white">
              ART. SPACE. COMMUNITY.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO / STORY */}
      <section id="intro" className="relative container-editorial py-28 md:py-40 bg-grain">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">The Terrace Kilifi</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Nestled along the Creek.
            </h2>
            
            <div className="mt-10 overflow-hidden rounded-sm shadow-sm">
              <img 
                src={collectiveSectionImg} 
                alt="The Collective at Terrace Kilifi" 
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
          
          <Reveal
            delay={150}
            className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-foreground/80"
          >
            <p>
              The Terrace is an artist-led, independent arts space and residency created to provide
              a focused environment for reflection and creation. It offers respite from the everyday
              challenges of creative careers, supporting artistic exploration.
            </p>
            <p>
              Guided by the Sawazisha (Equalize) approach, we support multidisciplinary artists
              through training, career development, and community-driven projects, including
              Sawazisha Sinema (Film) and Sawazisha Sekta (Music &amp; Fashion).
            </p>
            <p>
              Founded to decentralize the arts from major urban centers, The Terrace operates
              through three interconnected initiatives along Kilifi Creek:
            </p>
            <ul className="space-y-1 pl-4 list-none text-foreground/90 font-medium">
              <li>• The Terrace Art Space</li>
              <li>• The Terrace Residency</li>
              <li>• The Collective</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="bg-secondary/40 py-28 md:py-40">
        <div className="container-editorial">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.02] text-balance uppercase tracking-wide">
              THREE PILLARS
            </h2>
            <p className="mt-4 text-xl md:text-2xl text-foreground/70 font-medium tracking-wide">
              Create — Retreat — Exchange
            </p>
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
                      width={1200}
                      height={1500}
                      decoding="async"
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

      {/* TESTIMONIAL CAROUSEL SECTION */}
      <section id="testimonials" className="py-28 md:py-40 bg-grain border-t border-border/60 relative overflow-hidden select-none">
        <div className="container-editorial">
          
          <Reveal className="mb-16">
            <p className="eyebrow">Voices from the creek</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] uppercase tracking-wide text-foreground">
              What Our Artists Say
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
            
            {/* Left Column: Testimonial Interface */}
            <div className="md:col-span-7 flex flex-col justify-between min-h-[320px]">
              <div className="space-y-8">
                <span className="font-serif text-6xl text-primary/30 block -mb-4">“</span>
                
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90 text-balance italic transition-all duration-500">
                  {TESTIMONIALS[activeIndex].quote}
                </p>
                
                <div className="pt-6 border-t border-border/40 space-y-1">
                  <h4 className="text-sm font-bold tracking-[0.15em] text-foreground uppercase">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <p className="text-xs font-medium tracking-wide text-foreground/60">
                    {TESTIMONIALS[activeIndex].role}
                  </p>
                </div>
              </div>

              {/* Navigation Actions */}
              <div className="flex items-center gap-3 mt-10">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 group"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 group"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                
                <span className="text-xs font-mono text-foreground/40 ml-4 tracking-widest">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Right Column: Graphic Display Frame */}
            <div className="md:col-span-5 aspect-[4/5] bg-secondary/20 border border-border/40 rounded-sm relative overflow-hidden shadow-sm">
              {TESTIMONIALS.map((slide, idx) => (
                <img
                  key={idx}
                  src={slide.imagePath}
                  alt={slide.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    idx === activeIndex 
                      ? "opacity-100 scale-100 rotate-0" 
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                  loading="lazy"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* CINEMATIC TEAM TEASER */}
      <section className="bg-black py-32 md:py-48 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container-editorial text-center relative z-10">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-12 drop-shadow-[0_0_20px_rgba(96,165,250,0.25)]">
              People who hold the space.
            </h2>
            <Link
              to="/team"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-12 py-5 text-xs font-bold uppercase tracking-[0.25em] hover:scale-105 hover:bg-primary hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(96,165,250,0.4)]"
            >
              Meet the Collective
            </Link>
          </Reveal>
        </div>
      </section>

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
          width={2500}
          height={1667}
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
              A space to express freely, exchange ideas, and connect. We bring together emerging and
              established voices seeking the time and support to develop their creative projects.
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