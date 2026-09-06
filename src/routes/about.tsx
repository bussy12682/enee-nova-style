import { createFileRoute, Link } from "@tanstack/react-router";
import atelier from "@/assets/atelier.jpg";
import { PageHero } from "@/components/page-hero";
import { services } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Enee Nova — The Brand & Atelier" },
      {
        name: "description",
        content:
          "Enee Nova blends comfort, individuality and refined style so every woman can express her presence with confidence.",
      },
      { property: "og:title", content: "About Enee Nova" },
      {
        property: "og:description",
        content: "The story, values and services behind the Enee Nova atelier.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Elegance, made personal"
        body="Enee Nova is a contemporary fashion brand dedicated to creating stylish, confident and effortlessly elegant pieces for the modern woman."
      />

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="text-3xl md:text-4xl">Our story</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              We offer thoughtfully designed ready-to-wear collections alongside
              custom-made and bespoke garments, including Ankara, African-inspired,
              Western and contemporary designs.
            </p>
            <p>
              Enee Nova blends comfort, individuality and refined style to create pieces
              that allow every woman to express her presence with confidence — whether
              that's a workday, a wedding, or a moment entirely her own.
            </p>
            <p>
              Every garment is designed and finished in-house, so the person who sketches
              your dress is the person who checks its final seam.
            </p>
          </div>
        </div>
        <img
          src={atelier}
          alt="Inside the Enee Nova atelier"
          loading="lazy"
          width={1408}
          height={944}
          className="w-full object-cover"
        />
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <p className="eyebrow">What we offer</p>
          <h2 className="mt-4 text-3xl md:text-5xl">Services</h2>
          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="border-t border-border pt-5">
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 text-center lg:px-10">
        <h2 className="text-3xl md:text-5xl">Ready when you are</h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Shop what's ready now, or tell us about the piece you have in mind.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/shop" className="btn-solid">Shop now</Link>
          <Link to="/contact" className="btn-outline">Talk to us</Link>
        </div>
      </section>
    </>
  );
}
