import { Link } from "@tanstack/react-router";
import { brand } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-[0.35em]">ENEE NOVA</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Ready-to-wear and bespoke pieces for the woman who dresses with intention.
            </p>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/shop" className="text-muted-foreground hover:text-foreground">Shop</Link></li>
              <li><Link to="/collections" className="text-muted-foreground hover:text-foreground">Collections</Link></li>
              <li><Link to="/size-guide" className="text-muted-foreground hover:text-foreground">Size Guide</Link></li>
              <li><Link to="/shipping-returns" className="text-muted-foreground hover:text-foreground">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Reach us</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href={`tel:${brand.phones[0]}`} className="hover:text-foreground">{brand.phones[0]}</a></li>
              <li><a href={`tel:${brand.phones[1]}`} className="hover:text-foreground">{brand.phones[1]}</a></li>
              <li><a href={`mailto:${brand.email}`} className="hover:text-foreground">{brand.email}</a></li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[0.7rem] uppercase tracking-[0.18em]">
              <a href={brand.instagram} target="_blank" rel="noreferrer" className="hover:opacity-70">Instagram</a>
              <a href={brand.tiktok} target="_blank" rel="noreferrer" className="hover:opacity-70">TikTok</a>
              <a href={brand.facebook} target="_blank" rel="noreferrer" className="hover:opacity-70">Facebook</a>
              <a href={brand.snapchat} target="_blank" rel="noreferrer" className="hover:opacity-70">Snapchat</a>
            </div>
          </div>
        </div>

        <p className="mt-14 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} Enee Nova. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
