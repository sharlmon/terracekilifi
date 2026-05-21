import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/utils/imageConstants";
import { SITE } from "@/lib/site";
import artspaceImage from "@/assets/images/artspace1.jpg";
import artspace2Image from "@/assets/images/artspace2.jpg";
import artspace3Image from "@/assets/images/artspace3.jpg";
import artspace4Image from "@/assets/images/artspace4.jpg";

export default ArtSpacePage;

function ArtSpacePage() {
  return (
    <>
      <PageHero
        eyebrow="The Art Space"
        title="Connecting, Inspiring, and Amplifying."
        description="A non-profit platform celebrating the power of art to gently shift perspectives. Rooted on Kilifi Creek, we draw on 20 years of collaboration to create vibrant cultural experiences."
        image={IMAGES.ART_BAND_BW.src}
        width={2000}
        height={1333}
        loading="eager"
        imageAlt="Live black and white band performance at The Terrace"
      />

      {/* INTRO STORY SECTION */}
      <section className="container-editorial py-24 md:py-36 grid md:grid-cols-12 gap-10 md:gap-16 items-center bg-grain">
        {/* LEFT: Intro Image (SWAPPED: NOW SHOWING THE NYATITI PLAYER via artspace2Image) */}
        <Reveal className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
            <img
              src={artspace2Image}
              alt="Solo performance by a musician playing the Nyatiti"
              loading="lazy"
              width={1200}
              height={1500}
              decoding="async"
              // Custom object position to show both Makadem's face and the audience
              className="h-full w-full object-cover img-mask-in"
              style={{ objectPosition: "70% top" }}
            />
          </div>
        </Reveal>

        {/* RIGHT: Intro Paragraphs */}
        <Reveal
          delay={150}
          className="md:col-span-6 md:col-start-7 space-y-5 text-lg leading-relaxed text-foreground/80"
        >
          <p>
            The Terrace Art Space is a non-profit platform that celebrates the power of art to
            connect, inspire and gently shift perspectives. We host exhibitions and live programmes
            that prioritise depth over spectacle, and that hold room for the voices of the coast
            alongside artists from across the world.
          </p>
          <p>
            Whether you're attending a screening, joining a workshop, or proposing a project, you
            become part of a creative community that values experiment, conversation and care.
            Grounded in our partnership traditions and 20 years of collaborative practice, we
            believe art is a tool for transformation.
          </p>
        </Reveal>
      </section>

      {/* FACILITIES SECTION */}
      <section className="bg-secondary/40 py-24 md:py-36">
        <div className="container-editorial grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* LEFT: Events/Screening Image */}
          <Reveal className="md:col-span-5 md:col-start-1">
            <div className="aspect-square overflow-hidden rounded-sm shadow-elegant">
              <img
                src={artspace3Image}
                alt="Community gathering for a film screening event"
                loading="eager"
                fetchpriority="high"
                width={1500}
                height={1500}
                decoding="async"
                className="h-full w-full object-cover img-mask-in" 
              />
            </div>
          </Reveal>

          {/* RIGHT: Minimal Available Spaces Text */}
          <Reveal delay={150} className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <p className="eyebrow">Spaces & Facilities</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Everything you need to gather, create, and celebrate.
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-foreground/80">
              The Art Space offers a range of versatile public and professional spaces for exhibition,
              performance, and community engagement — alongside a fully equipped bar, restaurant, and
              studio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROPOSAL SECTION - 4-Image Staggered Grid */}
      <section className="container-editorial py-28 md:py-36 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-grain">
        {/* LEFT: 4-Image Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6 relative">
          <Reveal delay={100}>
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
              <img
                src={artspace4Image}
                alt="Audience gathered for an outdoor screening"
                loading="lazy"
                width={1200}
                height={1500}
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
              />
            </div>
          </Reveal>

          <Reveal delay={200} className="mt-12 md:mt-24">
            <div className="aspect-square overflow-hidden rounded-sm shadow-elegant">
              <img
                src={artspaceImage} 
                alt="Art space community event"
                loading="lazy"
                width={1500}
                height={1500}
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="aspect-square overflow-hidden rounded-sm shadow-elegant">
              <img
                src={IMAGES.ART_SINGERS.src}
                alt="Singing duo at sunset"
                loading="lazy"
                width={1500}
                height={1500}
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
              />
            </div>
          </Reveal>

          {/* SWAPPED: NOW SHOWING THE GUY WITH HAND UP via IMAGES.ART_SOLO_SINGER.src */}
          <Reveal delay={250} className="mt-12 md:mt-24">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
              <img
                src={IMAGES.ART_SOLO_SINGER.src}
                alt="Solo performance with hand raised"
                loading="lazy"
                width={1200}
                height={1500}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
              />
            </div>
          </Reveal>
        </div>

        {/* RIGHT: Text Content */}
        <Reveal delay={300} className="lg:col-span-6 flex flex-col justify-center">
          <p className="eyebrow">Propose a project</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
            Bring your work to the creek.
          </h2>
          <p className="mt-6 text-foreground/80 leading-relaxed text-lg">
            We welcome proposals from artists, curators, collectives, and partners. Tell us what
            you'd like to make and how the Art Space can support it.
          </p>
          <div>
            <a
              href={`mailto:${SITE.email}?subject=Project Proposal`}
              className="mt-9 inline-flex items-center rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-primary transition-colors duration-500 shadow-lg"
            >
              Submit a proposal
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}