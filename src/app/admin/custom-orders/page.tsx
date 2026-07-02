"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

type BriefStatus = "pending" | "reviewed" | "confirmed" | "in-progress" | "delivered";

const mockBriefs = [
  { id: "CO-001", name: "Priya Mehta", email: "priya@email.com", phone: "+91 98765 43210", occasion: "Wedding", date: "Dec 15, 2024", guests: "150–200", tiers: "4 tiers", finish: "Smooth buttercream", budget: "₹50,000+", status: "pending" as BriefStatus, brief: "Elegant floral design, blush and gold colour palette. Reference: Pinterest board (will share). Prefer fresh flowers on top.", submittedAt: "2 hours ago" },
  { id: "CO-002", name: "Arjun Kapoor", email: "arjun@email.com", phone: "+91 87654 32109", occasion: "Birthday", date: "Nov 28, 2024", guests: "25–50", tiers: "2 tiers", finish: "Fondant", budget: "₹10,000–₹20,000", status: "reviewed" as BriefStatus, brief: "Football-themed cake for my son's 10th birthday. Blue and white. Fondant jersey on top with his name.", submittedAt: "Yesterday" },
  { id: "CO-003", name: "Neha Singhvi", email: "neha@email.com", phone: "+91 76543 21098", occasion: "Anniversary", date: "Dec 5, 2024", guests: "Up to 10", tiers: "1 tier", finish: "Mirror glaze", budget: "₹5,000–₹10,000", status: "confirmed" as BriefStatus, brief: "Intimate dinner party for 5th anniversary. Rose gold mirror glaze. Raspberry and vanilla flavours.", submittedAt: "3 days ago" },
];

const statusConfig = {
  pending: { label: "Pending review", color: "bg-amber-100 text-amber-700" },
  reviewed: { label: "Reviewed", color: "bg-blue-100 text-blue-700" },
  confirmed: { label: "Confirmed", color: "bg-emerald-100 text-emerald-700" },
  "in-progress": { label: "In progress", color: "bg-purple-100 text-purple-700" },
  delivered: { label: "Delivered", color: "bg-gray-100 text-gray-600" },
};

const nextStatus: Record<BriefStatus, BriefStatus | null> = {
  pending: "reviewed",
  reviewed: "confirmed",
  confirmed: "in-progress",
  "in-progress": "delivered",
  delivered: null,
};

export default function AdminCustomOrdersPage() {
  const [briefs, setBriefs] = useState(mockBriefs);
  const [expanded, setExpanded] = useState<string | null>(null);

  const updateStatus = (id: string, status: BriefStatus) => {
    setBriefs((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
  };

  return (
    <div className="p-10">
      <div className="mb-8">
        <h1 className="font-serif text-[32px] font-light text-ink mb-1">Custom orders</h1>
        <p className="text-sm text-muted font-light">{briefs.length} briefs received</p>
      </div>

      <div className="flex flex-col gap-4">
        {briefs.map((brief) => {
          const config = statusConfig[brief.status];
          const next = nextStatus[brief.status];
          const isExpanded = expanded === brief.id;

          return (
            <div key={brief.id} className="bg-white border border-dust overflow-hidden">
              {/* Header row */}
              <div
                className="flex items-center gap-4 px-7 py-5 cursor-pointer hover:bg-blush/30 transition-colors"
                onClick={() => setExpanded(isExpanded ? null : brief.id)}
              >
                <div className="flex-1 grid grid-cols-[1fr_1fr_1fr_auto] gap-4 items-center max-md:grid-cols-[1fr_1fr] max-sm:grid-cols-1">
                  <div>
                    <div className="text-[13px] font-medium text-ink">{brief.name}</div>
                    <div className="text-[11px] font-light text-muted">{brief.id} · {brief.submittedAt}</div>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-[13px] font-light text-ink">{brief.occasion}</div>
                    <div className="text-[11px] font-light text-muted">{brief.date}</div>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-[13px] font-light text-muted">{brief.tiers} · {brief.finish}</div>
                    <div className="text-[11px] font-light text-muted">{brief.budget}</div>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-medium ${config.color} w-fit`}>
                    {config.label}
                  </span>
                </div>
                {isExpanded ? <ChevronUp size={16} className="text-muted flex-shrink-0" /> : <ChevronDown size={16} className="text-muted flex-shrink-0" />}
              </div>

              {/* Expanded detail */}
              {isExpanded && (
                <div className="border-t border-dust px-7 py-6 bg-blush/20">
                  <div className="grid grid-cols-3 gap-6 mb-6 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {[
                      { label: "Contact", value: `${brief.email}\n${brief.phone}` },
                      { label: "Event details", value: `${brief.occasion} · ${brief.date}\n${brief.guests} guests` },
                      { label: "Cake spec", value: `${brief.tiers} · ${brief.finish}\n${brief.budget}` },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted mb-2">{item.label}</div>
                        <div className="text-[13px] font-light text-ink leading-relaxed whitespace-pre-line">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted mb-2">Design brief</div>
                    <div className="text-[13px] font-light text-ink leading-relaxed bg-white border border-dust p-4">
                      {brief.brief}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    {next && (
                      <button
                        onClick={() => updateStatus(brief.id, next)}
                        className="px-5 py-2.5 bg-ink text-white text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-[#3A3430] transition-colors capitalize"
                      >
                        Mark as {next}
                      </button>
                    )}
                    <a
                      href={`mailto:${brief.email}?subject=Your custom cake brief ${brief.id}`}
                      className="flex items-center gap-2 px-5 py-2.5 border border-dust text-[12px] font-medium text-ink hover:border-ink transition-colors"
                    >
                      <MessageCircle size={14} />
                      Reply via email
                    </a>
                    <a
                      href={`https://wa.me/${brief.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 border border-dust text-[12px] font-medium text-ink hover:border-ink transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
