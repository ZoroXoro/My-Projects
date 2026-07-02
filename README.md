# Cakers & Cakers — Next.js Patisserie Website

Full-featured artisan bakery website: Next.js 15, Tailwind CSS, Zustand, shadcn/ui.

## Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **State**: Zustand (cart persistence)
- **Images**: Unsplash via next/image
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond + DM Sans

## Pages
- `/` — Homepage
- `/shop` — Product catalog with filters
- `/shop/[slug]` — Product detail page
- `/custom` — Custom cake order form
- `/about` — Brand story & team
- `/contact` — Contact form & hours
- `/admin` — Admin dashboard
- `/admin/products` — Product management
- `/admin/orders` — Order tracking
- `/admin/custom-orders` — Custom brief management

## API Routes
- `GET/POST /api/products`
- `GET/PUT/DELETE /api/products/[id]`
- `GET/POST /api/orders`
- `GET/POST /api/orders/custom`

## Getting Started

```bash
npm install
npm run dev
```

## Production Checklist
- [ ] Database (Supabase / PostgreSQL)
- [ ] Auth for admin (NextAuth / Clerk)
- [ ] Payment gateway (Razorpay)
- [ ] Email (Resend)
- [ ] Image uploads (Cloudinary)
