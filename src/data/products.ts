import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Tarte au Citron",
    slug: "tarte-au-citron",
    description: "Lemon curd, Italian meringue, almond shell",
    longDescription:
      "Light almond pastry shell filled with an intensely bright lemon curd, finished with soft Italian meringue torched to order. The balance of sharp and sweet is the point.",
    price: 680,
    unit: "/ slice",
    category: "tarts-petits-fours",
    badge: "New",
    imageUrl:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=80",
    serves: "serves 2",
    dietary: ["vegetarian"],
    allergens: ["wheat", "eggs", "dairy", "almonds"],
    occasions: ["everyday", "gifting", "anniversary"],
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Opéra Cake",
    slug: "opera-cake",
    description: "Espresso buttercream, dark ganache, almond joconde",
    longDescription:
      "Seven alternating layers of coffee-soaked almond joconde, espresso buttercream and 70% dark chocolate ganache. A French classic, made with obsessive precision.",
    price: 920,
    unit: "/ slice",
    category: "signature-cakes",
    badge: "Bestseller",
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80",
    serves: "serves 4",
    dietary: ["vegetarian"],
    allergens: ["wheat", "eggs", "dairy", "almonds"],
    occasions: ["birthday", "anniversary", "gifting"],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Rose & Raspberry Entremets",
    slug: "rose-raspberry-entremets",
    description: "Raspberry mousse, lychee insert, mirror glaze",
    longDescription:
      "A multi-layered mousse cake built around a raspberry compote and lychee insert, encased in a glossy mirror glaze and crowned with crystallised rose petals.",
    price: 1850,
    unit: "/ whole cake",
    category: "signature-cakes",
    imageUrl:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=80",
    serves: "serves 6–8",
    dietary: ["vegetarian"],
    allergens: ["wheat", "eggs", "dairy"],
    occasions: ["birthday", "wedding", "anniversary"],
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Croissant Feuilleté",
    slug: "croissant-feuillette",
    description: "72-hour lamination, French butter, sea salt",
    longDescription:
      "72 hours of cold fermentation and lamination. 27 layers of French AOP butter. Caramelised and deeply bronzed at the base, feather-light at the tip. Best before 2pm.",
    price: 180,
    unit: "/ piece",
    category: "bread-viennoiserie",
    imageUrl:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80",
    serves: "per piece",
    dietary: ["vegetarian"],
    allergens: ["wheat", "eggs", "dairy"],
    occasions: ["everyday"],
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Earl Grey Chiffon",
    slug: "earl-grey-chiffon",
    description: "Bergamot sponge, mascarpone, tea glaze",
    longDescription:
      "A delicate tea-infused chiffon sponge layered with whipped mascarpone cream and finished with a bergamot and honey glaze. Subtle. Refined. Entirely its own thing.",
    price: 760,
    unit: "/ slice",
    category: "signature-cakes",
    badge: "New",
    imageUrl:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&auto=format&fit=crop&q=80",
    serves: "serves 2–3",
    dietary: ["vegetarian"],
    allergens: ["wheat", "eggs", "dairy"],
    occasions: ["everyday", "gifting", "birthday"],
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    name: "Dark Chocolate Tart",
    slug: "dark-chocolate-tart",
    description: "70% Valrhona ganache, pâte sablée, fleur de sel",
    longDescription:
      "A barely-set 70% Valrhona ganache filling in a crisp pâte sablée shell. Finished with a pinch of fleur de sel. Served at room temperature; eaten in deliberate silence.",
    price: 540,
    unit: "/ slice",
    category: "tarts-petits-fours",
    imageUrl:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80",
    serves: "serves 1–2",
    dietary: ["vegetarian"],
    allergens: ["wheat", "eggs", "dairy"],
    occasions: ["everyday", "gifting", "anniversary"],
    inStock: true,
    featured: true,
  },
  {
    id: "7",
    name: "Pain au Chocolat",
    slug: "pain-au-chocolat",
    description: "Valrhona chocolate, laminated dough, hand-rolled",
    longDescription:
      "Two Valrhona chocolate batons folded into hand-laminated dough. The pull-apart moment is the entire point. Eaten warm, ideally with nothing else on your plate.",
    price: 200,
    unit: "/ piece",
    category: "bread-viennoiserie",
    imageUrl:
      "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=800&auto=format&fit=crop&q=80",
    serves: "per piece",
    dietary: ["vegetarian"],
    allergens: ["wheat", "eggs", "dairy"],
    occasions: ["everyday"],
    inStock: true,
    featured: false,
  },
  {
    id: "8",
    name: "Fraisier",
    slug: "fraisier",
    description: "Seasonal strawberries, pistachio génoise, mousseline",
    longDescription:
      "A classic French strawberry cake: pistachio-perfumed génoise layered with mousseline cream and halved seasonal strawberries, glazed and finished clean.",
    price: 840,
    unit: "/ slice",
    category: "signature-cakes",
    imageUrl:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80",
    serves: "serves 2–3",
    dietary: ["vegetarian"],
    allergens: ["wheat", "eggs", "dairy", "pistachios"],
    occasions: ["birthday", "anniversary", "everyday"],
    inStock: true,
    featured: false,
  },
  {
    id: "9",
    name: "Sourdough Miche",
    slug: "sourdough-miche",
    description: "72-hour cold ferment, high-extraction flour, stone-baked",
    longDescription:
      "Three-day cold fermentation. Open crumb, dark blistered crust, and a depth of flavour that only time can produce. Baked at 5am. Best eaten the day it arrives.",
    price: 380,
    unit: "/ loaf",
    category: "bread-viennoiserie",
    imageUrl:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=800&auto=format&fit=crop&q=80",
    serves: "whole loaf",
    dietary: ["vegetarian", "vegan"],
    allergens: ["wheat"],
    occasions: ["everyday", "gifting"],
    inStock: true,
    featured: false,
  },
  {
    id: "10",
    name: "Paris-Brest",
    slug: "paris-brest",
    description: "Choux ring, hazelnut praline, diplomat cream",
    longDescription:
      "A generous choux ring split and filled with roasted hazelnut praline and diplomat cream. Named after a cycling race; built for people who sit still and eat slowly.",
    price: 720,
    unit: "/ slice",
    category: "french-pastries",
    imageUrl:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop&q=80",
    serves: "serves 2",
    dietary: ["vegetarian"],
    allergens: ["wheat", "eggs", "dairy", "hazelnuts"],
    occasions: ["everyday", "anniversary", "birthday"],
    inStock: true,
    featured: false,
  },
  {
    id: "11",
    name: "Mille-Feuille",
    slug: "mille-feuille",
    description: "Puff pastry, vanilla diplomat, fondant glaze",
    longDescription:
      "Three layers of shatteringly crisp rough-puff pastry, two layers of Tahitian vanilla diplomat cream. Topped with fondant and chocolate feathering. Ordered fresh, eaten same day.",
    price: 580,
    unit: "/ slice",
    category: "french-pastries",
    badge: "Seasonal",
    imageUrl:
      "https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&auto=format&fit=crop&q=80",
    serves: "serves 2",
    dietary: ["vegetarian"],
    allergens: ["wheat", "eggs", "dairy"],
    occasions: ["everyday", "gifting"],
    inStock: true,
    featured: false,
  },
  {
    id: "12",
    name: "Pistachio Financier",
    slug: "pistachio-financier",
    description: "Brown butter, pistachio praline, gold leaf",
    longDescription:
      "Dense, moist financiers made with brown butter and pistachio praline paste. Topped with a single shard of gold leaf. Six to a box. Appropriate for any occasion.",
    price: 480,
    unit: "/ box of 6",
    category: "tarts-petits-fours",
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=80",
    serves: "box of 6",
    dietary: ["vegetarian"],
    allergens: ["wheat", "eggs", "dairy", "pistachios"],
    occasions: ["gifting", "everyday"],
    inStock: true,
    featured: false,
  },
];

export const categories = [
  { id: "signature-cakes", label: "Signature cakes", count: 4 },
  { id: "french-pastries", label: "French pastries", count: 3 },
  { id: "bread-viennoiserie", label: "Bread & viennoiserie", count: 3 },
  { id: "tarts-petits-fours", label: "Tarts & petits fours", count: 3 },
  { id: "seasonal", label: "Seasonal specials", count: 2 },
] as const;

export const categoryImages = {
  "signature-cakes":
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80",
  "french-pastries":
    "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&auto=format&fit=crop&q=80",
  "bread-viennoiserie":
    "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=600&auto=format&fit=crop&q=80",
  "tarts-petits-fours":
    "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80",
  seasonal:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80",
};

export const getFeaturedProducts = () => products.filter((p) => p.featured);
export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);
