"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { toast } from "@/hooks/use-toast"
import type { LegacyOrder } from "@/lib/types"
import { updateOrderStatus } from "@/lib/orders"

interface OrderTableProps {
  orders: LegacyOrder[]
}

export default function OrderTable({ orders: initialOrders }: OrderTableProps) {
  const [orders, setOrders] = useState<LegacyOrder[]>(initialOrders)
  const [selectedOrder, setSelectedOrder] = useState<LegacyOrder | null>(null)
  const [newStatus, setNewStatus] = useState<string>("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  const handleStatusChange = (orderId: string, status: string) => {
    const order = orders.find((o) => o.id === orderId)
    if (order) {
      setSelectedOrder(order)
      setNewStatus(status)
      setIsDialogOpen(true)
    }
  }

  const confirmStatusUpdate = async () => {
    if (!selectedOrder || !newStatus) return

    setIsUpdating(true)
    try {
      await updateOrderStatus(selectedOrder.id, newStatus)

      // Update local state
      setOrders(orders.map((order) => (order.id === selectedOrder.id ? { ...order, status: newStatus } : order)))

      toast({
        title: "Status updated",
        description: `Order #${selectedOrder.id} status changed to ${newStatus}`,
      })
    } catch (error) {
      toast({
        title: "Update failed",
        description: "There was an error updating the order status.",
        variant: "destructive",
      })
    } finally {
      setIsUpdating(false)
      setIsDialogOpen(false)
      setSelectedOrder(null)
      setNewStatus("")
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  return (
    <>
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  No orders found
                </TableCell>
              </TableRow>
            ) : (
              orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                  <TableCell>{order.total ? formatCurrency(order.total) : "N/A"}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        order.status === "REACHED" || order.status === "PAYMENT_SUCCESS"
                          ? "bg-green-100 text-green-800"
                          : order.status === "IN_TRANSIT" || order.status === "ORDER_PLACED"
                          ? "bg-blue-100 text-blue-800"
                          : order.status === "CREATED" || order.status === "PAYMENT_FAILURE"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "FAILURE" || order.status === "ABORTED"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Select value={order.status.toUpperCase()} onValueChange={(value) => handleStatusChange(order.id, value)}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Update status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CREATED">Created</SelectItem>
                          <SelectItem value="ORDER_PLACED">Order Placed</SelectItem>
                          <SelectItem value="IN_TRANSIT">In Transit</SelectItem>
                          <SelectItem value="REACHED">Reached</SelectItem>
                          <SelectItem value="PAYMENT_SUCCESS">Payment Success</SelectItem>
                          <SelectItem value="PAYMENT_FAILURE">Payment Failure</SelectItem>
                          <SelectItem value="FAILURE">Failure</SelectItem>
                          <SelectItem value="ABORTED">Aborted</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Status Update</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to change the status of order #{selectedOrder?.id} to {newStatus}?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmStatusUpdate} disabled={isUpdating}>
              {isUpdating ? "Updating..." : "Confirm"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
