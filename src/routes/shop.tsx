import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { brand, products } from "@/data/site";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Ready-to-Wear & Bespoke Dresses | Enee Nova" },
      {
        name: "description",
        content:
          "Browse Enee Nova dresses, tailored pieces and occasion gowns. Order by WhatsApp with worldwide delivery.",
      },
      { property: "og:title", content: "Shop Ready-to-Wear & Bespoke Dresses | Enee Nova" },
      {
        property: "og:description",
        content: "Dresses, tailoring and occasion gowns, ready to order from Enee Nova.",
      },
    ],
  }),
  component: Shop,
});

const filters = ["All", "Ready-to-Wear", "Ankara & African-Inspired", "Western & Contemporary", "Bespoke"];

function Shop() {
  const [active, setActive] = useState("All");
  const shown = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="The current pieces"
        body="Each piece is cut in a limited run. Tell us your size and we'll confirm availability or make yours to measure."
      />

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`border px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] transition-colors ${
                active === f
                  ? "border-foreground bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article key={p.slug}>
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={912}
                height={1200}
                className="aspect-3/4 w-full object-cover"
              />
              <p className="mt-5 eyebrow">{p.category}</p>
              <div className="mt-2 flex items-baseline justify-between gap-4">
                <h2 className="text-lg">{p.name}</h2>
                <span className="text-sm text-muted-foreground">{p.price}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-outline mt-5 w-full"
              >
                Enquire
              </a>
            </article>
          ))}
        </div>

        <p className="mt-16 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Payment is confirmed on WhatsApp by bank transfer before dispatch. For bespoke
          orders, a 50% deposit secures your slot in the atelier.
        </p>
      </div>
    </>
  );
}
