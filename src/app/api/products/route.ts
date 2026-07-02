import { NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");
  const search = searchParams.get("search");

  let filtered = [...products];

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (featured === "true") {
    filtered = filtered.filter((p) => p.featured);
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({
    products: filtered,
    total: filtered.length,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // In production, validate and save to DB here
    const newProduct = {
      id: Date.now().toString(),
      ...body,
      inStock: true,
    };

    return NextResponse.json(
      { product: newProduct, message: "Product created successfully" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
