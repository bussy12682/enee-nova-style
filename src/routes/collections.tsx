import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { collections } from "@/data/site";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Ankara, Bespoke & Contemporary | Enee Nova" },
      {
        name: "description",
        content:
          "Explore Enee Nova collections: ready-to-wear, Ankara and African-inspired, Western tailoring and bespoke occasion wear.",
      },
      { property: "og:title", content: "Collections | Enee Nova" },
      {
        property: "og:description",
        content:
          "Ready-to-wear, Ankara, contemporary tailoring and bespoke occasion wear by Enee Nova.",
      },
    ],
  }),
  component: Collections,
});

function Collections() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="A wardrobe with a point of view"
        body="Four directions, one signature: clean lines, warm colour and a fit that flatters without fuss."
      />

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        {collections.map((c, i) => (
          <section
            key={c.slug}
            className={`grid items-center gap-10 border-b border-border py-16 lg:grid-cols-2 lg:gap-20 ${
              i % 2 ? "lg:[&>img]:order-2" : ""
            }`}
          >
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              width={912}
              height={1200}
              className="aspect-4/5 w-full object-cover"
            />
            <div>
              <span className="text-[0.7rem] tracking-[0.22em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl">{c.title}</h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                {c.body}
              </p>
              <Link to="/shop" className="btn-outline mt-9">
                Shop this edit
              </Link>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
