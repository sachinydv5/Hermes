import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { AppDispatch} from '@/app/store'
import { fetchOrders } from '@/app/store/orders'
import { RootState } from '@/app/store/rootReducer'
import { useAppSelector } from '@/app/hooks'
import { isUserLoggedIn } from '@/app/store/user'

const RecentOrder = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { orders, loading, error } = useSelector((state: RootState) => state.orders);
  const isLogIn: boolean = useAppSelector(isUserLoggedIn)

  useEffect(() => {
    setIsLoading(true); 
    const fetchData = async () => {
      try {
        //@ts-ignore
        await dispatch(fetchOrders()).unwrap();
      } catch (error) {
        console.error("Error fetching cart products:", error);
      } finally {
        setIsLoading(false);
        setDataFetched(true);
      }
    };

    if (isLogIn) {
      fetchData();
    }
  }, [dispatch, isLogIn]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PAYMENT_SUCCESS":
      case "REACHED":
        return "text-green-500";
      case "PAYMENT_FAILURE":
      case "FAILURE":
      case "ABORTED":
        return "text-red-500";
      case "IN_TRANSIT":
      case "ORDER_PLACED":
        return "text-orange-500";
      default:
        return "text-gray-500";
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b-2 space-y-0 pb-2">
          <CardTitle className="text-base font-semibold">RECENT ORDERS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">Loading orders...</div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b-2 space-y-0 pb-2">
          <CardTitle className="text-base font-semibold">RECENT ORDERS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4 text-red-500">Error loading orders: {error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between border-b-2 space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">RECENT ORDERS</CardTitle>
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.slice(0, 5).map((order) => (
              <TableRow key={order.orderId}>
                <TableCell className="font-medium">#{order.orderId}</TableCell>
                <TableCell>
                  <span className={getStatusColor(order.orderStatus)}>
                    {order.orderStatus}
                  </span>
                </TableCell>
                <TableCell>{new Date(order.lastUpdatedTime).toLocaleString()}</TableCell>
                <TableCell>
                  ${order.totalAmount} ({order.products.length} Products)
                </TableCell>
              </TableRow>
            ))}
            {orders.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No orders found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default RecentOrder;
