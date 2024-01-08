import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export const WishlistContext = createContext({});

export  function WishlistContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [userId,setUserId] = useState('')

  const { data: session } = useSession();

 

console.log(session?.user?.wishlist)
  
  useEffect(() => {
    if (wishlistProducts?.length > 0) {
      ls?.setItem("wishlist", JSON.stringify(wishlistProducts));
      }
  }, [wishlistProducts, ls]); 
  
  useEffect(() => {
    if (ls && ls.getItem("wishlist")) {
      const localStorageWishlist = JSON.parse(ls.getItem("wishlist"));
      setWishlistProducts(localStorageWishlist);
  
      if (session?.user?.wishlist) {
        const mergedWishlist = Array.from(new Set([...localStorageWishlist, ...session.user.wishlist]));
        setWishlistProducts(mergedWishlist);
        ls.setItem("wishlist", JSON.stringify(mergedWishlist));
      }
    } else if (session?.user?.wishlist) {
      ls.setItem("wishlist", JSON.stringify(session.user.wishlist));
      setWishlistProducts(session.user.wishlist);
    }
  }, [ls, session]);

  function addToWishlist(productId) {
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
    ls.removeItem('wishlist');
  }

  return (
    <WishlistContext.Provider
      value={{ wishlistProducts, addToWishlist, removeFromWishlist, clearWishlist, setWishlistProducts }}
    >
      {children}
    </WishlistContext.Provider>
  );
}


