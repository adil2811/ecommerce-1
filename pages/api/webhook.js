const stripe = require('stripe')(process.env.STRIPE_SK);
import { mongooseConnect } from "@/lib/mongoose";
import { buffer } from 'micro';
import { Order } from "@/models/Order";

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const sig = req.headers['stripe-signature'];

    try {
      const event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);

      // Handle the event
      switch (event.type) {
        case 'payment_intent.succeeded':
        case 'checkout.session.completed':
          const data = event.data.object;
          const orderId = data.metadata.orderId;
          const paid = data.payment_status === 'paid';
          if (orderId && paid) {
            await Order.findByIdAndUpdate(orderId, {
              paid: true,
            });
            console.log(`Order ${orderId} marked as paid`);
          }
          break;
        default:
          console.log(`Unhandled event type: ${event.type}`);
      }

      res.status(200).send('OK');
    } catch (err) {
      console.error('Webhook error:', err);
      // Log the error and respond with a generic message
      res.status(500).send('Webhook Error');
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
