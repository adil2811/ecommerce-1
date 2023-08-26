import { mongooseConnect } from '@/lib/mongoose';
import User from '@/models/User';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await mongooseConnect();

      // Get the user's session
      const session = await getSession({ req });

      // Check if user is authenticated
      if (!session?.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const userId = session.user._id;

      // Find the user by ID and populate the wishlist field
      const user = await User.findById(userId).populate('wishlist');

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json(user.wishlist);
    } catch (error) {
      console.error('Error fetching user wishlist:', error);
      res.status(500).json({ error: 'Server error', detailedError: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
