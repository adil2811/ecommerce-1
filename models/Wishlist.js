const mongoose = require('mongoose');

const WishlistItemSchema = new mongoose.Schema({
  wishlist: [{ type: String }], 
});

module.exports = mongoose.models.WishlistItem || mongoose.model("WishlistItem", WishlistItemSchema);
