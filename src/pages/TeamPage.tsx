import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/utils/imageConstants";

const TEAM_MEMBERS = [
  {
    name: "Zippy Kimundu",
    role: "CREATIVE DIRECTOR",
    bio: "Guiding the creative vision of The Terrace through thoughtful curation, strategic programming, and artistic dialogue. Connecting artists, ideas, and communities across disciplines.",
    image: IMAGES.TEAM_ZIPPY.src,
  },
  {
    name: "David Mwenda",
    role: "PROGRAM MANAGER",
    bio: "Creating welcoming spaces for deep creative work. Providing mentorship, community connection, and support for artists at every stage of their practice.",
    image: IMAGES.TEAM_DAVID.src,
  },
];

export default function TeamPage() {
  return (
    // Changed bg-background to bg-grain to give the whole page the texture
    <div className="bg-grain text-foreground min-h-screen">
      
      {/* Intro Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="container-editorial text-center max-w-3xl mx-auto">
          <Reveal>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance mb-6">
              People who hold the space.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              The Terrace is run by a collective of artists, curators, and community builders<br />
              devoted to creating space for ambitious creative work on Kilifi Creek.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team Grid - Minimalist 2-Column */}
      <section className="pb-32 md:pb-48">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member, i) => (
              <Reveal key={member.name} delay={i * 150} className="flex flex-col group">
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant mb-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div>
                  <p className="eyebrow mb-3 text-primary">{member.role}</p>
                  <h2 className="font-serif text-3xl md:text-4xl mb-4">{member.name}</h2>
                  <p className="text-foreground/80 leading-relaxed">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Teaser */}
      <section className="py-24 md:py-32 border-t border-border/30 bg-secondary/20 text-center">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-6 text-foreground/60">Collective Action</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-8 max-w-3xl mx-auto leading-tight text-balance">
              A community-rooted ecosystem nurturing the future of African arts.
            </h3>
          </Reveal>
        </div>
      </section>
    </div>
  );
}