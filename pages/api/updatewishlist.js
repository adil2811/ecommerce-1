import User from '@/models/User';
import { mongooseConnect } from '@/lib/mongoose';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      await mongooseConnect();

      const { userId, wishlistProducts } = req.body;

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      user.wishlist = wishlistProducts;
      await user.save();

      res.status(200).json({ message: 'Wishlist updated successfully' });
    } catch (error) {
      console.error('Error updating wishlist:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
}
