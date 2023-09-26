// pages/api/webhook.js

import { buffer } from 'micro';
import { stripe } from '@/utils/stripe';
import { endpointSecret } from '@/config';

export default async (req,res) => {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const sig = req.headers['stripe-signature'];

  let event;

  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(buf, sig, Process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
      if (orderId && paid) {
        // Update your order in the database here
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return res.status(200).end();
};
