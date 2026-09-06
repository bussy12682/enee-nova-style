import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { brand } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About Us" },
  { to: "/size-guide", label: "Size Guide" },
  { to: "/shipping-returns", label: "Shipping & Returns" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
        <Link to="/" className="font-display text-xl tracking-[0.35em] text-foreground">
          ENEE NOVA
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden btn-solid lg:inline-flex"
          >
            Order on WhatsApp
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-5 pb-6 pt-2 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-[0.75rem] uppercase tracking-[0.18em]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-solid mt-5 w-full"
          >
            Order on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
