import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/utils/imageConstants";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Zippy Kimundu",
    role: "Creative Director",
    bio: "Guiding the creative vision of The Terrace through thoughtful curation, strategic programming, and artistic dialogue. Connecting artists, ideas, and communities across disciplines.",
    image: IMAGES.TEAM_ZIPPY.src,
  },
  {
    name: "David Mwenda",
    role: "Program Manager",
    bio: "Creating welcoming spaces for deep creative work. Providing mentorship, community connection, and support for artists at every stage of their practice.",
    image: IMAGES.TEAM_DAVID.src,
  },
  {
    name: "Dorothy Michieka",
    role: "Program Curator",
    bio: "Building relationships with Kilifi's creative community, cultural organizations, and local partners. Fostering collaboration and mutual exchange.",
    image: IMAGES.TEAM_DOROTHY.src,
  },
];

export function Team() {
  return (
    <section className="container-editorial py-28 md:py-40">
      <Reveal>
        <p className="eyebrow">The Team</p>
        <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] max-w-3xl text-balance">
          People who hold the space.
        </h2>
        <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-2xl">
          The Terrace is run by a collective of artists, curators, and community builders devoted to
          creating space for ambitious creative work on Kilifi Creek.
        </p>
      </Reveal>

      <div className="mt-20 grid gap-12 md:gap-16 md:grid-cols-3">
        {TEAM_MEMBERS.map((member, i) => (
          <Reveal key={member.name} delay={i * 120} className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-muted shadow-elegant mb-8 transition-transform duration-500 group-hover:shadow-deep">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="h-full w-full object-cover img-mask-in transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">{member.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-primary font-medium">
                {member.role}
              </p>
              <p className="mt-4 text-foreground/70 leading-relaxed text-base">{member.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
