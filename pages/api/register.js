import User from '@/models/User';
import { mongooseConnect } from '@/lib/mongoose';
import Wishlist from '@/models/Wishlist';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await mongooseConnect();

      const { name, email, password, wishlist } = req.body;

      // Validate input data
      if (!name || !email || !password ) {
        return res.status(400).json({ error: 'Invalid input data' });
      }

      // Check if the email is already in use
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Create wishlist items and get their IDs
      const Wishlists = await Promise.all(
        wishlist.map(async (item) => {
          const createdItem = await Wishlist.create({ name: item });
          return createdItem._id;
        })
      );

      // Create the user with the associated wishlist items
      const user = await User.create({
        name,
        email,
        password,
        wishlist: Wishlists, // Associate wishlist items with the user
      });

      res.status(201).json({ user });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
}
