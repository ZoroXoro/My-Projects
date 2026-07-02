import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";

const team = [
  { initial: "A", name: "Anamika Suri", role: "Head pastry chef & founder", bio: "Trained under two Michelin-starred chefs in Lyon, obsessed with lemon. Her croissant lamination technique is borrowed from nobody." },
  { initial: "R", name: "Rohan Desai", role: "Head of chocolate & confections", bio: "Former chemical engineer. He approaches ganache like a formula. The results are unreasonably good." },
  { initial: "M", name: "Maya Pillai", role: "Custom cake designer", bio: "Fine arts background, sugar flowers you won't believe are sugar. Her waitlist for wedding cakes is three months long." },
];

const principles = [
  { icon: "I", title: "No premixes", desc: "Everything from scratch. Every day. We don't own a single box of premix and we never will." },
  { icon: "II", title: "Same-day freshness", desc: "Nothing is baked the night before. Production starts at 4am so deliveries are always fresh." },
  { icon: "III", title: "Sourced with purpose", desc: "French AOP butter. Valrhona and Callebaut chocolate. Local farmers for seasonal fruit." },
  { icon: "IV", title: "Small batches", desc: "We limit daily output deliberately. Quality over volume. When it's gone, it's gone." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink pt-[calc(72px+90px)] pb-24">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <h1 className="font-serif text-[clamp(44px,5.5vw,80px)] font-light text-white leading-[1.05] mb-6">
            We bake for people
            <br />
            who notice
            <br />
            <em className="text-gold">the difference.</em>
          </h1>
          <p className="text-[18px] font-light text-white/45 leading-[1.7] max-w-[560px]">
            Eight years, one kitchen, one standard. Cakers & Cakers exists because
            we believe premium patisserie shouldn&apos;t be imported — it should be
            made here.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <div className="grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-12">
            {/* Image */}
            <div className="relative aspect-[4/5] bg-blush overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=800&auto=format&fit=crop&q=80"
                alt="Cakers & Cakers kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div>
              <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">
                The origin
              </div>
              <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light leading-[1.1] mb-8">
                From a 200 sq ft
                <br />
                <em className="text-gold">kitchen in Bandra.</em>
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-[15px] font-light text-muted leading-[1.8]">
                  It started with a question:{" "}
                  <strong className="font-medium text-ink">
                    why did Mumbai&apos;s best restaurants import their pastries from
                    Paris?
                  </strong>{" "}
                  Not because we couldn&apos;t make them here — but because nobody had
                  decided it was worth trying.
                </p>
                <p className="text-[15px] font-light text-muted leading-[1.8]">
                  Chef Anamika Suri trained under two Michelin-starred pastry
                  chefs in Lyon, came back to Bandra, and started Cakers & Cakers
                  in 2016 with ₹3 lakhs, one Rational oven, and a waiting list
                  she&apos;d built entirely on Instagram.
                </p>
                <p className="text-[15px] font-light text-muted leading-[1.8]">
                  Today the studio has expanded. The team has grown.{" "}
                  <strong className="font-medium text-ink">
                    The standard hasn&apos;t moved an inch.
                  </strong>{" "}
                  Every product that leaves this kitchen is something we&apos;d be
                  proud to eat ourselves.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/custom"
                  className="inline-flex items-center px-10 py-4 bg-ink text-white text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-[#3A3430] transition-colors"
                >
                  Commission something special
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className="bg-cream border-y border-dust py-12">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <div className="grid grid-cols-4 gap-8 max-sm:grid-cols-2 max-sm:gap-6">
            {[
              { val: "2016", label: "Year founded" },
              { val: "12,000+", label: "Cakes crafted" },
              { val: "4", label: "Michelin-trained" },
              { val: "4.9★", label: "Average rating" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span className="font-serif text-[40px] font-light text-ink block leading-none mb-2">
                  {s.val}
                </span>
                <span className="text-[11px] font-light tracking-[0.08em] uppercase text-muted">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <section className="bg-cream py-24">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <div className="mb-14">
            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">
              The people
            </div>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1]">
              Made by <em className="text-gold">obsessives.</em>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
            {team.map((member) => (
              <div key={member.name}>
                <div className="aspect-square bg-blush mb-5 flex items-center justify-center overflow-hidden relative">
                  <span className="font-serif text-[64px] font-light italic text-dust">
                    {member.initial}
                  </span>
                </div>
                <div className="font-serif text-[22px] font-light text-ink mb-1">
                  {member.name}
                </div>
                <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-gold mb-2.5">
                  {member.role}
                </div>
                <div className="text-[13px] font-light text-muted leading-[1.65]">
                  {member.bio}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-24 border-t border-dust">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <div className="mb-14">
            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">
              How we work
            </div>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1]">
              Four principles we
              <br />
              <em className="text-gold">don&apos;t compromise on.</em>
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {principles.map((p) => (
              <div key={p.icon} className="border border-dust p-8">
                <div className="font-serif text-[22px] font-light italic text-gold mb-5">
                  {p.icon}
                </div>
                <div className="font-serif text-[19px] font-light text-ink mb-2.5">
                  {p.title}
                </div>
                <div className="text-[13px] font-light text-muted leading-[1.65]">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6 text-center">
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-white leading-[1.1] mb-6">
            Ready to taste the <em className="text-gold">difference?</em>
          </h2>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <Link
              href="/shop"
              className="px-10 py-4 bg-gold text-white text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-[#b8955e] transition-colors"
            >
              Browse the menu
            </Link>
            <Link
              href="/custom"
              className="px-10 py-4 border border-white/30 text-white/85 text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-white/10 transition-colors"
            >
              Order a custom cake
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
