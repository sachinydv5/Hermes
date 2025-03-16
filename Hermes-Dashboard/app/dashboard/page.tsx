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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">Order Dashboard</h1>
        <form action="/api/auth/logout" method="POST" className="w-full sm:w-auto">
          <button
            type="submit"
            className="w-full sm:w-auto rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
          >
            Logout
          </button>
        </form>
      </div>
      <OrderTable orders={orders} />
    </div>
  )
}
