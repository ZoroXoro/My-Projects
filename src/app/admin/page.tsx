import Link from "next/link";
import { products } from "@/data/products";
import { TrendingUp, Package, ShoppingBag, ClipboardList, ArrowRight } from "lucide-react";

const stats = [
  { label: "Total products", value: "12", change: "+2 this month", icon: Package, color: "text-blue-500" },
  { label: "Pending orders", value: "7", change: "3 custom, 4 standard", icon: ShoppingBag, color: "text-amber-500" },
  { label: "Custom briefs", value: "4", change: "2 awaiting review", icon: ClipboardList, color: "text-purple-500" },
  { label: "This month revenue", value: "₹1,24,800", change: "+18% vs last month", icon: TrendingUp, color: "text-emerald-500" },
];

const recentActivity = [
  { action: "New custom order", detail: "Wedding cake, 3 tiers — Priya M.", time: "2h ago", status: "pending" },
  { action: "Order delivered", detail: "ORD-1234 · Opéra Cake x2", time: "4h ago", status: "done" },
  { action: "Product updated", detail: "Tarte au Citron — price updated", time: "6h ago", status: "info" },
  { action: "New custom order", detail: "Birthday cake, eggless — Rahul K.", time: "Yesterday", status: "pending" },
  { action: "Low stock alert", detail: "Sourdough Miche — 2 left", time: "Yesterday", status: "warning" },
];

export default function AdminDashboard() {
  return (
    <div className="p-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-serif text-[32px] font-light text-ink mb-1">Dashboard</h1>
        <p className="text-sm text-muted font-light">Good morning. Here&apos;s what&apos;s happening at Cakers & Cakers.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5 mb-10 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white border border-dust p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.color}`}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
              </div>
              <div className="font-serif text-[28px] font-light text-ink mb-1">{stat.value}</div>
              <div className="text-[12px] font-medium text-ink mb-1">{stat.label}</div>
              <div className="text-[11px] font-light text-muted">{stat.change}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-6 max-lg:grid-cols-1">
        {/* Recent activity */}
        <div className="bg-white border border-dust">
          <div className="flex items-center justify-between px-7 py-5 border-b border-dust">
            <h2 className="font-serif text-[20px] font-light">Recent activity</h2>
            <Link href="/admin/orders" className="text-[12px] text-muted hover:text-ink flex items-center gap-1 transition-colors">
              View all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="divide-y divide-dust">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-4 px-7 py-4">
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                  item.status === "pending" ? "bg-amber-400" :
                  item.status === "done" ? "bg-emerald-400" :
                  item.status === "warning" ? "bg-red-400" : "bg-blue-300"
                }`} />
                <div className="flex-1">
                  <div className="text-[13px] font-medium text-ink">{item.action}</div>
                  <div className="text-[12px] font-light text-muted">{item.detail}</div>
                </div>
                <span className="text-[11px] text-muted flex-shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex flex-col gap-5">
          <div className="bg-white border border-dust p-7">
            <h2 className="font-serif text-[20px] font-light mb-5">Quick actions</h2>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/admin/products/new", label: "Add new product" },
                { href: "/admin/orders", label: "Review pending orders" },
                { href: "/admin/custom-orders", label: "Review custom briefs" },
              ].map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="flex items-center justify-between px-4 py-3 border border-dust text-[13px] text-ink hover:bg-blush transition-colors font-light group"
                >
                  {a.label}
                  <ArrowRight size={13} className="text-muted group-hover:text-ink transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Low stock */}
          <div className="bg-white border border-dust p-7">
            <h2 className="font-serif text-[20px] font-light mb-4">Stock alerts</h2>
            <div className="flex flex-col gap-2.5">
              {products.slice(0, 3).map((p) => (
                <div key={p.id} className="flex items-center justify-between">
                  <span className="text-[13px] font-light text-ink truncate">{p.name}</span>
                  <span className="text-[11px] px-2 py-0.5 bg-emerald-50 text-emerald-600 font-medium ml-2 flex-shrink-0">
                    In stock
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
