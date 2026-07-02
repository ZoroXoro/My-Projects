export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  unit: string;
  category: ProductCategory;
  badge?: "New" | "Bestseller" | "Seasonal" | "Limited";
  imageUrl: string;
  serves: string;
  dietary: string[];
  allergens: string[];
  occasions: string[];
  inStock: boolean;
  featured: boolean;
}

export type ProductCategory =
  | "signature-cakes"
  | "french-pastries"
  | "bread-viennoiserie"
  | "tarts-petits-fours"
  | "seasonal";

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  flavour?: string;
}

export interface CustomOrder {
  id?: string;
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  guestCount: string;
  occasion: string;
  tiers: string;
  finish: string;
  flavours: string;
  dietary: string;
  designBrief: string;
  budget: string;
  delivery: string;
  status?: "pending" | "reviewed" | "confirmed" | "in-progress" | "delivered";
  createdAt?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "pending" | "confirmed" | "preparing" | "ready" | "delivered";
  createdAt: string;
  customerName: string;
  customerEmail: string;
  deliveryAddress?: string;
}
