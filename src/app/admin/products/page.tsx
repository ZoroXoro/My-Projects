"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products as initialProducts } from "@/data/products";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Plus, Search, Edit2, Trash2, Eye, ToggleLeft, ToggleRight } from "lucide-react";
import { toast } from "@/components/ui/toast-provider";

export default function AdminProductsPage() {
  const [productList, setProductList] = useState<Product[]>(initialProducts);
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("all");

  const filtered = productList.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCat === "all" || p.category === filterCat;
    return matchSearch && matchCat;
  });

  const toggleStock = (id: string) => {
    setProductList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, inStock: !p.inStock } : p))
    );
    const product = productList.find((p) => p.id === id);
    toast(`${product?.name} marked as ${product?.inStock ? "out of stock" : "in stock"}`);
  };

  const deleteProduct = (id: string) => {
    const product = productList.find((p) => p.id === id);
    setProductList((prev) => prev.filter((p) => p.id !== id));
    toast(`${product?.name} deleted`);
  };

  const categories = [
    { id: "all", label: "All" },
    { id: "signature-cakes", label: "Cakes" },
    { id: "french-pastries", label: "Pastries" },
    { id: "bread-viennoiserie", label: "Bread" },
    { id: "tarts-petits-fours", label: "Tarts" },
    { id: "seasonal", label: "Seasonal" },
  ];

  return (
    <div className="p-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-[32px] font-light text-ink mb-1">Products</h1>
          <p className="text-sm text-muted font-light">{productList.length} products total</p>
        </div>
        <Link
          href="/admin/products/new"
          className="flex items-center gap-2 px-6 py-3 bg-ink text-white text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-[#3A3430] transition-colors"
        >
          <Plus size={14} />
          Add product
        </Link>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <div className="relative flex-1 min-w-[240px]">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search products…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-dust bg-white text-sm font-light text-ink placeholder:text-muted outline-none focus:border-gold transition-colors"
          />
        </div>
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCat(cat.id)}
              className={`px-4 py-2 text-[12px] font-medium border transition-all ${
                filterCat === cat.id
                  ? "bg-ink text-white border-ink"
                  : "border-dust text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-dust overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dust">
              <th className="text-left px-6 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted w-[48px]"></th>
              <th className="text-left px-6 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Product</th>
              <th className="text-left px-6 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted hidden lg:table-cell">Category</th>
              <th className="text-left px-6 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Price</th>
              <th className="text-left px-6 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted hidden md:table-cell">Status</th>
              <th className="text-right px-6 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dust">
            {filtered.map((product) => (
              <tr key={product.id} className="hover:bg-blush/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="w-10 h-10 relative overflow-hidden bg-blush flex-shrink-0">
                    <Image src={product.imageUrl} alt={product.name} fill className="object-cover" sizes="40px" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-medium text-[13px] text-ink">{product.name}</div>
                  <div className="text-[12px] font-light text-muted mt-0.5 hidden sm:block">{product.description}</div>
                </td>
                <td className="px-6 py-4 hidden lg:table-cell">
                  <span className="text-[11px] font-light text-muted capitalize">
                    {product.category.replace(/-/g, " ")}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-serif text-[15px] font-light text-ink">{formatPrice(product.price)}</span>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <button
                    onClick={() => toggleStock(product.id)}
                    className={`flex items-center gap-1.5 text-[11px] font-medium transition-colors ${
                      product.inStock ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {product.inStock ? (
                      <><ToggleRight size={16} />In stock</>
                    ) : (
                      <><ToggleLeft size={16} />Out of stock</>
                    )}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-3">
                    <Link
                      href={`/shop/${product.slug}`}
                      className="text-muted hover:text-ink transition-colors"
                      title="View on site"
                      target="_blank"
                    >
                      <Eye size={15} />
                    </Link>
                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className="text-muted hover:text-ink transition-colors"
                      title="Edit"
                    >
                      <Edit2 size={15} />
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="text-muted hover:text-red-500 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <span className="font-serif text-4xl font-light text-dust block mb-3">∅</span>
            <p className="text-sm font-light text-muted">No products match your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
