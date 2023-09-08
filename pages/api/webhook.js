import { mongooseConnect } from "@/lib/mongoose";
import { buffer } from 'micro';
import { Order } from "@/models/Order";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SK, {
  apiVersion: '2020-08-27', // Specify the Stripe API version you are using
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(req, res) {
  try {
    await mongooseConnect(); // Connect to the database

    const sig = req.headers['stripe-signature'];
    const event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const data = event.data.object;
        const orderId = data.metadata.orderId;
        const paid = data.payment_status === 'paid';

        if (orderId && paid) {
          // Update the order as paid in your database
          await Order.findByIdAndUpdate(orderId, { paid: true });
        }
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).send('ok');
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
}

export const config = {
  api: {
    bodyParser: false, // Disable built-in bodyParser to handle the request as a buffer
  },
};
