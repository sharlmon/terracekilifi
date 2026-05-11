import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/utils/imageConstants";

const TEAM_MEMBERS = [
  {
    name: "Zippy Kimundu",
    role: "CREATIVE DIRECTOR",
    bio: "Guiding the creative vision of The Terrace through thoughtful curation, strategic programming, and artistic dialogue. Connecting artists, ideas, and communities across disciplines.",
    image: IMAGES.TEAM_ZIPPY.src,
    layout: "left", // Image left, text right
  },
  {
    name: "David Mwenda",
    role: "PROGRAM MANAGER",
    bio: "Creating welcoming spaces for deep creative work. Providing mentorship, community connection, and support for artists at every stage of their practice.",
    image: IMAGES.TEAM_DAVID.src,
    layout: "right", // Image right, text left
  },
  {
    name: "Dorothy Michieka",
    role: "PROGRAM CURATOR",
    bio: "Building relationships with Kilifi's creative community, cultural organizations, and local partners. Fostering collaboration and mutual exchange.",
    image: IMAGES.TEAM_DOROTHY.src,
    layout: "center", // Staggered center
  },
];

export default function TeamPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Intro Section */}
      <section className="pt-40 pb-20 md:pt-64 md:pb-32">
        <div className="container-editorial">
          <Reveal>
            <h1 className="font-serif text-5xl md:text-8xl leading-[0.95] text-balance mb-12 drop-shadow-[0_0_30px_rgba(96,165,250,0.3)]">
              People who hold the space.
            </h1>
            <p className="text-xl md:text-3xl text-white/60 font-light max-w-3xl leading-relaxed">
              The Terrace is run by a collective of artists, curators, and community builders devoted to
              creating space for ambitious creative work on Kilifi Creek.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team Narrative Journey */}
      <section className="pb-32 md:pb-64">
        <div className="container-editorial space-y-32 md:space-y-64">
          {TEAM_MEMBERS.map((member, i) => (
            <div 
              key={member.name}
              className={`flex flex-col ${
                member.layout === "left" ? "md:flex-row" : 
                member.layout === "right" ? "md:flex-row-reverse" : 
                "items-center"
              } gap-12 md:gap-24 items-center`}
            >
              {/* Image Column */}
              <Reveal className={`${member.layout === "center" ? "w-full max-w-4xl" : "md:w-1/2"}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
                  <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm shadow-elegant border border-white/10 relative z-10">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Content Column */}
              <Reveal 
                delay={200} 
                className={`${
                  member.layout === "center" ? "text-center max-w-2xl" : "md:w-1/2"
                }`}
              >
                <div className="bg-white/5 backdrop-blur-md p-10 md:p-16 rounded-sm border border-white/10 shadow-[0_0_40px_rgba(96,165,250,0.1)] hover:shadow-[0_0_60px_rgba(96,165,250,0.2)] transition-all duration-700">
                  <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6">
                    {member.role}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-none">
                    {member.name}
                  </h2>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Teaser */}
      <section className="py-32 md:py-64 border-t border-white/5 text-center">
        <div className="container-editorial">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-12">
              Collective Action
            </p>
            <h3 className="font-serif text-3xl md:text-5xl mb-16 max-w-3xl mx-auto leading-tight">
              A community-rooted ecosystem nurturing the future of African arts.
            </h3>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
