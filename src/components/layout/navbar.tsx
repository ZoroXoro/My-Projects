"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { totalItems, openCart } = useCartStore();
  const itemCount = totalItems();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/custom", label: "Custom cakes" },
    { href: "/about", label: "Our story" },
    { href: "/contact", label: "Visit us" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] h-[72px] bg-cream/92 backdrop-blur-md transition-all duration-300",
          scrolled && "border-b border-dust"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-12 h-full flex items-center justify-between max-md:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-[22px] font-medium tracking-[0.04em] text-ink"
          >
            Cakers<span className="text-gold"> & Cakers</span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-9 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] font-light tracking-[0.06em] uppercase text-muted hover:text-ink transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/shop"
              className="text-ink/70 hover:text-ink transition-opacity p-1.5"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </Link>

            <button
              onClick={openCart}
              className="relative text-ink/70 hover:text-ink transition-colors p-1.5"
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white rounded-full text-[9px] font-medium flex items-center justify-center font-sans">
                  {itemCount}
                </span>
              )}
            </button>

            <Link
              href="/custom"
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-ink text-white text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-[#3A3430] transition-colors"
            >
              Order a cake
            </Link>

            <button
              className="md:hidden text-ink p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-ink/40 z-[150]"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Nav Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 w-72 h-screen bg-white z-[200] flex flex-col gap-7 px-10 pt-20 pb-10 transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-6 right-6 text-ink"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-serif text-[28px] font-light text-ink"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/custom"
          onClick={() => setMobileOpen(false)}
          className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-ink text-white text-[12px] font-medium tracking-[0.08em] uppercase"
        >
          Order a cake
        </Link>
      </div>
    </>
  );
}
