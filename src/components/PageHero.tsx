export function PageHero({ title, lead }: { title: string; lead?: string }) {
  return (
    <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h1>
        {lead && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{lead}</p>}
      </div>
    </section>
  );
}