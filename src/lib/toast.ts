"use client";

import { useState, useCallback } from "react";

interface Toast {
  id: string;
  message: string;
}

let toastListeners: ((toast: Toast) => void)[] = [];

export function showToast(message: string) {
  const toast: Toast = { id: Date.now().toString(), message };
  toastListeners.forEach((listener) => listener(toast));
}

export function useToasts() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addListener = useCallback((listener: (toast: Toast) => void) => {
    toastListeners.push(listener);
    return () => {
      toastListeners = toastListeners.filter((l) => l !== listener);
    };
  }, []);

  return { toasts, setToasts, addListener };
}

export function ToastContainer() {
  const { toasts, setToasts, addListener } = useToasts();
  const [visible, setVisible] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  if (typeof window !== "undefined") {
    // subscribe on mount
  }

  return null; // Handled in ToastProvider
}
