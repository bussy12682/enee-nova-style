import lookAnkara from "@/assets/look-ankara.jpg";
import lookRtw from "@/assets/look-rtw.jpg";
import lookBespoke from "@/assets/look-bespoke.jpg";
import lookOccasion from "@/assets/look-occasion.jpg";

export const brand = {
  name: "ENEE NOVA",
  tagline: "Contemporary fashion for the modern woman",
  phones: ["09130455379", "09127985850"],
  email: "eniolaifeoluwa466@gmail.com",
  whatsapp: "https://wa.me/message/UHNKWRFMHEEHP1",
  instagram: "https://www.instagram.com/eneenovaofficial",
  tiktok: "https://www.tiktok.com/@enee_nova",
  facebook: "https://www.facebook.com/profile.php?id=100091378042668",
  snapchat: "https://www.snapchat.com/add/eniola20254731",
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  image: string;
  note: string;
};

export const products: Product[] = [
  {
    slug: "nova-satin-slip",
    name: "Nova Satin Slip Dress",
    category: "Ready-to-Wear",
    price: "₦95,000",
    image: lookRtw,
    note: "Bias-cut satin in soft cream, finished with a fluid floor-sweeping hem.",
  },
  {
    slug: "ife-ankara-peplum",
    name: "Ifé Ankara Peplum Dress",
    category: "Ankara & African-Inspired",
    price: "₦120,000",
    image: lookAnkara,
    note: "Hand-selected Ankara, structured peplum waist and sculpted shoulder.",
  },
  {
    slug: "ola-blazer-dress",
    name: "Ọlá Tailored Blazer Dress",
    category: "Western & Contemporary",
    price: "₦110,000",
    image: lookBespoke,
    note: "Chocolate wool-blend suiting with an asymmetric wrap closure.",
  },
  {
    slug: "nova-beaded-gown",
    name: "Nova Beaded Occasion Gown",
    category: "Bespoke",
    price: "From ₦250,000",
    image: lookOccasion,
    note: "Silver beadwork over cream tulle with a detachable satin train.",
  },
  {
    slug: "eniola-wrap-gown",
    name: "Eniọlá Draped Wrap Gown",
    category: "Ready-to-Wear",
    price: "₦140,000",
    image: lookAnkara,
    note: "Two-tone drape gown, cut to move with a knotted waist detail.",
  },
  {
    slug: "cocoa-cream-two-piece",
    name: "Cocoa & Cream Two-Piece",
    category: "Western & Contemporary",
    price: "₦105,000",
    image: lookRtw,
    note: "A relaxed co-ord in cream crepe, made for everyday elegance.",
  },
];

export const services = [
  {
    title: "Ready-to-Wear Collections",
    body: "Seasonal pieces cut in limited runs and ready to ship.",
  },
  {
    title: "Bespoke & Custom-Made Dresses",
    body: "Designed around you, from first sketch to final fitting.",
  },
  {
    title: "Custom Ankara & African-Inspired Designs",
    body: "Prints selected with you, tailored into modern silhouettes.",
  },
  {
    title: "Custom Western & Contemporary Wear",
    body: "Sharp tailoring, suiting and occasion pieces made to order.",
  },
  {
    title: "Fashion Design & Tailoring",
    body: "Full in-house design, pattern cutting and finishing.",
  },
  {
    title: "Personalized Outfit Design",
    body: "Outfits built for a specific event, mood or story.",
  },
  {
    title: "Online Shopping & Order Services",
    body: "Order by message and we guide you through every step.",
  },
  {
    title: "Worldwide & Local Delivery",
    body: "Shipping across Nigeria and internationally.",
  },
  {
    title: "Size & Fitting Consultation",
    body: "One-to-one measurement guidance before we cut.",
  },
];

export const collections = [
  {
    slug: "ready-to-wear",
    title: "Ready-to-Wear",
    body: "Everyday elegance in cream, cocoa and silver — pieces that need no occasion.",
    image: lookRtw,
  },
  {
    slug: "ankara",
    title: "Ankara & African-Inspired",
    body: "Prints and heritage textiles reworked into confident modern shapes.",
    image: lookAnkara,
  },
  {
    slug: "western",
    title: "Western & Contemporary",
    body: "Precise tailoring, suiting and separates for the woman who leads the room.",
    image: lookBespoke,
  },
  {
    slug: "bespoke",
    title: "Bespoke & Occasion",
    body: "Made-to-measure gowns for weddings, galas and moments that deserve more.",
    image: lookOccasion,
  },
];
