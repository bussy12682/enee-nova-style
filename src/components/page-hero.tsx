export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-10 lg:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-4xl leading-[1.1] md:text-6xl">{title}</h1>
        {body && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
