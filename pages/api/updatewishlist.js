import User from '@/models/User';
import { mongooseConnect } from '@/lib/mongoose';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      await mongooseConnect();

      const { userId, wishlistProducts } = req.body;

      // Find the user by ID
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Update the user's wishlist
      user.wishlist = wishlistProducts;
      await user.save();

      res.status(200).json({ message: 'Wishlist updated successfully' });
    } catch (error) {
      console.error('Error updating wishlist:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
}
