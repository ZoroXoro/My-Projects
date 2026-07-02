import { NextResponse } from "next/server";

const orders: Record<string, unknown>[] = [];

export async function GET() {
  return NextResponse.json({ orders, total: orders.length });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, customerName, customerEmail, deliveryAddress } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Order must contain items" }, { status: 400 });
    }

    const total = items.reduce(
      (sum: number, item: { product: { price: number }; quantity: number }) =>
        sum + item.product.price * item.quantity,
      0
    );

    const order = {
      id: `ORD-${Date.now()}`,
      items,
      total,
      customerName,
      customerEmail,
      deliveryAddress,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    orders.push(order);

    return NextResponse.json({ order, message: "Order placed successfully" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
