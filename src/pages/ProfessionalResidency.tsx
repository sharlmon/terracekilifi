import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/utils/imageConstants";
import { ApplicationModal } from "@/components/site/ApplicationModal";

export default function ProfessionalResidency() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Residency"
        title="Professional Residency: Uninterrupted Mastery"
        description="A sanctuary for established artists to deepen their practice through focused solitude and meaningful cultural exchange on the Kenyan coast."
        image={IMAGES.RES_HERO.src}
        imageAlt="Professional artist residency at The Terrace Kilifi"
      />

      <section className="bg-background py-32 md:py-48 overflow-hidden relative">
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
                A place for focus, exchange and renewal
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

          {/* Section 2: Environment & Pace */}
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

          {/* Section 3: Featured Editorial Chapter */}
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

          {/* Section 5: Living & Working */}
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

          {/* Section 6: Duration */}
          <div className="mb-32 md:mb-48">
            <Reveal className="p-10 md:p-16 bg-secondary/30 rounded-sm border border-border/50 max-w-4xl mx-auto">
              <p className="eyebrow mb-8">Duration</p>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-2xl font-serif mb-2">One week to 3 months</p>
                  <p className="text-foreground/70 leading-relaxed">
                    Residencies typically range from one week deep dive up to 3 months. While
                    shorter stays are possible, we recommend 4–8 weeks or longer.
                  </p>
                </div>
                <div className="pt-8 md:pt-0 md:pl-12 md:border-l border-border/20">
                  <p className="text-lg font-medium mb-2">Collaborative Project Sessions</p>
                  <p className="text-foreground/70 leading-relaxed">
                    We also tailor residencies for groups of collaborators working on specific
                    projects requiring a quick turnaround - usually intensive one-week sessions.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Final CTA with Application Interface */}
          <div className="text-center py-20 border-t border-border/20">
            <Reveal>
              <p className="text-foreground/50 text-sm uppercase tracking-[0.3em] mb-8">
                Applications are open on a rolling basis
              </p>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-12 py-5 text-xs font-bold uppercase tracking-[0.25em] hover:scale-105 hover:bg-primary hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(96,165,250,0.4)]"
              >
                Apply
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      <ApplicationModal 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        residencyType="Professional" 
      />
    </>
  );
}
