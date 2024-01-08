import User from '@/models/User';
import { mongooseConnect } from '@/lib/mongoose';
import Wishlist from '@/models/Wishlist';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await mongooseConnect();

      const { name, email, password, wishlist } = req.body;

      if (!name || !email || !password ) {
        return res.status(400).json({ error: 'Invalid input data' });
      }

      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const Wishlists = await Promise.all(
        wishlist.map(async (item) => {
          const createdItem = await Wishlist.create({ name: item });
          return createdItem._id;
        })
      );

      const user = await User.create({
        name,
        email,
        password,
        wishlist: Wishlists, 
      });

      res.status(201).json({ user });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
}
