import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext({});

export  function WishlistContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [wishlistProducts, setWishlistProducts] = useState([]);
  
  useEffect(() => {
    if (wishlistProducts?.length > 0) {
      ls?.setItem("wishlist", JSON.stringify(wishlistProducts));

    }
  }, [wishlistProducts]);
  
  useEffect(() => {
    if (ls && ls.getItem("wishlist")) {
      setWishlistProducts(JSON.parse(ls.getItem("wishlist")));
    }
  }, []);

  function addToWishlist(productId) {
    // Check if the product ID is already in the wishlist
    if (!wishlistProducts.includes(productId)) {
      setWishlistProducts((prev) => [...prev, productId]);
    }
  }

  function removeFromWishlist(productId) {
    setWishlistProducts((prev) => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }

  function clearWishlist() {
    setWishlistProducts([]);
    ls.clear();
  }

  return (
    <WishlistContext.Provider
      value={{ wishlistProducts, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
