import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import OrderTable from "@/components/order-table"
import { getOrders } from "@/lib/orders"

export default async function DashboardPage() {
  const cookieStore = cookies()
  const token = cookieStore.get("auth-token")

  if (!token) {
    redirect("/login")
  }

  const orders = await getOrders(token.value)

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Order Dashboard</h1>
        <form action="/api/auth/logout" method="POST">
          <button
            type="submit"
            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
          >
            Logout
          </button>
        </form>
      </div>
      <OrderTable orders={orders} />
    </div>
  )
}

