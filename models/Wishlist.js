const mongoose = require('mongoose');

const WishlistItemSchema = new mongoose.Schema({
  wishlist: [{ type: String }], // An array of product IDs
});

module.exports = mongoose.models.WishlistItem || mongoose.model("WishlistItem", WishlistItemSchema);
