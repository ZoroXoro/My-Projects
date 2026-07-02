"use client";

import { useState, useMemo } from "react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/shop/product-card";
import { Footer } from "@/components/layout/footer";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const dietary = ["Eggless", "Gluten-free", "Vegan", "Nut-free"];
const occasions = ["Birthday", "Wedding", "Anniversary", "Gifting", "Everyday"];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (selectedDietary.length > 0) {
      list = list.filter((p) =>
        selectedDietary.some((d) =>
          p.dietary.includes(d.toLowerCase().replace("-", ""))
        )
      );
    }
    switch (sortBy) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "newest": list = list.filter(p => p.badge === "New").concat(list.filter(p => p.badge !== "New")); break;
      case "bestselling": list = list.filter(p => p.badge === "Bestseller").concat(list.filter(p => p.badge !== "Bestseller")); break;
    }
    return list;
  }, [selectedCategory, selectedDietary, sortBy]);

  const toggleDietary = (d: string) => {
    setSelectedDietary((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  };

  return (
    <>
      {/* Hero */}
      <div className="bg-white border-b border-dust pt-[calc(72px+60px)] pb-16">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h1 className="font-serif text-[clamp(42px,5vw,72px)] font-light">
              The menu
            </h1>
            <div className="text-sm text-muted">{filtered.length} products</div>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className="bg-cream min-h-screen">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-[240px_1fr] max-md:grid-cols-1">
            {/* Sidebar */}
            <aside className="border-r border-dust bg-white hidden md:block">
              <div className="sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto p-8">
                {/* Category */}
                <div className="mb-9">
                  <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-3.5">
                    Category
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="flex items-center gap-2.5 cursor-pointer text-[13px] text-ink">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === "all"}
                        onChange={() => setSelectedCategory("all")}
                        className="accent-ink w-3.5 h-3.5"
                      />
                      <span className={selectedCategory === "all" ? "font-medium" : "font-light"}>
                        All products ({products.length})
                      </span>
                    </label>
                    {categories.map((cat) => (
                      <label key={cat.id} className="flex items-center gap-2.5 cursor-pointer text-[13px] text-ink">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat.id}
                          onChange={() => setSelectedCategory(cat.id)}
                          className="accent-ink w-3.5 h-3.5"
                        />
                        <span className={selectedCategory === cat.id ? "font-medium" : "font-light"}>
                          {cat.label} ({cat.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Dietary */}
                <div className="mb-9">
                  <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-3.5">
                    Dietary
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {dietary.map((d) => (
                      <label key={d} className="flex items-center gap-2.5 cursor-pointer text-[13px] font-light text-ink">
                        <input
                          type="checkbox"
                          checked={selectedDietary.includes(d)}
                          onChange={() => toggleDietary(d)}
                          className="accent-ink w-3.5 h-3.5"
                        />
                        {d}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Occasions */}
                <div>
                  <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-3.5">
                    Occasion
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {occasions.map((o) => (
                      <label key={o} className="flex items-center gap-2.5 cursor-pointer text-[13px] font-light text-ink">
                        <input type="checkbox" className="accent-ink w-3.5 h-3.5" />
                        {o}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Products */}
            <div className="p-10 max-md:p-6">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                <span className="text-sm text-muted">{filtered.length} products</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2.5 border border-dust bg-white font-sans text-sm text-ink outline-none cursor-pointer"
                  aria-label="Sort products"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-asc">Price: Low to high</option>
                  <option value="price-desc">Price: High to low</option>
                  <option value="newest">Newest</option>
                  <option value="bestselling">Best selling</option>
                </select>
              </div>

              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
                  <span className="font-serif text-5xl font-light text-dust">∅</span>
                  <p className="font-serif text-xl font-light text-muted">No products found</p>
                  <p className="text-sm text-muted/60">Try adjusting your filters</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-2 max-xs:grid-cols-1">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  );
}
