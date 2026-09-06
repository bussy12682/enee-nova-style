import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { brand } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Enee Nova — Orders, Bespoke & Enquiries" },
      {
        name: "description",
        content:
          "Reach Enee Nova by WhatsApp, phone or email for orders, bespoke commissions and fitting consultations.",
      },
      { property: "og:title", content: "Contact Enee Nova" },
      {
        property: "og:description",
        content: "WhatsApp, phone, email and social links for Enee Nova.",
      },
    ],
  }),
  component: Contact;
});

function Contact() {
  const [form, setForm] = useState({ name: "", detail: "" });

  const message = encodeURIComponent(
    `Hello Enee Nova, I'm ${form.name || "…"}. ${form.detail || ""}`.trim(),
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your piece"
        body="WhatsApp is the fastest way to reach us — for orders, bespoke commissions or a quick sizing question."
      />

      <section className="mx-auto grid max-w-6xl gap-16 px-5 py-16 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="text-2xl md:text-3xl">Start a message</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Fill this in and we'll open WhatsApp with your note ready to send.
          </p>

          <div className="mt-8 space-y-5">
            <label className="block">
              <span className="eyebrow">Your name</span>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-foreground"
                placeholder="Eniola"
              />
            </label>
            <label className="block">
              <span className="eyebrow">What do you need?</span>
              <textarea
                value={form.detail}
                onChange={(e) => setForm({ ...form, detail: e.target.value })}
                rows={5}
                className="mt-2 w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-foreground"
                placeholder="I'd like a bespoke Ankara dress for a wedding in December."
              />
            </label>
            <a
              href={`${brand.whatsapp}?text=${message}`}
              target="_blank"
              rel="noreferrer"
              className="btn-solid w-full"
            >
              Continue on WhatsApp
            </a>
          </div>
        </div>

        <div className="space-y-10">
          <div className="border-t border-border pt-5">
            <p className="eyebrow">WhatsApp</p>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block font-display text-2xl hover:opacity-70"
            >
              0913 045 5379
            </a>
          </div>

          <div className="border-t border-border pt-5">
            <p className="eyebrow">Phone</p>
            <div className="mt-2 space-y-1 font-display text-2xl">
              {brand.phones.map((p) => (
                <a key={p} href={`tel:${p}`} className="block hover:opacity-70">
                  {p}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <p className="eyebrow">Email</p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-2 block break-all text-lg hover:opacity-70"
            >
              {brand.email}
            </a>
          </div>

          <div className="border-t border-border pt-5">
            <p className="eyebrow">Follow</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[0.7rem] uppercase tracking-[0.18em]">
              <a href={brand.instagram} target="_blank" rel="noreferrer" className="hover:opacity-70">Instagram</a>
              <a href={brand.tiktok} target="_blank" rel="noreferrer" className="hover:opacity-70">TikTok</a>
              <a href={brand.facebook} target="_blank" rel="noreferrer" className="hover:opacity-70">Facebook</a>
              <a href={brand.snapchat} target="_blank" rel="noreferrer" className="hover:opacity-70">Snapchat</a>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <p className="eyebrow">Opening hours</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Monday to Saturday, 9am – 7pm (WAT). Messages sent on Sunday are answered
              the next working day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
