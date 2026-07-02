"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/cart-store";
import { toast } from "@/components/ui/toast-provider";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast(`${product.name} added to order`);
  };

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-blush mb-5">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.badge && (
          <div className="absolute top-3.5 left-3.5 z-10">
            <Badge variant={product.badge === "New" ? "gold" : "default"}>
              {product.badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-1">
        <div className="font-serif text-[20px] font-normal text-ink mb-1.5">
          {product.name}
        </div>
        <div className="text-[13px] font-light text-muted leading-relaxed mb-3.5">
          {product.description}
        </div>
        <div className="flex items-center justify-between">
          <span className="font-serif text-[18px] font-normal text-ink">
            {formatPrice(product.price)}{" "}
            <span className="text-[12px] font-sans font-light text-muted ml-1">
              {product.unit}
            </span>
          </span>
          <button
            onClick={handleAdd}
            className="px-5 py-2 border border-dust text-[11px] font-medium tracking-[0.06em] uppercase text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-300 flex items-center gap-1.5"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus size={12} />
            Add
          </button>
        </div>
      </div>
    </Link>
  );
}
