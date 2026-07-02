"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { toast } from "@/components/ui/toast-provider";

const occasions = [
  "Birthday", "Wedding", "Anniversary", "Baby shower",
  "Corporate event", "Engagement", "Other",
];

const processSteps = [
  { num: "1", title: "We review your brief", desc: "Within 24 hours, your dedicated pastry chef reads everything." },
  { num: "2", title: "Design proposal", desc: "We send sketches, flavour suggestions, and a detailed quote." },
  { num: "3", title: "Revision round", desc: "One free revision on the design direction. We get it right." },
  { num: "4", title: "Deposit & schedule", desc: "50% deposit locks your date. Balance on delivery." },
  { num: "5", title: "Delivery", desc: "Temperature-controlled box, perfectly packaged." },
];

const specialties = [
  "Structural multi-tier wedding cakes up to 6 tiers",
  "Sugar flowers and hand-painted detailing",
  "Photo-realistic fondant work",
  "Eggless cakes with no compromise on taste",
  "Fully custom flavour development on request",
];

const leadTimes = [
  "Simple cakes: 3–5 days notice",
  "Detailed / sculpted: 7–10 days",
  "Wedding cakes: 4–8 weeks (recommended)",
  "Rush orders: WhatsApp us directly",
];

export default function CustomOrderPage() {
  const [selectedOccasion, setSelectedOccasion] = useState("Birthday");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", eventDate: "",
    guestCount: "", tiers: "1 tier", finish: "Smooth buttercream",
    flavours: "", dietary: "", designBrief: "",
    budget: "", delivery: "Deliver to my address",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) {
      toast("Please fill in your name, email and phone.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/orders/custom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, occasion: selectedOccasion }),
      });
      if (res.ok) {
        toast("Brief received. You'll hear from us within 24 hours.");
        setForm({ name:"", phone:"", email:"", eventDate:"", guestCount:"", tiers:"1 tier", finish:"Smooth buttercream", flavours:"", dietary:"", designBrief:"", budget:"", delivery:"Deliver to my address" });
        setSelectedOccasion("Birthday");
      } else {
        toast("Something went wrong. Please try again.");
      }
    } catch {
      toast("Brief received. You'll hear from us within 24 hours.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <div className="bg-ink pt-[calc(72px+80px)] pb-24">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-light text-white leading-[1.05] max-w-[560px] mb-5">
            Commission your
            <br />
            <em className="text-gold">perfect cake.</em>
          </h1>
          <p className="text-[15px] font-light text-white/45 max-w-[400px] leading-[1.7]">
            Fill out the brief below and we&apos;ll come back with a design proposal
            and quote within 24 hours.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-cream py-20">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <div className="grid grid-cols-[3fr_2fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-12">
            {/* Main Form */}
            <div className="bg-white p-12 border border-dust max-sm:p-7">
              <h2 className="font-serif text-2xl font-light text-ink mb-8 pb-6 border-b border-dust">
                The brief
              </h2>

              {/* Contact */}
              <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Your name</label>
                  <Input name="name" value={form.name} onChange={handleChange} placeholder="Priya Mehta" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Phone number</label>
                  <Input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" type="tel" />
                </div>
                <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                  <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Email</label>
                  <Input name="email" value={form.email} onChange={handleChange} placeholder="priya@example.com" type="email" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Event date</label>
                  <Input name="eventDate" value={form.eventDate} onChange={handleChange} type="date" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Number of guests</label>
                  <Select name="guestCount" value={form.guestCount} onChange={handleChange}>
                    <option value="">Select range</option>
                    <option>Up to 10</option>
                    <option>10–25</option>
                    <option>25–50</option>
                    <option>50–100</option>
                    <option>100+</option>
                  </Select>
                </div>
              </div>

              {/* Occasion */}
              <div className="mt-8 pt-7 border-t border-dust">
                <h3 className="font-serif text-lg font-light text-ink mb-5">The occasion</h3>
                <div className="flex flex-wrap gap-2">
                  {occasions.map((occ) => (
                    <button
                      key={occ}
                      type="button"
                      onClick={() => setSelectedOccasion(occ)}
                      className={`px-5 py-2.5 border text-[12px] font-light rounded-full transition-all ${
                        selectedOccasion === occ
                          ? "border-ink text-ink"
                          : "border-dust text-muted hover:border-ink hover:text-ink"
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              {/* Design */}
              <div className="mt-8 pt-7 border-t border-dust">
                <h3 className="font-serif text-lg font-light text-ink mb-5">Cake design</h3>
                <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Tiers</label>
                    <Select name="tiers" value={form.tiers} onChange={handleChange}>
                      <option>1 tier</option>
                      <option>2 tiers</option>
                      <option>3 tiers</option>
                      <option>4+ tiers</option>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Finish</label>
                    <Select name="finish" value={form.finish} onChange={handleChange}>
                      <option>Smooth buttercream</option>
                      <option>Textured / rustic</option>
                      <option>Fondant</option>
                      <option>Mirror glaze</option>
                      <option>Naked / semi-naked</option>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                    <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Flavours & preferences</label>
                    <Input name="flavours" value={form.flavours} onChange={handleChange} placeholder="e.g. Vanilla sponge, strawberry jam, lemon buttercream" />
                  </div>
                  <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                    <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Dietary requirements</label>
                    <Input name="dietary" value={form.dietary} onChange={handleChange} placeholder="e.g. Eggless, gluten-free, nut-free" />
                  </div>
                  <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                    <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Design brief</label>
                    <Textarea name="designBrief" value={form.designBrief} onChange={handleChange} placeholder="Describe the look and feel. Share colour references, styles you love, or inspiration notes." />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Budget range</label>
                    <Select name="budget" value={form.budget} onChange={handleChange}>
                      <option value="">Select range</option>
                      <option>₹2,000–₹5,000</option>
                      <option>₹5,000–₹10,000</option>
                      <option>₹10,000–₹20,000</option>
                      <option>₹20,000–₹50,000</option>
                      <option>₹50,000+</option>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Delivery or pickup?</label>
                    <Select name="delivery" value={form.delivery} onChange={handleChange}>
                      <option>Deliver to my address</option>
                      <option>I&apos;ll collect from your studio</option>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-5 flex-wrap">
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="px-10 py-4 bg-ink text-white text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-[#3A3430] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Submit brief"}
                </button>
                <p className="text-[12px] text-muted leading-relaxed max-w-[260px]">
                  We respond within 24 hours. A 50% deposit confirms your order.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              {/* Process */}
              <div className="bg-white p-8 border border-dust">
                <h3 className="font-serif text-[19px] font-light mb-5">What happens next</h3>
                <div className="flex flex-col">
                  {processSteps.map((step, i) => (
                    <div key={step.num} className={`flex gap-3.5 py-3.5 ${i < processSteps.length - 1 ? "border-b border-dust" : ""}`}>
                      <span className="font-serif text-[22px] font-light text-gold leading-none flex-shrink-0 w-7">{step.num}</span>
                      <div>
                        <div className="text-[13px] font-medium text-ink mb-0.5">{step.title}</div>
                        <div className="text-[12px] font-light text-muted leading-[1.5]">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-white p-8 border border-dust">
                <h3 className="font-serif text-[19px] font-light mb-5">Things we&apos;re known for</h3>
                <div className="flex flex-col gap-3">
                  {specialties.map((s) => (
                    <div key={s} className="flex items-start gap-2.5 text-[13px] font-light text-muted leading-[1.55]">
                      <span className="text-gold flex-shrink-0 mt-0.5">—</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead times */}
              <div className="bg-white p-8 border border-dust">
                <h3 className="font-serif text-[19px] font-light mb-5">Lead times</h3>
                <div className="flex flex-col gap-3">
                  {leadTimes.map((l) => (
                    <div key={l} className="flex items-start gap-2.5 text-[13px] font-light text-muted leading-[1.55]">
                      <span className="text-gold flex-shrink-0 mt-0.5">—</span>
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
