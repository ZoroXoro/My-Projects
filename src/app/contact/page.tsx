"use client";

import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { toast } from "@/components/ui/toast-provider";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

const hours = [
  { day: "Tuesday – Friday", time: "8am – 7pm" },
  { day: "Saturday", time: "8am – 8pm" },
  { day: "Sunday", time: "9am – 4pm" },
  { day: "Monday", time: "Closed", closed: true },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "General enquiry", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      toast("Please fill in all required fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast("Message sent. We'll reply within 24 hours.");
      setForm({ name: "", email: "", subject: "General enquiry", message: "" });
      setSending(false);
    }, 800);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-blush pt-[calc(72px+60px)] pb-20">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <h1 className="font-serif text-[clamp(40px,5vw,68px)] font-light leading-[1.05] mb-4">
            Come find us
            <br />
            <em className="text-gold">in Bandra.</em>
          </h1>
          <p className="text-[15px] font-light text-muted max-w-[400px] leading-[1.7]">
            Walk-ins welcome Tuesday through Sunday, 8am–7pm. WhatsApp is faster
            than a call on weekends.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 max-md:px-6">
          <div className="grid grid-cols-[2fr_3fr] gap-16 max-md:grid-cols-1 max-md:gap-12">
            {/* Info */}
            <div>
              <div className="flex flex-col">
                {/* Address */}
                <div className="py-7 border-b border-dust first:pt-0">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={13} className="text-gold" />
                    <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold">
                      Address
                    </span>
                  </div>
                  <div className="font-serif text-[18px] font-light leading-[1.5]">
                    14, Hill Road, Bandra West,
                    <br />
                    Mumbai – 400 050
                  </div>
                </div>

                {/* Hours */}
                <div className="py-7 border-b border-dust">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={13} className="text-gold" />
                    <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold">
                      Hours
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className={`flex justify-between text-[13px] font-light ${
                          h.closed ? "text-muted/50" : "text-ink"
                        }`}
                      >
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="py-7 border-b border-dust">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone size={13} className="text-gold" />
                    <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold">
                      Contact
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="mailto:orders@maisondoree.in"
                      className="flex items-center gap-2 text-[15px] font-serif font-light text-ink hover:text-gold transition-colors"
                    >
                      <Mail size={14} className="text-muted" />
                      orders@maisondoree.in
                    </a>
                    <a
                      href="https://wa.me/919876543210"
                      className="flex items-center gap-2 text-[15px] font-serif font-light text-ink hover:text-gold transition-colors"
                    >
                      <Phone size={14} className="text-muted" />
                      +91 98765 43210 (WhatsApp)
                    </a>
                  </div>
                </div>

                {/* Custom orders */}
                <div className="py-7">
                  <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-3">
                    Custom orders
                  </div>
                  <div className="font-serif text-[15px] font-light leading-[1.6]">
                    For cakes and large events, please use our{" "}
                    <Link
                      href="/custom"
                      className="text-gold hover:underline"
                    >
                      order form →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-blush p-11 max-sm:p-7">
              <h2 className="font-serif text-[22px] font-light mb-7 pb-5 border-b border-dust">
                Send a message
              </h2>
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Name *</label>
                  <Input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="bg-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Email *</label>
                  <Input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email" className="bg-white" />
                </div>
                <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                  <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Subject</label>
                  <Select name="subject" value={form.subject} onChange={handleChange} className="bg-white">
                    <option>General enquiry</option>
                    <option>Custom cake</option>
                    <option>Wholesale / corporate</option>
                    <option>Press</option>
                    <option>Feedback</option>
                  </Select>
                </div>
                <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                  <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted">Message *</label>
                  <Textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help?" className="bg-white" />
                </div>
                <div className="col-span-2 max-sm:col-span-1">
                  <button
                    onClick={handleSubmit}
                    disabled={sending}
                    className="px-10 py-4 bg-ink text-white text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-[#3A3430] transition-colors disabled:opacity-60"
                  >
                    {sending ? "Sending…" : "Send message"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="bg-ink h-[300px] flex flex-col items-center justify-center">
        <div className="font-serif text-[28px] font-light italic text-white/28 text-center">
          Bandra West, Mumbai
        </div>
        <div className="text-[12px] font-light tracking-[0.1em] uppercase text-white/18 mt-2 text-center">
          14 Hill Road · Near Mount Mary Church
        </div>
      </div>

      <Footer />
    </>
  );
}
