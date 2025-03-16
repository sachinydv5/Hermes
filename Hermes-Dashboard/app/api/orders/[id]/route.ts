import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const cookieStore = cookies()
  const token = cookieStore.get("auth-token")

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  try {
    const { status } = await request.json()
    const orderId = params.id

    // Forward the request to the actual API
    const response = await fetch(`http://localhost:3002/order/${orderId}/status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify({ status: status.toUpperCase() }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return NextResponse.json(
        { message: errorData.message || "Failed to update order status" },
        { status: response.status },
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ message: "Failed to update order status" }, { status: 500 })
  }
}

