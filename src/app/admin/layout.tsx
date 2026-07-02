"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingBag, Settings, ClipboardList, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { href: "/admin/custom-orders", label: "Custom orders", icon: ClipboardList },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#F5F4F2] flex">
      {/* Sidebar */}
      <aside className="w-[240px] bg-ink flex flex-col flex-shrink-0 fixed top-[72px] h-[calc(100vh-72px)]">
        <div className="px-6 py-7 border-b border-white/10">
          <Link href="/" className="font-serif text-[20px] font-medium text-white">
            Cakers<span className="text-gold"> & Cakers</span>
          </Link>
          <div className="text-[10px] font-light tracking-[0.1em] uppercase text-white/30 mt-1">
            Admin panel
          </div>
        </div>

        <nav className="flex-1 py-6 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded text-[13px] font-light mb-1 transition-all",
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon size={15} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-6 py-5 border-t border-white/10">
          <Link
            href="/"
            className="text-[12px] font-light text-white/30 hover:text-white/60 transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-[240px] min-h-screen pt-[72px]">
        {children}
      </main>
    </div>
  );
}
