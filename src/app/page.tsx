import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/shop/product-card";
import { Footer } from "@/components/layout/footer";
import { GoogleReviews } from "@/components/home/google-reviews";

const marqueeItems = [
  "Freshly baked daily", "Custom orders welcome", "Free delivery above ₹1,500",
  "No artificial flavours", "Same-day pickup available",
];

const categories = [
  { label: "Signature cakes", count: 14, slug: "signature-cakes", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80", large: true },
  { label: "French pastries", count: 22, slug: "french-pastries", img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&auto=format&fit=crop&q=80" },
  { label: "Bread & viennoiserie", count: 18, slug: "bread-viennoiserie", img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=600&auto=format&fit=crop&q=80" },
  { label: "Tarts & petits fours", count: 16, slug: "tarts-petits-fours", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80" },
  { label: "Seasonal specials", count: 8, slug: "seasonal", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80" },
];

const values = [
  { num: "I", title: "Sourced right", desc: "French butter, Valrhona chocolate, local seasonal fruit. No exceptions." },
  { num: "II", title: "Made fresh", desc: "Baked the morning of delivery. Nothing sits on a shelf overnight." },
  { num: "III", title: "No shortcuts", desc: "Croissants take 72 hours. Ganaches are tempered by hand. Always." },
  { num: "IV", title: "Custom first", desc: "Every custom order gets a dedicated pastry chef. Not a template." },
];

const steps = [
  { num: "01", title: "Fill the brief", desc: "Tell us about the occasion, size, flavours, and any design references you love." },
  { num: "02", title: "We send a proposal", desc: "Within 24 hours you'll get a detailed design proposal and quote." },
  { num: "03", title: "Confirm & schedule", desc: "50% deposit to lock the date. We'll handle the rest." },
  { num: "04", title: "Delivered or collected", desc: "We deliver to your door or you pick up from our studio." },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  return (
    <>
      {/* HERO */}
      <section className="pt-[72px] min-h-screen grid grid-cols-2 max-md:grid-cols-1 overflow-hidden">
        <div className="flex flex-col justify-center px-12 py-20 max-md:px-6 max-md:py-16">
          <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-7">Est. 2016 · Mumbai</div>
          <h1 className="font-serif text-[clamp(52px,6vw,88px)] font-light leading-[1.05] mb-7">
            Baked with<br/><em className="text-gold">obsessive</em><br/>precision.
          </h1>
          <p className="text-[15px] font-light text-muted leading-[1.75] max-w-[400px] mb-11">
            Every layer. Every crumb. Every celebration. We craft patisserie that earns its place at the table — no shortcuts, no compromise.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <Link href="/shop" className="px-10 py-4 bg-ink text-white text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-[#3A3430] transition-colors">Explore the menu</Link>
            <Link href="/custom" className="px-10 py-4 border border-ink text-ink text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-ink hover:text-white transition-all">Design your cake</Link>
          </div>
          <div className="flex gap-10 mt-16 pt-10 border-t border-dust">
            {[{ val:"8", label:"Years baking" }, { val:"12,000+", label:"Cakes made" }, { val:"4.9★", label:"Rating" }].map(s => (
              <div key={s.label}>
                <span className="font-serif text-[32px] font-light block">{s.val}</span>
                <div className="text-[11px] font-light tracking-[0.08em] uppercase text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden min-h-[500px] max-md:min-h-[360px]">
          <Image src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&auto=format&fit=crop&q=80" alt="Signature celebration cake" fill className="object-cover" priority />
          <div className="absolute bottom-11 right-9 bg-white/90 backdrop-blur-sm px-5 py-4 border-l-[3px] border-gold">
            <div className="text-[10px] tracking-[0.1em] uppercase text-muted mb-1">This week's special</div>
            <div className="font-serif text-xl font-normal">Earl Grey & Lemon</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-ink py-[18px] overflow-hidden" aria-hidden="true">
        <div className="flex animate-marquee w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-serif text-[15px] font-light italic text-white/55 px-10 whitespace-nowrap">
              {item}<span className="text-gold mx-5">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
            <div>
              <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">Explore</div>
              <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1]">Shop by <em className="text-gold">category</em></h2>
            </div>
            <Link href="/shop" className="text-[12px] font-medium tracking-[0.08em] uppercase text-ink border-b border-ink pb-0.5 flex items-center gap-2 after:content-['→']">View all</Link>
          </div>
          <div className="grid grid-cols-4 gap-3.5 max-lg:grid-cols-2 max-sm:grid-cols-2 max-sm:gap-2.5">
            {categories.map(cat => (
              <Link key={cat.slug} href={`/shop?category=${cat.slug}`}
                className={`relative overflow-hidden cursor-pointer group ${cat.large ? "row-span-2 max-sm:row-span-1" : "aspect-[3/4]"}`}
                style={{ aspectRatio: cat.large ? undefined : "3/4" }}>
                <Image src={cat.img} alt={cat.label} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="(max-width:640px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-ink/0 to-ink/0" />
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <span className="font-serif text-[21px] font-normal text-white block">{cat.label}</span>
                  <span className="text-[11px] font-light tracking-[0.08em] uppercase text-white/55 mt-1 block">{cat.count} products</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-cream py-24">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
            <div>
              <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">Bestsellers</div>
              <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1]">Made fresh,<br/><em className="text-gold">sold daily</em></h2>
            </div>
            <Link href="/shop" className="text-[12px] font-medium tracking-[0.08em] uppercase text-ink border-b border-ink pb-0.5 flex items-center gap-2 after:content-['→']">See all products</Link>
          </div>
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {featured.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-ink py-24">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <div className="grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-12">
            <div>
              <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">Our story</div>
              <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-white mb-7">Not a bakery.<br/><em className="text-gold">A craft studio.</em></h2>
              <p className="text-[15px] font-light text-white/45 leading-[1.75] max-w-[480px]">We started Cakers & Cakers in a 200 sq ft kitchen in Bandra with one oven, one pastry chef, and an unreasonable conviction that Mumbai deserved better patisserie.</p>
              <p className="text-[15px] font-light text-white/30 leading-[1.75] max-w-[480px] mt-4">Eight years later, the kitchen is bigger. Everything else is the same.</p>
              <div className="mt-9">
                <Link href="/about" className="inline-flex items-center px-9 py-3.5 border border-white/30 text-white/85 text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-white/10 hover:border-white/60 transition-all">Read our story</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {values.map(v => (
                <div key={v.num} className="border border-white/10 p-7">
                  <span className="font-serif text-[38px] font-light text-gold block leading-none mb-2.5">{v.num}</span>
                  <div className="font-serif text-[17px] font-normal text-white mb-1.5">{v.title}</div>
                  <div className="text-[13px] font-light text-white/40 leading-[1.6]">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM TEASER */}
      <section className="bg-blush py-24">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <div className="grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-12">
            <div>
              <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">Custom orders</div>
              <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1]">Your cake,<br/><em className="text-gold">your brief.</em></h2>
              <p className="text-[15px] font-light text-muted leading-[1.75] max-w-[480px] mt-5">From wedding tiers to birthday centrepieces. Tell us what you&apos;re celebrating and we&apos;ll build something worthy of it.</p>
              <div className="mt-9">
                <Link href="/custom" className="inline-flex items-center px-10 py-4 bg-ink text-white text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-[#3A3430] transition-colors">Start your order</Link>
              </div>
            </div>
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <div key={step.num} className={`flex gap-6 py-6 ${i < steps.length-1 ? "border-b border-dust" : ""}`}>
                  <div className="font-serif text-[44px] font-light text-dust leading-none flex-shrink-0 w-12 -mt-1.5">{step.num}</div>
                  <div>
                    <div className="font-serif text-[19px] font-normal text-ink mb-1.5">{step.title}</div>
                    <div className="text-[13px] font-light text-muted leading-[1.6]">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <GoogleReviews />

      {/* NEWSLETTER */}
      <section className="bg-cream py-20 border-t border-dust">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <div className="max-w-[520px] mx-auto text-center">
            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">Stay close</div>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light leading-[1.1] mb-9">Seasonal menus.<br/><em className="text-gold">Early access.</em><br/>No noise.</h2>
            <form className="flex border border-dust max-sm:flex-col max-sm:border-0 max-sm:gap-2.5">
              <input type="email" placeholder="your@email.com" className="flex-1 px-5 py-4 bg-white border-none outline-none font-sans text-[14px] font-light text-ink placeholder:text-muted max-sm:border max-sm:border-dust" />
              <button type="submit" className="px-8 py-4 bg-ink text-white text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-[#3A3430] transition-colors whitespace-nowrap">Subscribe</button>
            </form>
            <p className="text-[12px] text-muted mt-4">No weekly blasts. Only when something worth knowing happens.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
