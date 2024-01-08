import Header from "@/components/Header";
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import axios from 'axios';

export default function Yourorder() {
    const [orders, setOrders] = useState([]);
    const { data: session } = useSession();
 

    useEffect(() => {
        if (session?.user?.email) {
          axios
            .get(`/api/getUserOrders?userEmail=${session.user.email}`)
            .then(response => {
              setOrders(response.data);
              console.log(response.data); 
            })
            .catch(error => {
              console.error('Error fetching user orders:', error);
            });
        }
      }, [session]);
    console.log(orders)
  return (
    <>
    
    <Header/>
    <div className="h-[100vh] ">
      <h2 className="text-2xl text-center">Order</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th>Date</th>
              <th>Paid</th>
              <th>Recipients</th>
              <th>Address</th>
              <th>Products</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 &&
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{new Date(order.createdAt).toUTCString()}</td>
                  <td className={order.paid ? 'text-green-600' : 'text-red-600'}>
                    {order.paid ? 'Order Shipped' : 'Payment Declined'}
                  </td>
                  <td>
                    {order.name}
                    <br />
                    {order.email}
                  </td>
                  <td>
                    address={order?.streetAddress} <br />
                    pincode={order?.postalCode} <br />
                    country={order?.country}
                  </td>
                  <td>
                    {order.line_items.map((l, index) => (
                      <div key={index}>
                        {l.price_data?.product_data.name} x=
                        {l.quantity}
                        <br />
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>

    
    </>
  )
}
