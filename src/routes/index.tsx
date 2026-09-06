import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import atelier from "@/assets/atelier.jpg";
import { brand, collections, products, services } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enee Nova — Contemporary & Bespoke Fashion for Women" },
      {
        name: "description",
        content:
          "Enee Nova designs ready-to-wear, Ankara and made-to-measure pieces that blend comfort, individuality and refined style.",
      },
      { property: "og:title", content: "Enee Nova — Contemporary & Bespoke Fashion" },
      {
        property: "og:description",
        content:
          "Ready-to-wear collections and bespoke dresses designed for the modern woman.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:px-10 lg:py-24">
        <div>
          <p className="eyebrow">Est. Lagos · Worldwide delivery</p>
          <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
            Dressed with
            <span className="block italic">presence.</span>
          </h1>
          <div className="rule-line mt-8 max-w-40" />
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Enee Nova is a contemporary fashion brand creating stylish, confident and
            effortlessly elegant pieces — from ready-to-wear collections to bespoke
            Ankara, African-inspired, Western and contemporary designs.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/shop" className="btn-solid">
              Shop the collection
            </Link>
            <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="btn-outline">
              Book a bespoke fitting
            </a>
          </div>
        </div>

        <img
          src={hero}
          alt="Enee Nova model wearing a draped chocolate and cream gown"
          width={1408}
          height={1760}
          className="w-full object-cover"
        />
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The collections</p>
              <h2 className="mt-4 text-3xl md:text-5xl">Four ways to wear Enee Nova</h2>
            </div>
            <Link to="/collections" className="text-[0.7rem] uppercase tracking-[0.22em] underline underline-offset-8">
              View all
            </Link>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((c) => (
              <Link key={c.slug} to="/collections" className="group block">
                <div className="overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    width={912}
                    height={1200}
                    className="aspect-3/4 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-xl">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <p className="eyebrow">Featured pieces</p>
        <h2 className="mt-4 text-3xl md:text-5xl">New in the atelier</h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <article key={p.slug}>
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={912}
                height={1200}
                className="aspect-3/4 w-full object-cover"
              />
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-lg">{p.name}</h3>
                <span className="text-sm text-muted-foreground">{p.price}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/shop" className="btn-outline">
            See everything
          </Link>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10">
          <img
            src={atelier}
            alt="Hands pinning cream fabric on a dress form in the Enee Nova atelier"
            loading="lazy"
            width={1408}
            height={944}
            className="w-full object-cover"
          />
          <div>
            <p className="eyebrow">Made to measure</p>
            <h2 className="mt-4 text-3xl md:text-5xl">
              Your measurements, your fabric, your silhouette.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Every bespoke commission begins with a conversation. We talk through the
              occasion, choose fabric together, take your measurements, and cut a garment
              that belongs to no one else.
            </p>
            <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="btn-solid mt-9">
              Start a commission
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-4 text-3xl md:text-5xl">Services</h2>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="border-t border-border pt-5">
              <span className="text-[0.7rem] tracking-[0.22em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
