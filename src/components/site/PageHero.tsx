interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  srcSet?: string;
  loading?: "eager" | "lazy";
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  srcSet,
  loading = "eager",
}: PageHeroProps) {
  return (
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
      <img
        src={image}
        srcSet={srcSet}
        sizes="100vw"
        loading={loading}
        alt=""
        className="absolute inset-0 h-full w-full object-cover ken-burns"
        fetchPriority={loading === "eager" ? "high" : "auto"}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,0.1)]" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 text-white max-w-[800px]">
        <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-white/70 font-medium reveal">
          {eyebrow}
        </p>
        <h1 className="reveal reveal-delay-1 mt-5 font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] tracking-tight text-balance">
          {title}
        </h1>
        <p className="reveal reveal-delay-2 mt-7 max-w-xl text-base md:text-lg text-white/85 leading-relaxed text-pretty">
          {description}
        </p>
      </div>
    </section>
  );
}
