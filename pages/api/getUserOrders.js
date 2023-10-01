import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { userEmail } = req.query;

  try {
    await mongooseConnect();

    // Find orders for the user, sorted by a timestamp field (e.g., createdAt) in descending order
    const orders = await Order.find({ email: userEmail })
      .sort({ createdAt: -1 }) // This sorts by createdAt in descending order
      .exec();

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error retrieving user orders:', error);
    res.status(500).json({ error: 'Server Error' });
  }
}
