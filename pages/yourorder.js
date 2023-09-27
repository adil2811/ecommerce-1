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
              console.log(response.data); // Log the fetched orders here
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
 <div className="h-[100vh]">
    <h1>Order</h1>
    <table className='basic '>
      <thead>
        <tr>
          <td>ID</td>
          <td>Paid</td>
          <td>Recipients</td>
          <td>Products</td>

        </tr>
      </thead> 
      <tbody>
        {orders.length > 0 && orders.map(order => (
          <tr key={order._id}>
            <td >{(new Date(order.createdAt)).toUTCString()}</td>
            <td className={order.paid ? 'text-green-600' : 'text-red-600'}>
              {order.paid ? 'Order Shipped ' : 'Status Pending '}
            </td>
            <td>{order.name}<br/> {order.email}
                
            
            </td>
            <td>
              {order.line_items.map((l,index) => (
                <div key={index} >
                {l.price_data?.product_data.name}x
                {l.quantity}<br/>
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    
    </>
  )
}
