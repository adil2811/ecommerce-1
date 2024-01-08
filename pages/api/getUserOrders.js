import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); 
  }

  const { userEmail } = req.query;

  try {
    await mongooseConnect();

    const orders = await Order.find({ email: userEmail })
      .sort({ createdAt: -1 }) 
      .exec();

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error retrieving user orders:', error);
    res.status(500).json({ error: 'Server Error' });
  }
}
