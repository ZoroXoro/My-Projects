import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { CartDrawer } from "@/components/layout/cart-drawer";
import { ToastProvider } from "@/components/ui/toast-provider";

export const metadata: Metadata = {
  title: "Cakers & Cakers — Artisan Patisserie",
  description: "Premium patisserie baked with obsessive precision. Custom cakes, French pastries, and artisan bread in Mumbai.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <CartDrawer />
        <ToastProvider />
      </body>
    </html>
  );
}
