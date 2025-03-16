import type { Order, OrderStatus, LegacyOrder } from "./types"

// Function to convert API orders to the format expected by the UI
function convertApiOrdersToLegacyFormat(apiOrders: Order[]): LegacyOrder[] {
  return apiOrders.map((order) => ({
    id: order.orderId,
    customerName: order.userEmail,
    date: order.lastUpdatedTime
      ? new Date(order.lastUpdatedTime._seconds * 1000).toISOString()
      : new Date().toISOString(),
    status: order.orderStatus.toLowerCase(),
    total: order.totalAmount / 100, // Assuming amount is in cents
    items: order.products.map((product) => ({
      name: product.name,
      quantity: product.qty,
      price: Number.parseFloat(product.price) / 100, // Assuming price is in cents
    })),
  }))
}

// Fetch orders from the API
export async function getOrders(token?: string): Promise<LegacyOrder[]> {
  try {
    const response = await fetch("https://hermes-backend-pykc.onrender.com/order/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({}),
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch orders: ${response.statusText}`)
    }

    const data = await response.json()
    return convertApiOrdersToLegacyFormat(data.orders)
  } catch (error) {
    console.error("Error fetching orders:", error)
    // Return empty array in case of error
    return []
  }
}

// Update order status via API
export async function updateOrderStatus(orderId: string, status: string): Promise<void> {
  try {
    // Convert UI status to API status format (uppercase)
    const apiStatus = status.toUpperCase() as OrderStatus

    const response = await fetch(`https://hermes-backend-pykc.onrender.com/order/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId: orderId, orderStatus: apiStatus }),
    })

    if (!response.ok) {
      throw new Error(`Failed to update order status: ${response.statusText}`)
    }

    await response.json()
  } catch (error) {
    console.error("Error updating order status:", error)
    throw error
  }
}

