import { useSearchParams } from "react-router-dom";

function OrderStatusPage() {
  const [searchParams] = useSearchParams();
  const orderID = searchParams.get("orderID");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Order Details</h1>
      {orderID ? (
        <p className="mt-2">Order ID: <span className="font-mono text-blue-600">{orderID}</span></p>
      ) : (
        <p className="text-red-500 mt-2">No Order ID provided.</p>
      )}
    </div>
  );
}

export default OrderStatusPage;
