"use client";

import { useCartStore } from "@/lib/cart-store";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCartStore();

  const total = subtotal();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-ink/50 z-[300]"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 w-[440px] h-screen bg-white z-[400] flex flex-col transition-transform duration-300 shadow-[-8px_0_40px_rgba(0,0,0,0.1)]",
          isOpen ? "translate-x-0" : "translate-x-full",
          "max-sm:w-screen"
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        {/* Head */}
        <div className="flex items-center justify-between px-8 py-7 border-b border-dust">
          <span className="font-serif text-2xl font-light text-ink">
            Your order
          </span>
          <button
            onClick={closeCart}
            className="text-ink/60 hover:text-ink transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-10">
              <ShoppingBag
                size={48}
                strokeWidth={1}
                className="text-dust"
              />
              <span className="font-serif text-xl font-light text-muted">
                Your cart is empty
              </span>
              <span className="text-sm text-dust leading-relaxed">
                Add something delicious
                <br />
                from our collection.
              </span>
            </div>
          ) : (
            <div className="flex flex-col">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.flavour}`}
                  className="flex gap-4 py-5 border-b border-dust first:pt-0"
                >
                  {/* Image */}
                  <div className="w-18 h-18 bg-blush flex-shrink-0 overflow-hidden relative w-[72px] h-[72px]">
                    <Image
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="font-serif text-base font-light text-ink mb-1">
                      {item.product.name}
                    </div>
                    {(item.size || item.flavour) && (
                      <div className="text-xs text-muted mb-2">
                        {[item.size, item.flavour].filter(Boolean).join(" · ")}
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      {/* Qty */}
                      <div className="flex items-center border border-dust">
                        <button
                          className="w-[28px] h-[28px] flex items-center justify-center text-ink hover:bg-blush transition-colors text-sm"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          aria-label="Decrease"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-[28px] text-center text-sm font-light">
                          {item.quantity}
                        </span>
                        <button
                          className="w-[28px] h-[28px] flex items-center justify-center text-ink hover:bg-blush transition-colors"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          aria-label="Increase"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="font-serif text-base font-light text-ink">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>

                    <button
                      className="text-[11px] text-muted underline mt-2 hover:text-ink transition-colors"
                      onClick={() => removeItem(item.product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-8 py-6 border-t border-dust">
            {/* Promo */}
            <div className="flex gap-2 mb-5">
              <input
                className="flex-1 px-3.5 py-2.5 border border-dust bg-cream text-sm font-light outline-none focus:border-gold transition-colors"
                placeholder="Gift or promo code"
              />
              <button className="px-4 py-2.5 border border-dust text-[11px] font-medium tracking-[0.06em] uppercase hover:bg-ink hover:text-white hover:border-ink transition-all">
                Apply
              </button>
            </div>

            {/* Totals */}
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex justify-between text-sm text-muted">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-sm text-muted">
                <span>Delivery</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-dust mt-1">
                <span className="font-serif text-lg font-light text-ink">
                  Total
                </span>
                <span className="font-serif text-lg font-light text-ink">
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            <Button className="w-full justify-center py-4.5 text-[13px]">
              Proceed to checkout
            </Button>
            <button
              className="w-full py-3 text-[12px] tracking-[0.06em] uppercase text-muted hover:text-ink transition-colors mt-2.5"
              onClick={closeCart}
            >
              Continue browsing
            </button>
          </div>
        )}
      </div>
    </>
  );
}
