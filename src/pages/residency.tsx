import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Check } from "lucide-react";
import residencyImg from "../assets/images/interior-living-space.webp";
import mangroveImg from "../assets/images/garden-sanctuary.webp";

export default ResidencyPage;

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

function ResidencyPage() {
  return (
    <>
      <PageHero
        eyebrow="The Residency"
        title="Time to reflect, room to risk, a creek to listen to."
        description="Two distinct residencies — Professional and Emerging — held in a creekside setting designed for deep, generous work."
        image={residencyImg}
      />

      <section className="container-editorial py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Two paths</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
            One sanctuary. Two ways in.
          </h2>
        </Reveal>
        <Reveal delay={150} className="md:col-span-6 md:col-start-7 text-lg leading-relaxed text-foreground/80">
          <p>
            The Terrace Residency holds space for both established and emerging
            voices. Each programme is shaped around the artist — their practice,
            their pace, their questions.
          </p>
        </Reveal>
      </section>

      {/* Professional */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-editorial grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal className="md:col-span-5 md:sticky md:top-32">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={residencyImg} alt="Creekside villa at twilight" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-7">
            <p className="eyebrow text-primary">Professional Residency</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Deep work. Open horizons.
            </h2>
            <p className="mt-6 text-foreground/80 leading-relaxed text-lg">
              The Terrace Professional Residency is an artist-run residency space founded and operated by African Women Artists. A quiet container for ambitious projects — interdisciplinary, intentional, and rooted in place.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed text-lg">
              For mid-career and established artists across disciplines seeking time for deep creative reflection and experimentation. We provide the silence and the space; you provide the vision.
            </p>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="eyebrow text-primary/80">Duration of residency</p>
              <p className="mt-3 text-foreground/75 leading-relaxed">Stays are flexible and tailored to your creative needs — from one week to three months. We work with each artist to design a residency that supports their practice.</p>
            </div>
            <ul className="mt-10 space-y-4">
              {PROFESSIONAL.map((item) => (
                <li key={item} className="flex gap-4 text-foreground/85">
                  <Check size={18} className="mt-1 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-primary transition-colors duration-500"
            >
              Apply for Professional Residency
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Emerging */}
      <section className="py-24 md:py-32">
        <div className="container-editorial grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal className="md:col-span-7 order-2 md:order-1">
            <p className="eyebrow text-accent">Emerging Residency</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Mentorship, momentum, community.
            </h2>
            <p className="mt-6 text-foreground/80 leading-relaxed text-lg">
              The Terrace Residency is a creative hub for emerging artists — featuring a co-working studio, performance deck, and sound recording studio.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed text-lg">
              For early-career artists, particularly from coastal Kenya and the wider region. The Emerging Residency pairs studio time with mentorship, mentorship with community, and community with the skills to sustain a practice.
            </p>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="eyebrow text-accent/80">Sanara Program</p>
              <p className="mt-3 text-foreground/75 leading-relaxed">The Terrace hosts Mastercard's Sanara Program, a community music studio and mentorship initiative. This programme provides emerging musicians and audio producers from the region access to professional recording equipment, production training, and connection to broader networks of creative practitioners.</p>
            </div>
            <ul className="mt-10 space-y-4">
              {EMERGING.map((item) => (
                <li key={item} className="flex gap-4 text-foreground/85">
                  <Check size={18} className="mt-1 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-primary transition-colors duration-500"
            >
              Apply for Emerging Residency
            </Link>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5 order-1 md:order-2 md:sticky md:top-32">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={mangroveImg} alt="Mangroves at dawn" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
