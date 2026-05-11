import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/utils/imageConstants";
import { SITE } from "@/lib/site";

export default ArtSpacePage;

const PROGRAMS = [
  {
    title: "Exhibitions",
    body: "Solo and group shows, curated with care, that travel between local rootedness and international dialogue.",
  },
  {
    title: "Performances",
    body: "Music, dance, and live art that breathe with the rhythms of the coast.",
  },
  {
    title: "Screenings",
    body: "Independent cinema, artist film, and documentary nights under open skies.",
  },
  {
    title: "Workshops",
    body: "Hands-on sessions in craft, sound, writing and image-making, led by practising artists.",
  },
  {
    title: "Talks",
    body: "Conversations between artists, curators and communities — slow, generous, public.",
  },
  {
    title: "Collaborations",
    body: "Long-form partnerships with collectives, institutions and neighbours along the creek.",
  },
];

function ArtSpacePage() {
  return (
    <>
      <PageHero
        eyebrow="The Art Space"
        title="Connecting, Inspiring, and Amplifying."
        description="A non-profit platform celebrating the power of art to gently shift perspectives. Rooted on Kilifi Creek, we draw on 20 years of collaboration to create vibrant cultural experiences."
        image={IMAGES.ART_SPACE_HERO.src}
        imageAlt="Art space gallery at The Terrace with creative exhibitions and performances"
      />

      <section className="container-editorial py-24 md:py-36 grid md:grid-cols-12 gap-12 bg-grain">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Our approach</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
            A space shaped by the people who use it.
          </h2>
        </Reveal>
        <Reveal
          delay={150}
          className="md:col-span-6 md:col-start-7 space-y-5 text-lg leading-relaxed text-foreground/80"
        >
          <p>
            The Terrace Art Space is a non-profit platform that celebrates the power of art to
            connect, inspire and gently shift perspectives. At its heart are the voices and lived
            experiences of the Kilifi people as vital contributors shaping culture and driving
            change in the region.
          </p>
          <p>
            Through a dynamic and multidisciplinary approach, we create space for creativity to
            spark conversation, nurture understanding and contribute to a more inclusive and
            thoughtful cultural landscape.
          </p>
          <p>
            Our work is an open invitation to reimagine who shapes culture, to make room for
            stories that deserve to be seen and heard and to embrace creativity as a powerful
            driver of lasting impact.
          </p>
          <p>
            Rooted in a desire for deeper community connection and real, tangible change, The
            Terrace builds from over two decades of creative collaboration alongside partners such
            as Afrofilms International and I&apos;ll Tell You My Story. Our mission is to support
            artists and communities in turning creative expression into meaningful, sustainable
            impact.
          </p>
        </Reveal>
      </section>

      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Programmes</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] max-w-2xl text-balance">
              Six ways to gather, see and make.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
            {PROGRAMS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="bg-background p-10 group hover:bg-secondary/20 transition-colors"
              >
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="mt-4 text-foreground/70 leading-relaxed">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-28 md:py-36 grid md:grid-cols-12 gap-10 md:gap-16 items-center bg-grain">
        <Reveal className="md:col-span-6">
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
            <img
              src={IMAGES.ART_SPACE_EVENTS.src}
              alt="Live Event"
              loading="lazy"
              className="h-full w-full object-cover img-mask-in"
            />
          </div>
        </Reveal>
        <Reveal delay={150} className="md:col-span-6">
          <p className="eyebrow">Propose a project</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
            Bring your work to the creek.
          </h2>
          <p className="mt-6 text-foreground/80 leading-relaxed text-lg">
            We welcome proposals from artists, curators, collectives, and partners. Tell us what
            you'd like to make and how the Art Space can support it.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=Project Proposal`}
            className="mt-9 inline-flex items-center rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-primary transition-colors duration-500 shadow-lg"
          >
            Submit a proposal
          </a>
        </Reveal>
      </section>
    </>
  );
}
