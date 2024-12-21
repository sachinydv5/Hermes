import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Order {
  id: string
  status: "IN PROGRESS" | "COMPLETED" | "CANCELLED" | "Returned"
  date: string
  total: string
  products: number
}

const orders: Order[] = [
  {
    id: "#96459761",
    status: "IN PROGRESS",
    date: "Dec 30, 2019 05:18",
    total: "$1,500",
    products: 5,
  },
  {
    id: "#71667167",
    status: "COMPLETED",
    date: "Feb 2, 2019 19:28",
    total: "$80",
    products: 1,
  },
  {
    id: "#95214362",
    status: "CANCELLED",
    date: "Mar 20, 2019 23:14",
    total: "$160",
    products: 3,
  },
  // Add more orders as needed
]
const RecentOrder = () => {
  return (
    <Card>
    <CardHeader className="flex flex-row items-center justify-between border-b-2 space-y-0 pb-2">
      <CardTitle className="text-base font-semibold">RECENT ORDER</CardTitle>
      <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
        View All
      </Button>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ORDER ID</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead>TOTAL</TableHead>
            <TableHead>ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>
                <span
                  className={
                    order.status === "COMPLETED"
                      ? "text-green-500"
                      : order.status === "CANCELLED"
                      ? "text-red-500"
                      : order.status === "IN PROGRESS"
                      ? "text-orange-500"
                      : "text-gray-500"
                  }
                >
                  {order.status}
                </span>
              </TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                {order.total} ({order.products} Products)
              </TableCell>
              <TableCell>
                <Button variant="link" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
  )
}

export default RecentOrder
