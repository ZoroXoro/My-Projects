const GOOGLE_REVIEWS_URL = "https://share.google/3GfeWjCMYoLA0g7V6";

interface GoogleReview {
  author: string;
  initial: string;
  rating: number;
  timeAgo: string;
  quote: string;
}

const reviews: GoogleReview[] = [
  {
    author: "Jyoti Salian",
    initial: "J",
    rating: 5,
    timeAgo: "3 months ago",
    quote:
      "I have been ordering cakes from your shop for the last one year, and I am extremely satisfied with your service. The cakes are always fresh, delicious, and of the best quality. Delivery is always on time.",
  },
  {
    author: "Kodukula Srikiran",
    initial: "K",
    rating: 5,
    timeAgo: "5 months ago",
    quote:
      "Ordered the Dutch Truffle Glamorous Cake and it was TOO GOOD — rich, moist, and beautifully crafted! Everyone at the party devoured it. The prompt service was the cherry on top.",
  },
  {
    author: "Prajwal Kather",
    initial: "P",
    rating: 5,
    timeAgo: "9 months ago",
    quote:
      "20+ year old brand serving Mumbaikars with delicious cakes, bombolonis, pastries, and imported chocolates. They specialise in customised cakes and have a live cake studio — you can get any cake in 1-2 hours of ordering.",
  },
  {
    author: "Aparna Wagle",
    initial: "A",
    rating: 5,
    timeAgo: "4 years ago",
    quote:
      "The dinosaur theme cake was amazing and yummiest! They made it so perfect that my son was thrilled to see it. Great job.",
  },
  {
    author: "Tazeen",
    initial: "T",
    rating: 5,
    timeAgo: "4 years ago",
    quote:
      "Their blueberry cheesecake is love. Highly recommend this place — it's affordable, delicious, and mouthwatering.",
  },
];

function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.82Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.11A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.28A12 12 0 0 0 0 12c0 1.93.46 3.76 1.28 5.39l3.99-3.11Z" />
      <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.28 6.61l3.99 3.11C6.22 6.88 8.87 4.77 12 4.77Z" />
    </svg>
  );
}

export function GoogleReviews() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
        <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
          <div>
            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">Reviews</div>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1]">
              Eaten, not just <em className="text-gold">photographed.</em>
            </h2>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-dust px-5 py-3.5 hover:border-gold transition-colors"
          >
            <GoogleIcon />
            <div>
              <div className="flex items-center gap-1.5 text-[13px] font-medium text-ink">
                4.2 <span className="text-gold text-[11px] tracking-[2px]">★★★★★</span>
              </div>
              <div className="text-[11px] font-light text-muted">Read reviews on Google</div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {reviews.map((r) => (
            <div key={r.author} className="bg-cream px-8 py-9 border-l-2 border-gold flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-gold text-[13px] tracking-[4px]">{"★".repeat(r.rating)}</div>
                <GoogleIcon className="w-4 h-4 opacity-50" />
              </div>
              <p className="font-serif text-[17px] font-light italic leading-[1.7] text-ink mb-6 flex-1">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-dust flex items-center justify-center font-serif text-[14px] font-medium text-muted">
                  {r.initial}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-ink">{r.author}</div>
                  <div className="text-[12px] text-muted">{r.timeAgo} · Google</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
