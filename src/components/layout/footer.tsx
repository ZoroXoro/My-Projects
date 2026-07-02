import Link from "next/link";

const shopLinks = [
  { href: "/shop", label: "All products" },
  { href: "/shop?category=signature-cakes", label: "Cakes" },
  { href: "/shop?category=french-pastries", label: "Pastries" },
  { href: "/shop?category=bread-viennoiserie", label: "Bread" },
  { href: "/shop?category=seasonal", label: "Seasonal" },
];

const orderLinks = [
  { href: "/custom", label: "Custom cakes" },
  { href: "#", label: "Bulk orders" },
  { href: "#", label: "Corporate gifting" },
  { href: "#", label: "Delivery info" },
];

const studioLinks = [
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Visit us" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Press" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/50 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
        <div className="grid grid-cols-4 gap-12 mb-14 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-7">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl font-normal text-white block mb-4">
              Cakers<span className="text-gold"> & Cakers</span>
            </Link>
            <p className="text-sm font-light text-white/35 leading-relaxed max-w-[240px]">
              Artisan patisserie, made fresh every morning. Lokhandwala, Mumbai.
            </p>
            <div className="flex gap-3.5 mt-6">
              {["Ig", "Fb", "Wa"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-white/14 flex items-center justify-center text-white/45 text-xs font-serif italic font-medium hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/30 mb-5">
              Shop
            </div>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/45 hover:text-white transition-colors font-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Orders */}
          <div>
            <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/30 mb-5">
              Orders
            </div>
            <ul className="flex flex-col gap-3">
              {orderLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/45 hover:text-white transition-colors font-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/30 mb-5">
              Studio
            </div>
            <ul className="flex flex-col gap-3">
              {studioLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/45 hover:text-white transition-colors font-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-white/[0.08] flex-wrap gap-3">
          <span className="text-xs text-white/22">
            © 2024 Cakers & Cakers. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Returns"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-white/22 hover:text-white/60 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
