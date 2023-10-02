import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === 'GET') {
    try {
      const products = await Product.find(); // Fetch all products
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching products.' });
    }
  }
}
