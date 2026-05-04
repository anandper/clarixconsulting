interface Props { eyebrow: string; title: string; lede?: string; }

export const PageHero = ({ eyebrow, title, lede }: Props) => (
  <section className="relative bg-gradient-ivory border-b border-border">
    <div className="container-tight py-24 md:py-32">
      <div className="eyebrow"><span className="h-px w-8 bg-brass" />{eyebrow}</div>
      <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.02] mt-5 text-ink text-balance max-w-4xl">
        {title}
      </h1>
      {lede && <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">{lede}</p>}
    </div>
  </section>
);