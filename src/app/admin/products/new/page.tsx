"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { toast } from "@/components/ui/toast-provider";
import { ChevronLeft, Upload } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    longDescription: "",
    price: "",
    unit: "/ slice",
    category: "signature-cakes",
    badge: "",
    imageUrl: "",
    serves: "",
    dietary: "",
    allergens: "",
    inStock: true,
    featured: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setForm((prev) => ({
      ...prev,
      [name]: val,
      ...(name === "name" && !form.slug
        ? { slug: value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") }
        : {}),
    }));
  };

  const handleSave = async () => {
    if (!form.name || !form.price || !form.description) {
      toast("Please fill in name, description and price.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: parseFloat(form.price),
          dietary: form.dietary.split(",").map((s) => s.trim()).filter(Boolean),
          allergens: form.allergens.split(",").map((s) => s.trim()).filter(Boolean),
        }),
      });
      if (res.ok) {
        toast("Product created successfully");
        router.push("/admin/products");
      }
    } catch {
      toast("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/products" className="text-muted hover:text-ink transition-colors">
          <ChevronLeft size={20} />
        </Link>
        <div>
          <h1 className="font-serif text-[32px] font-light text-ink">New product</h1>
        </div>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-8 items-start max-lg:grid-cols-1">
        {/* Main fields */}
        <div className="flex flex-col gap-6">
          {/* Basic info */}
          <div className="bg-white border border-dust p-8">
            <h2 className="font-serif text-[18px] font-light mb-6 pb-4 border-b border-dust">Basic information</h2>
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Product name *</label>
                <Input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Tarte au Citron" />
              </div>
              <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">URL slug *</label>
                <Input name="slug" value={form.slug} onChange={handleChange} placeholder="tarte-au-citron" />
              </div>
              <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Short description *</label>
                <Input name="description" value={form.description} onChange={handleChange} placeholder="e.g. Lemon curd, Italian meringue, almond shell" />
              </div>
              <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Full description</label>
                <Textarea name="longDescription" value={form.longDescription} onChange={handleChange} placeholder="Detailed product description for the product page…" />
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white border border-dust p-8">
            <h2 className="font-serif text-[18px] font-light mb-6 pb-4 border-b border-dust">Pricing & serving</h2>
            <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Price (₹) *</label>
                <Input name="price" value={form.price} onChange={handleChange} type="number" placeholder="680" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Unit label</label>
                <Select name="unit" value={form.unit} onChange={handleChange}>
                  <option>/ slice</option>
                  <option>/ piece</option>
                  <option>/ whole cake</option>
                  <option>/ loaf</option>
                  <option>/ box of 6</option>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Serves</label>
                <Input name="serves" value={form.serves} onChange={handleChange} placeholder="serves 2–3" />
              </div>
            </div>
          </div>

          {/* Dietary */}
          <div className="bg-white border border-dust p-8">
            <h2 className="font-serif text-[18px] font-light mb-6 pb-4 border-b border-dust">Dietary & allergens</h2>
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Dietary (comma-separated)</label>
                <Input name="dietary" value={form.dietary} onChange={handleChange} placeholder="vegetarian, eggless, vegan" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Allergens (comma-separated)</label>
                <Input name="allergens" value={form.allergens} onChange={handleChange} placeholder="wheat, eggs, dairy, almonds" />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-5">
          {/* Publish */}
          <div className="bg-white border border-dust p-7">
            <h2 className="font-serif text-[18px] font-light mb-5">Publish</h2>
            <div className="flex flex-col gap-4 mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" name="inStock" checked={form.inStock} onChange={handleChange} className="accent-ink w-4 h-4" />
                <div>
                  <div className="text-[13px] font-medium text-ink">In stock</div>
                  <div className="text-[11px] font-light text-muted">Show as available for purchase</div>
                </div>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} className="accent-ink w-4 h-4" />
                <div>
                  <div className="text-[13px] font-medium text-ink">Featured</div>
                  <div className="text-[11px] font-light text-muted">Show on homepage bestsellers</div>
                </div>
              </label>
            </div>
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full py-3.5 bg-ink text-white text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-[#3A3430] transition-colors disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save product"}
            </button>
          </div>

          {/* Category */}
          <div className="bg-white border border-dust p-7">
            <h2 className="font-serif text-[18px] font-light mb-5">Organisation</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Category</label>
                <Select name="category" value={form.category} onChange={handleChange}>
                  <option value="signature-cakes">Signature cakes</option>
                  <option value="french-pastries">French pastries</option>
                  <option value="bread-viennoiserie">Bread & viennoiserie</option>
                  <option value="tarts-petits-fours">Tarts & petits fours</option>
                  <option value="seasonal">Seasonal</option>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Badge (optional)</label>
                <Select name="badge" value={form.badge} onChange={handleChange}>
                  <option value="">None</option>
                  <option value="New">New</option>
                  <option value="Bestseller">Bestseller</option>
                  <option value="Seasonal">Seasonal</option>
                  <option value="Limited">Limited</option>
                </Select>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="bg-white border border-dust p-7">
            <h2 className="font-serif text-[18px] font-light mb-5">Product image</h2>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Image URL</label>
              <Input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="https://images.unsplash.com/…" />
            </div>
            {form.imageUrl && (
              <div className="mt-4 aspect-[4/3] relative overflow-hidden bg-blush">
                <img src={form.imageUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
