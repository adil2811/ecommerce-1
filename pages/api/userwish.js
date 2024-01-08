// pages/api/wishlist.js

import {mongooseConnect} from "@/lib/mongoose";
import Wishlist from "@/models/Wishlist"; 

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); 
  }

  const { wishlistProducts } = req.body;

  try {
  await mongooseConnect();


    const Wishlists = await Wishlist.create({
      products: wishlistProducts,

    });
  

    return res.status(201).json({ success: true, Wishlists });
  } catch (error) {
    console.error("Error saving wishlist:", error);
    return res.status(500).json({ success: false, error: "Error saving wishlist" });
  }
}
