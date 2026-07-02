"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { useCartStore } from "@/lib/cart-store";
import { toast } from "@/components/ui/toast-provider";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, ChevronLeft } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";

const sizes = ["Individual", "For 2", "Box of 6"];
const flavours = ["Classic", "Extra tart", "With thyme"];

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedFlavour, setSelectedFlavour] = useState(flavours[0]);
  const { addItem } = useCartStore();

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem(product, selectedSize, selectedFlavour);
    }
    toast(`${product.name} added to order`);
  };

  // Related products
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <div className="pt-[72px] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 min-h-[calc(100vh-72px)] max-md:grid-cols-1">
            {/* Gallery */}
            <div className="bg-blush p-8 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto flex flex-col gap-3 max-md:static max-md:h-auto max-md:min-h-[380px]">
              <div className="flex-1 relative min-h-[320px] bg-dust">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant={product.badge === "New" ? "gold" : "default"}>
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2 flex-shrink-0">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 cursor-pointer border-2 relative overflow-hidden ${
                      i === 0 ? "border-ink" : "border-transparent hover:border-dust"
                    }`}
                  >
                    <Image
                      src={product.imageUrl}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="px-16 py-14 overflow-y-auto max-md:px-6 max-md:py-8">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs text-muted mb-6">
                <Link href="/shop" className="flex items-center gap-1 hover:text-ink transition-colors">
                  <ChevronLeft size={12} />
                  Shop
                </Link>
                <span className="text-dust">›</span>
                <span className="text-ink capitalize">
                  {product.category.replace(/-/g, " ")}
                </span>
                <span className="text-dust">›</span>
                <span className="text-ink">{product.name}</span>
              </div>

              <h1 className="font-serif text-[clamp(32px,3.5vw,48px)] font-light leading-[1.1] mb-3">
                {product.name}
              </h1>
              <p className="text-sm font-light text-muted leading-[1.7] mb-6">
                {product.longDescription}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-dust">
                <span className="font-serif text-[32px] font-light">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xs font-light tracking-[0.06em] uppercase text-muted">
                  {product.serves}
                </span>
              </div>

              {/* Size */}
              <div className="mb-7">
                <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted mb-3">
                  Size
                </div>
                <div className="flex gap-2.5 flex-wrap">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-5 py-2.5 border text-[13px] transition-all ${
                        selectedSize === s
                          ? "bg-ink text-white border-ink"
                          : "border-dust text-ink hover:border-ink"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flavour */}
              <div className="mb-7">
                <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted mb-3">
                  Flavour preference
                </div>
                <div className="flex gap-2 flex-wrap">
                  {flavours.map((f) => (
                    <button
                      key={f}
                      onClick={() => setSelectedFlavour(f)}
                      className={`px-4 py-2 border rounded-full text-[12px] font-light transition-all ${
                        selectedFlavour === f
                          ? "border-ink text-ink"
                          : "border-dust text-muted hover:border-ink hover:text-ink"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Qty + Add */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="flex items-center border border-dust" role="group" aria-label="Quantity">
                  <button
                    className="w-11 h-11 flex items-center justify-center text-ink hover:bg-blush transition-colors"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    aria-label="Decrease"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-11 text-center font-serif text-lg font-light">
                    {qty}
                  </span>
                  <button
                    className="w-11 h-11 flex items-center justify-center text-ink hover:bg-blush transition-colors"
                    onClick={() => setQty(qty + 1)}
                    aria-label="Increase"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  onClick={handleAdd}
                  className="flex-1 py-3.5 bg-ink text-white font-sans text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-[#3A3430] transition-colors"
                >
                  Add to order
                </button>
              </div>

              {/* Meta */}
              <div className="mt-9 pt-9 border-t border-dust flex flex-col">
                {[
                  { icon: "✦", label: "Freshness", desc: "Baked morning of delivery. Best consumed within 24 hours of receipt." },
                  { icon: "✦", label: "Delivery", desc: "Same-day delivery available (order before 11am). Free above ₹1,500." },
                  { icon: "✦", label: "Allergens", desc: product.allergens.join(", ") + ". Made in a kitchen that handles nuts." },
                  { icon: "✦", label: "Want a full cake?", desc: null, link: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3.5 py-3.5 border-b border-dust last:border-0">
                    <span className="text-gold flex-shrink-0 mt-0.5 text-[15px]">{item.icon}</span>
                    <div>
                      <div className="text-[13px] font-medium text-ink mb-0.5">{item.label}</div>
                      {item.link ? (
                        <div className="text-[12px] font-light text-muted leading-[1.6]">
                          <Link href="/custom" className="text-gold hover:underline">
                            Start a custom order →
                          </Link>
                        </div>
                      ) : (
                        <div className="text-[12px] font-light text-muted leading-[1.6]">{item.desc}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="bg-cream py-20">
            <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
              <div className="mb-12">
                <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-3">
                  You might also like
                </div>
                <h2 className="font-serif text-[36px] font-light">
                  From the same collection
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/shop/${p.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[4/5] relative overflow-hidden bg-blush mb-5">
                      <Image src={p.imageUrl} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="33vw" />
                    </div>
                    <div className="font-serif text-lg font-normal">{p.name}</div>
                    <div className="text-sm text-muted font-light mt-1">{formatPrice(p.price)} {p.unit}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
