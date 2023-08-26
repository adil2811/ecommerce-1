// pages/api/wishlist.js

import {mongooseConnect} from "@/lib/mongoose";
import Wishlist from "@/models/Wishlist"; // Assuming you have a Wishlist model/schema

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { wishlistProducts } = req.body;

  try {
  await mongooseConnect();


    // Save wishlist data to the database
    const Wishlists = await Wishlist.create({
      products: wishlistProducts,

    });
  

    return res.status(201).json({ success: true, Wishlists });
  } catch (error) {
    console.error("Error saving wishlist:", error);
    return res.status(500).json({ success: false, error: "Error saving wishlist" });
  }
}
