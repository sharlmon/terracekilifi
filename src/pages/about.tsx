import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/utils/imageConstants";

export default AboutPage;

const VALUES = [
  { title: "Creative but grounded", body: "Bold ideas held by daily rituals and place." },
  { title: "Elegant but welcoming", body: "Refined spaces that remain open and generous." },
  { title: "Experimental but accessible", body: "Risk-taking work that invites the public in." },
  {
    title: "Local and international",
    body: "Deeply rooted in Kilifi, in conversation with the world.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An artist-led house on Kilifi Creek."
        description="The Terrace was founded as an independent platform for art, community and exchange — created by artists, for artists, in the heart of coastal Kenya."
        image={IMAGES.RESIDENCY_PILLAR.src}
        imageAlt="The Terrace artist residency building overlooking Kilifi Creek"
      />

      <section className="container-editorial py-24 md:py-36 grid md:grid-cols-12 gap-12 bg-grain">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Our story</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
            Built slowly, by hand, on the creek.
          </h2>
        </Reveal>
        <Reveal
          delay={150}
          className="md:col-span-6 md:col-start-7 space-y-5 text-lg leading-relaxed text-foreground/80"
        >
          <p>
            The Terrace began as a question: what could an arts space look like if it was shaped
            entirely by the people making the work? The answer became a small ecosystem — an art
            space, a residency, an exchange — held together by the rhythms of Kilifi Creek.
          </p>
          <p>
            We are independent and artist-led. We commission, host, exhibit, and collaborate. We
            move at the pace of the tide.
          </p>
        </Reveal>
      </section>

      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Values</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] max-w-2xl text-balance">
              Four tensions we hold with care.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 border border-border">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="bg-background p-10">
                <h3 className="font-serif text-2xl">{v.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
