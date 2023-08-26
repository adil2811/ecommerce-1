import React from 'react'
import Header from "@/components/Header";
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import axios from 'axios';

export default function yourorder() {
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
 
    <h1>Order</h1>
    <table className='basic'>
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
          <tr>
            <td>{(new Date(order.createdAt)).toUTCString()}</td>
            <td className={order.paid ? 'text-green-600' : 'text-red-600'}>
              {order.paid ? 'YES' : 'NO'}
            </td>
            <td>{order.name} {order.email}<br/>
                {order.city} {order.postalCode}
                {order.country}<br/>
                {order.streetAddress}
            
            </td>
            <td>
              {order.line_items.map(l => (
                <>
                {l.price_data?.product_data.name}x
                {l.quantity}<br/>
                </>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>


    
    </>
  )
}
