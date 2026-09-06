import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { brand } from "@/data/site";

export const Route = createFileRoute("/size-guide")({
  head: () => ({
    meta: [
      { title: "Size Guide & How to Measure | Enee Nova" },
      {
        name: "description",
        content:
          "Find your Enee Nova size with our measurement chart and step-by-step guide, or book a free fitting consultation.",
      },
      { property: "og:title", content: "Size Guide | Enee Nova" },
      {
        property: "og:description",
        content: "Measurement chart and fitting guidance for Enee Nova garments.",
      },
    ],
  }),
  component: SizeGuide,
});

const rows = [
  ["UK 6 / XS", "31–32", "24–25", "34–35"],
  ["UK 8 / S", "33–34", "26–27", "36–37"],
  ["UK 10 / M", "35–36", "28–29", "38–39"],
  ["UK 12 / M", "37–38", "30–31", "40–41"],
  ["UK 14 / L", "39–40", "32–33", "42–43"],
  ["UK 16 / L", "41–42", "34–35", "44–45"],
  ["UK 18 / XL", "43–45", "36–38", "46–48"],
];

const steps = [
  {
    title: "Bust",
    body: "Measure around the fullest part of the bust, keeping the tape level and relaxed.",
  },
  {
    title: "Waist",
    body: "Measure the narrowest part of your torso, usually just above the navel.",
  },
  {
    title: "Hips",
    body: "Measure around the fullest part of the hips, about 20cm below the waist.",
  },
  {
    title: "Length",
    body: "For gowns, measure from the shoulder to where you want the hem to fall, in shoes.",
  },
];

function SizeGuide() {
  return (
    <>
      <PageHero
        eyebrow="Size guide"
        title="Find your fit"
        body="All measurements are in inches and refer to body measurements, not garment measurements. Between two sizes? Take the larger one, or let us cut to measure."
      />

      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-10">
        <div className="overflow-x-auto border border-border">
          <table className="w-full min-w-lg text-left text-sm">
            <thead className="bg-secondary/70">
              <tr className="text-[0.68rem] uppercase tracking-[0.18em]">
                <th className="px-5 py-4 font-normal">Size</th>
                <th className="px-5 py-4 font-normal">Bust</th>
                <th className="px-5 py-4 font-normal">Waist</th>
                <th className="px-5 py-4 font-normal">Hips</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-t border-border">
                  {r.map((cell, i) => (
                    <td
                      key={cell}
                      className={`px-5 py-4 ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-20 text-3xl md:text-4xl">How to measure</h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {steps.map((s, i) => (
            <div key={s.title} className="border-t border-border pt-5">
              <span className="text-[0.7rem] tracking-[0.22em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border border-border bg-secondary/40 p-10 text-center">
          <h2 className="text-2xl md:text-3xl">Not sure? We'll measure with you.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Size and fitting consultations are free. Send us a message and we'll walk you
            through each measurement before anything is cut.
          </p>
          <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="btn-solid mt-8">
            Book a fitting consultation
          </a>
        </div>
      </section>
    </>
  );
}
