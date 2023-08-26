import { User } from "@/models/User"; // Import the User model
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === 'GET') {
    if (req.query?.id) {
      try {
        const user = await User.findOne({ _id: req.query.id });
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        return res.json(user);
      } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      try {
        const users = await User.find();
        return res.json(users);
      } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }
  }
}
