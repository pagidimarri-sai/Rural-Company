import { useLocation, Link } from "react-router-dom";

export default function SuccessPage() {
 

  const location = useLocation();
const order = location.state?.order;


  if (!order) {
    return <p>No order found.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4 text-green-600">Order Confirmed!</h1>
      <p className="mb-2">Order ID: <strong>{order._id}</strong></p>
      <p className="mb-2">Slot: {order.slot}</p>
      <p className="mb-4">Amount Paid: ₹{order.totalAmount + order.tip}</p>

      <h2 className="text-lg font-semibold mb-2">Items:</h2>
      <ul className="list-disc ml-5 mb-6 text-sm text-gray-700">
{order.cartItems.map((item: { name: string; quantity: number }, i: number) => (
          <li key={i}>{item.name} × {item.quantity}</li>
        ))}
      </ul>

      <Link to="/" className="text-purple-600 hover:underline">Back to home</Link>
    </div>
  );
}
