import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ApplicationModal } from "@/components/site/ApplicationModal";

// --- ASSET IMPORTS ---
import emergenceImage from "@/assets/images/emergenceimage.jpg";
import emergence1 from "@/assets/images/emergence1.jpg.jpg";
import emergence2 from "@/assets/images/emergence2.jpg.jpg";
import emergence3 from "@/assets/images/emergence3.jpg.jpg";
import sanara1 from "@/assets/images/sanara1.jpg.jpg"; //common vite issue ususally appears due to file naming
import sanara2 from "@/assets/images/sanara2.jpeg.jpeg";

export default function EmergingResidency() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Residency"
        title="Emerging: Cultivate Your Voice"
        description="A vibrant hub designed for artistic exploration, mentorship, and community. Nestled along Kilifi Creek, providing accessible infrastructure for the next generation of talent."
        image={emergenceImage}
        width={2500}
        height={1667}
        loading="eager"
        imageAlt="Emerging artist residency at The Terrace Kilifi"
      />

      <section className="py-24 md:py-40 bg-secondary/15 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent/5 blur-[120px] rounded-full" />
        <div className="container-editorial relative z-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start mb-32">
            <Reveal className="md:col-span-6">
              <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 mb-8">
                <div className="h-2 w-2 bg-accent rounded-full mr-3" />
                <p className="text-sm uppercase tracking-widest text-accent font-medium">
                  Emerging Residency
                </p>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-balance mb-8 drop-shadow-[0_0_20px_rgba(96,165,250,0.25)]">
                Cultivate Your Voice
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  The Terrace Residency is a creative hub nestled along the scenic Kilifi Creek,
                  designed for artistic exploration, collaboration and community. The emerging
                  residency is focused on upcoming artists and offers free trainings, workshops, and
                  masterclasses.
                </p>
                <p>
                  The space features a co-working studio for creatives, a performance deck, an
                  outdoor screening venue, a sound recording studio and a lively bar and restaurant
                  — a fusion of art, culture and connection.
                </p>
                <p>
                  Serving as a gathering point for diverse voices and community participation. With
                  a commitment to inclusivity and innovation, the residency nurtures a dynamic
                  ecosystem where creativity thrives and connections across disciplines and
                  communities are strengthened.
                </p>
              </div>

              <div className="mt-12 p-8 bg-background/50 backdrop-blur-sm rounded-sm border border-accent/10 shadow-soft">
                <p className="uppercase text-xs tracking-widest text-accent font-bold mb-4">
                  Sanara Program
                </p>
                <div className="text-foreground/75 leading-relaxed space-y-4">
                  <p>
                    With the support of Mastercard&apos;s Sanara Program, we operate a community
                    music studio offering mentorship, technical training, and performance
                    opportunities.
                  </p>
                  <p>
                    Artists are supported not only in refining their skills but also in accessing
                    markets and building networks for collaboration and growth. These collaborative
                    platforms create a rich ecosystem for artistic experimentation and community-led
                    storytelling.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Visual Grid: Emergence & Sanara Images */}
            <Reveal delay={200} className="md:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Top Wide Image */}
                <div className="col-span-2 aspect-video rounded-sm shadow-elegant overflow-hidden">
                  <img 
                    src={emergence1} 
                    alt="Emerging residency community gathering" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Bottom Left Square Image */}
                <div className="aspect-square rounded-sm shadow-soft overflow-hidden">
                  <img 
                    src={emergence2} 
                    alt="Creative collaboration in session" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Bottom Right Square Image */}
                <div className="aspect-square rounded-sm shadow-soft overflow-hidden">
                  <img 
                    src={emergence3} 
                    alt="Studio work environment" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Sanara Showcase Row */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="aspect-video rounded-sm shadow-soft overflow-hidden">
                  <img 
                    src={sanara1} 
                    alt="Sanara program recording session" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="aspect-video rounded-sm shadow-soft overflow-hidden">
                  <img 
                    src={sanara2} 
                    alt="Sanara program live collaboration" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              {
                title: "Mentorship",
                desc: "Direct access to established artists and technical practitioners to guide your journey.",
              },
              {
                title: "Infrastructure",
                desc: "screening space, performance deck, and shared co-working environments.",
              },
              {
                title: "Network",
                desc: "A growing ecosystem of local and international collaborators across multiple sectors.",
              },
            ].map((feature, i) => (
              <Reveal
                key={feature.title}
                delay={i * 100}
                className="p-8 bg-white/40 backdrop-blur-sm rounded-sm border border-white/20 shadow-sm"
              >
                <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{feature.desc}</p>
              </Reveal>
            ))}
          </div>

          {/* Final CTA with Application Interface */}
          <div className="text-center py-20 border-t border-accent/10">
            <Reveal>
              <p className="text-foreground/50 text-sm uppercase tracking-[0.3em] mb-8">
                Applications are open on a rolling basis
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-12 py-5 text-xs font-bold uppercase tracking-[0.25em] hover:scale-105 hover:bg-accent hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(96,165,250,0.4)]"
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
        residencyType="Emerging"
      />
    </>
  );
}