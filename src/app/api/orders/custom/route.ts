import { NextResponse } from "next/server";

// In-memory store for demo — replace with DB in production
const customOrders: Record<string, unknown>[] = [];

export async function GET() {
  return NextResponse.json({
    orders: customOrders,
    total: customOrders.length,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    const required = ["name", "phone", "email", "occasion"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const order = {
      id: `CO-${Date.now()}`,
      ...body,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    customOrders.push(order);

    // In production: send email notification, save to DB
    console.log("New custom order:", order.id);

    return NextResponse.json(
      {
        order,
        message: "Custom order submitted successfully",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
