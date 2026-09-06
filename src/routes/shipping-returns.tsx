import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { brand } from "@/data/site";

export const Route = createFileRoute("/shipping-returns")({
  head: () => ({
    meta: [
      { title: "Shipping & Returns | Enee Nova" },
      {
        name: "description",
        content:
          "Enee Nova shipping timelines for Nigeria and worldwide delivery, plus our returns and exchange policy.",
      },
      { property: "og:title", content: "Shipping & Returns | Enee Nova" },
      {
        property: "og:description",
        content: "Delivery timelines, costs and our returns policy at Enee Nova.",
      },
    ],
  }),
  component: ShippingReturns,
});

const shipping = [
  {
    title: "Lagos",
    body: "1–2 working days after dispatch. Same-day delivery available on request.",
  },
  {
    title: "Nationwide (Nigeria)",
    body: "2–5 working days after dispatch via trusted courier, with tracking.",
  },
  {
    title: "International",
    body: "5–12 working days depending on destination. Duties and taxes are paid by the customer.",
  },
];

const sections = [
  {
    title: "Order processing",
    body: "Ready-to-wear pieces are dispatched within 1–3 working days. Bespoke and custom orders take 1–3 weeks depending on the design; we confirm your timeline before starting.",
  },
  {
    title: "Delivery cost",
    body: "Shipping is calculated at checkout on WhatsApp, based on your location and parcel weight. We share the exact cost before you pay.",
  },
  {
    title: "Returns & exchanges",
    body: "Ready-to-wear items can be returned or exchanged within 7 days of delivery if unworn, unwashed and with tags intact. Return shipping is covered by the customer unless the item is faulty.",
  },
  {
    title: "Bespoke & custom pieces",
    body: "Made-to-measure garments are cut to your measurements and cannot be returned. We do offer one complimentary adjustment within 14 days of delivery.",
  },
  {
    title: "Faulty or incorrect items",
    body: "Message us within 48 hours of delivery with photos and we will repair, replace or refund the item at no cost to you.",
  },
];

function ShippingReturns() {
  return (
    <>
      <PageHero
        eyebrow="Shipping & returns"
        title="Getting your pieces to you"
        body="We ship across Nigeria and worldwide, with tracking on every parcel."
      />

      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {shipping.map((s) => (
            <div key={s.title} className="border border-border p-7">
              <h2 className="text-xl">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 divide-y divide-border border-t border-border">
          {sections.map((s) => (
            <div key={s.title} className="grid gap-4 py-9 md:grid-cols-[1fr_2fr] md:gap-10">
              <h3 className="text-xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Questions about an order already placed?
          </p>
          <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="btn-outline mt-6">
            Message us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
