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
      <PageHero
        eyebrow="The Residency"
        title="Reflect, Risk, and Listen."
        description="Two distinct residencies — Professional and Emerging — held in a creekside setting designed for deep, generous work and creative growth."
        image={IMAGES.RESIDENCY_HERO.src}
        imageAlt="Creekside residency buildings nestled in the natural landscape of Kilifi"
      />

      {/* Overview Section */}
      <section className="container-editorial py-24 md:py-32 grid md:grid-cols-12 gap-12 bg-grain">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Two paths</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
            One sanctuary. Two ways in.
          </h2>
        </Reveal>
        <Reveal
          delay={150}
          className="md:col-span-6 md:col-start-7 space-y-6"
        >
          <p className="text-lg leading-relaxed text-foreground/80">
            The Terrace Residency holds space for both established and emerging voices. Each
            programme is shaped around the artist — their practice, their pace, their questions.
          </p>
          <div className="space-y-4 pt-4 border-t border-border/30">
            <div className="flex items-start gap-4">
              <div className="h-2 w-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-medium text-foreground">Professional Residency</h4>
                <p className="text-sm text-foreground/65 mt-1">For mid-career and established artists seeking deep creative reflection</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-2 w-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-medium text-foreground">Emerging Residency</h4>
                <p className="text-sm text-foreground/65 mt-1">For early-career artists with mentorship, community, and studio access</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Professional Residency - Redesigned */}
      <section className="bg-secondary/40 py-24 md:py-40">
        <div className="container-editorial grid md:grid-cols-12 gap-16 items-start">
          <Reveal className="md:col-span-6 md:sticky md:top-24">
            <div className="space-y-6">
              <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={IMAGES.RESIDENCY_PRO.src}
                  alt="Professional Residency Studio Space"
                  className="h-full w-full object-cover img-mask-in"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[16/12] overflow-hidden rounded-sm shadow-elegant/50">
                  <img
                    src={IMAGES.FACILITY_SUNDECK.src}
                    alt="Terrace Sundeck"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-[16/12] overflow-hidden rounded-sm shadow-elegant/50">
                  <img
                    src={IMAGES.FACILITY_MANGROVE.src}
                    alt="Mangrove Gardens"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-6">
            <div className="sticky top-24">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 mb-8">
                <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                <p className="text-sm uppercase tracking-widest text-primary font-medium">Professional Residency</p>
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

              {/* Duration Card */}
              <div className="mt-10 p-8 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
                <p className="uppercase text-xs tracking-widest text-primary font-semibold">Duration</p>
                <p className="mt-3 text-foreground/75 leading-relaxed">
                  Stays are flexible and tailored to your creative needs — from one week to three months. We work with each artist to design a residency that supports their practice.
                </p>
              </div>

              {/* Features */}
              <ul className="mt-12 space-y-3 border-t border-border/30 pt-8">
                {PROFESSIONAL.map((item) => (
                  <li key={item} className="flex gap-4 text-foreground/85 text-sm md:text-base">
                    <Check size={20} className="mt-0.5 text-primary shrink-0 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
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

      {/* Emerging Residency - Redesigned */}
      <section className="py-24 md:py-40 bg-grain">
        <div className="container-editorial grid md:grid-cols-12 gap-16 items-start">
          <Reveal className="md:col-span-6 order-2 md:order-1">
            <div className="sticky top-24">
              <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 mb-8">
                <div className="h-2 w-2 bg-accent rounded-full mr-3"></div>
                <p className="text-sm uppercase tracking-widest text-accent font-medium">Emerging Residency</p>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-balance">
                Mentorship, momentum, community.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-foreground/80">
                The Terrace Residency is a creative hub for emerging artists — featuring a co-working
                studio, performance deck, and sound recording studio.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                For early-career artists, particularly from coastal Kenya and the wider region. The
                Emerging Residency pairs studio time with mentorship, mentorship with community, and
                community with the skills to sustain a practice.
              </p>

              {/* Sanara Program Card */}
              <div className="mt-10 p-8 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
                <p className="uppercase text-xs tracking-widest text-accent font-semibold">Sanara Program</p>
                <p className="mt-3 text-foreground/75 leading-relaxed">
                  The Terrace hosts Mastercard's Sanara Program, a community music studio and mentorship initiative providing emerging musicians and audio producers access to professional recording equipment and training.
                </p>
              </div>

              {/* Features */}
              <ul className="mt-12 space-y-3 border-t border-border/30 pt-8">
                {EMERGING.map((item) => (
                  <li key={item} className="flex gap-4 text-foreground/85 text-sm md:text-base">
                    <Check size={20} className="mt-0.5 text-accent shrink-0 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`mailto:${SITE.email}?subject=Emerging Residency Application`}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-accent hover:shadow-deep transition-all duration-500 shadow-lg group"
              >
                Apply Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="md:col-span-6 order-1 md:order-2 md:sticky md:top-24">
            <div className="space-y-6">
              <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={IMAGES.RESIDENCY_EMERGING.src}
                  alt="Emerging Artist Studio Space"
                  className="h-full w-full object-cover img-mask-in"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[16/12] overflow-hidden rounded-sm shadow-elegant/50">
                  <img
                    src={IMAGES.ART_SPACE_EVENTS.src}
                    alt="Creative Studio"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-[16/12] overflow-hidden rounded-sm shadow-elegant/50">
                  <img
                    src={IMAGES.EXCHANGE_PILLAR.src}
                    alt="Collaboration Space"
                    className="h-full w-full object-cover"
                    loading="lazy"
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
              Whether you're seeking professional retreat space or mentorship and community, The Terrace is here to support your creative work.
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
