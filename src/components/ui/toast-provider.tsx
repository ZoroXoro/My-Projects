"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Toast {
  id: string;
  message: string;
}

let listeners: Array<(toast: Toast) => void> = [];

export function toast(message: string) {
  const t: Toast = { id: Date.now().toString(), message };
  listeners.forEach((l) => l(t));
}

export function ToastProvider() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (t: Toast) => {
      setToasts((prev) => [...prev, t]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((p) => p.id !== t.id));
      }, 2800);
    };
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[500] flex flex-col gap-2 items-center">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="bg-ink text-white px-7 py-3.5 font-sans text-sm font-light whitespace-nowrap animate-fade-in"
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
