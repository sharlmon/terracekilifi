import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ApplicationModal } from "@/components/site/ApplicationModal"; 

// Asset Imports
import professional1Image from "@/assets/images/professional1.JPG";
import professional2Image from "@/assets/images/professional2.jpg.jpeg"; 
import professionalGImage from "@/assets/images/professionalG.JPG";

export default function ProfessionalResidency() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Residency"
        title="Professional Residency: Uninterrupted Mastery"
        description="A sanctuary for established artists to deepen their practice through focused solitude and meaningful cultural exchange on the Kenyan coast."
        image={professional1Image}
        width={2500}
        height={1667}
        loading="eager"
        imageAlt="Professional artist residency at The Terrace Kilifi"
        titleClassName="text-5xl md:text-7xl lg:text-[5.5rem]" 
      />

      <section className="bg-background py-32 md:py-48 overflow-hidden relative">
        <div className="container-editorial">
          
          {/* Section 1: Intro Block */}
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

            <Reveal delay={200} className="md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={professional2Image}
                  alt="Polycarp from Sauti Sol playing a traditional stringed instrument at the residency"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover img-mask-in"
                />
              </div>
            </Reveal>
          </div>

          {/* Section 2: Environment & Pace */}
          <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center mb-24">
            <Reveal className="md:col-span-5 order-2 md:order-1">
              <div className="aspect-square overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={professionalGImage}
                  alt="Artists gathering and relaxing at the residency"
                  width={1500}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover img-mask-in"
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

          {/* Section 3: Merged Context, Programs & Location */}
          <div className="py-24 md:py-32 bg-grain/50 -mx-6 md:-mx-20 px-6 md:px-20 mb-32 md:mb-48">
            <Reveal className="max-w-4xl mx-auto space-y-8">
              <p className="font-serif text-3xl md:text-4xl leading-tight text-balance text-primary mb-12">
                The program welcomes cross-disciplinary work spanning visual art, writing, film,
                sound, performance, research, craft, design and socially engaged practices.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                The Terrace Residency offers a rare balance of focused solitude and meaningful
                exchange. Residents develop their work alongside a community of artists and
                cultural practitioners, with space for informal dialogue, shared meals and
                organic collaboration.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80 italic font-serif py-4">
                Many use the time to slow down, reconnect with their practice and pursue ideas
                that need depth and duration. Daily life is unhurried - walking, swimming, and
                time on The Terrace often shape the creative process.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80 border-t border-border/30 pt-8">
                <span className="font-bold">Location & Sustainability:</span> Located about 35 minutes 
                from Kilifi town, it offers both seclusion and access to a vibrant local cultural scene. 
                The residency operates with an eco-conscious approach, in collaboration with a local 
                mangrove conservation group.
              </p>
            </Reveal>
          </div>

          {/* Section 4: Merged Living, Working & Duration */}
          <div className="mb-32 md:mb-48">
            <Reveal className="mb-12 text-center">
              <h3 className="font-serif text-4xl md:text-5xl">Living, Working & Duration</h3>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-1px bg-border border border-border mb-12">
              <div className="bg-background p-8 md:p-10 space-y-6">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">
                    The Atmosphere
                  </p>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    At subsidised rates, residents stay in private rooms within the Residency
                    Premises, many with views of the creek and mangrove forest. The residency hosts
                    a small number of artists at a time, creating a calm and supportive living
                    environment.
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    "5 Private bedrooms",
                    "Quiet indoor and outdoor nooks for reading",
                    "Rooftop, terraces and shaded outdoor areas",
                    "Informal meeting and collaboration areas",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-foreground/75 text-sm">
                      <div className="h-1 w-1 bg-primary rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background p-8 md:p-10 space-y-6">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">
                    Workspace & Collaboration
                  </p>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    It offers flexible creative workspaces suited to a wide range of practices.
                    Residents also have access to a workspace and a music studio at our sister
                    venue, The Terrace Arts Space.
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Traditional hut ideal for edit/design suite",
                    "Access to professional music studio",
                    "Shared outdoor kitchen and dining",
                    "Creekside sundecks and gathering places",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-foreground/75 text-sm">
                      <div className="h-1 w-1 bg-primary rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Reveal className="p-10 md:p-16 bg-secondary/30 rounded-sm border border-border/50 max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
                <strong className="font-serif font-bold text-primary">SOLO Residencies</strong> typically range from one week deep dive up to 3 months. While shorter stays are possible, we recommend 4–8 weeks or longer.
              </p>
              <div className="w-12 h-[1px] bg-border/50 mx-auto"></div>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
                We also tailor make <strong className="font-serif font-bold text-primary">GROUP Residencies</strong> for groups of collaborators working on specific projects requiring a quick turnaround - usually intensive one-week sessions.
              </p>
            </Reveal>
          </div>

          {/* Section 5: Final CTA */}
          <div className="text-center py-20 border-t border-border/20">
            <Reveal className="max-w-2xl mx-auto flex flex-col items-center">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 uppercase">
                Applications are open on a rolling basis
              </h3>
              <p className="text-lg text-foreground/80 mb-10 text-balance">
                Are you a professional artist or group - and need a getaway on a subsidised budget? Write to us and we'll get back to you!
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