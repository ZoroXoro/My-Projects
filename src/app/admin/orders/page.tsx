"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/utils";
import { Eye, CheckCircle, Clock, Truck, Package } from "lucide-react";

type OrderStatus = "pending" | "confirmed" | "preparing" | "ready" | "delivered";

const mockOrders = [
  { id: "ORD-1847", customer: "Arjun Kapoor", email: "arjun@email.com", items: "Croissant Feuilleté x4, Opéra Cake x1", total: 1640, status: "pending" as OrderStatus, date: "Today, 9:42am" },
  { id: "ORD-1846", customer: "Priya Mehta", email: "priya@email.com", items: "Tarte au Citron x2, Dark Chocolate Tart x1", total: 1900, status: "confirmed" as OrderStatus, date: "Today, 8:15am" },
  { id: "ORD-1845", customer: "Neha Singhvi", email: "neha@email.com", items: "Rose & Raspberry Entremets x1", total: 1850, status: "preparing" as OrderStatus, date: "Yesterday, 3:20pm" },
  { id: "ORD-1844", customer: "Rahul Kumar", email: "rahul@email.com", items: "Sourdough Miche x2, Pain au Chocolat x3", total: 1360, status: "ready" as OrderStatus, date: "Yesterday, 11:10am" },
  { id: "ORD-1843", customer: "Ananya Sharma", email: "ananya@email.com", items: "Earl Grey Chiffon x1, Fraisier x1", total: 1600, status: "delivered" as OrderStatus, date: "2 days ago" },
];

const statusConfig = {
  pending: { label: "Pending", color: "bg-amber-100 text-amber-700", icon: Clock },
  confirmed: { label: "Confirmed", color: "bg-blue-100 text-blue-700", icon: CheckCircle },
  preparing: { label: "Preparing", color: "bg-purple-100 text-purple-700", icon: Package },
  ready: { label: "Ready", color: "bg-emerald-100 text-emerald-700", icon: CheckCircle },
  delivered: { label: "Delivered", color: "bg-gray-100 text-gray-600", icon: Truck },
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(mockOrders);
  const [filter, setFilter] = useState<"all" | OrderStatus>("all");

  const filtered = filter === "all" ? orders : orders.filter((o) => o.status === filter);

  const updateStatus = (id: string, newStatus: OrderStatus) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
  };

  const nextStatus: Record<OrderStatus, OrderStatus | null> = {
    pending: "confirmed",
    confirmed: "preparing",
    preparing: "ready",
    ready: "delivered",
    delivered: null,
  };

  return (
    <div className="p-10">
      <div className="mb-8">
        <h1 className="font-serif text-[32px] font-light text-ink mb-1">Orders</h1>
        <p className="text-sm text-muted font-light">{orders.length} total orders</p>
      </div>

      {/* Status filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(["all", "pending", "confirmed", "preparing", "ready", "delivered"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 text-[12px] font-medium border transition-all capitalize ${
              filter === s ? "bg-ink text-white border-ink" : "border-dust text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {s === "all" ? "All orders" : s}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border border-dust overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dust">
              <th className="text-left px-6 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Order</th>
              <th className="text-left px-6 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted hidden md:table-cell">Customer</th>
              <th className="text-left px-6 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted hidden lg:table-cell">Items</th>
              <th className="text-left px-6 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Total</th>
              <th className="text-left px-6 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Status</th>
              <th className="text-right px-6 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dust">
            {filtered.map((order) => {
              const config = statusConfig[order.status];
              const Icon = config.icon;
              const next = nextStatus[order.status];
              return (
                <tr key={order.id} className="hover:bg-blush/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-[13px] font-medium text-ink">{order.id}</div>
                    <div className="text-[11px] font-light text-muted">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <div className="text-[13px] font-medium text-ink">{order.customer}</div>
                    <div className="text-[11px] font-light text-muted">{order.email}</div>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <div className="text-[12px] font-light text-muted max-w-[200px] truncate">{order.items}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-serif text-[15px] font-light text-ink">{formatPrice(order.total)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium ${config.color}`}>
                      <Icon size={11} />
                      {config.label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      {next && (
                        <button
                          onClick={() => updateStatus(order.id, next)}
                          className="px-3 py-1.5 text-[11px] font-medium border border-dust hover:border-ink hover:bg-ink hover:text-white transition-all capitalize"
                        >
                          Mark as {next}
                        </button>
                      )}
                      <button className="text-muted hover:text-ink transition-colors p-1">
                        <Eye size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="font-serif text-2xl font-light text-dust">No orders</p>
          </div>
        )}
      </div>
    </div>
  );
}
