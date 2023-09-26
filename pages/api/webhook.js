import Stripe from 'stripe';
import { buffer } from 'micro';
import { Order } from '@/models/Order';
import { mongooseConnect } from '@/lib/mongoose';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const sig = req.headers['stripe-signature'];

  let event;

  try {
    const buf = await buffer(req);

    // Initialize Stripe with your production secret key
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // Verify the Stripe signature using your production webhook secret
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  await mongooseConnect(); // Connect to your MongoDB database

  switch (event.type) {
    case 'payment_intent.succeeded':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
      if (orderId && paid) {
        // Update your order in the database here
        try {
          const updatedOrder = await Order.findByIdAndUpdate(orderId, { paid: true });
          console.log(`Order ${updatedOrder._id} has been updated as paid.`);
        } catch (error) {
          console.error(`Error updating order: ${error.message}`);
        }
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return res.status(200).end();
};
