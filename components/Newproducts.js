'use client'
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import React from "react";

import { CartContext } from "/components/Cartcontexts";
import { WishlistContext } from "/components/Wishlist";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Star from "@/components/Star";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";







export default function Newproducts({
  _id,
  title,
  description,
  company,
  images,
  price,
  disprice,
  rating,
})

 {
const { addToWishlist , wishlistProducts , setWishlistProducts  } = useContext(WishlistContext);
const [wishlistState, setWishlistState] = useState(wishlistProducts);
const { removeFromWishlist  } = useContext(WishlistContext);
const [btnState ,setBtnState] = useState(null)
const [userId,setUserId] = useState('')
const { data: session } = useSession();
const router = useRouter();




useEffect(() => {
  setUserId(session?.user?._id)

},[session])





useEffect(() => {
  axios.get("/api/wishlist").then((response) => {
    setWishlistState(response.data);
  });
}, []);



async function  addWishList() {
  if (!session?.user) {
    // Navigate to login page
    router.push("/login"); // Update "/login" with your actual login page URL
    return;
  }
  const isAlreadyInWishlist = wishlistProducts.includes(_id);

  setBtnState(!isAlreadyInWishlist); // Toggle btnState

  if (isAlreadyInWishlist) {
    removeFromWishlist(_id);
    toast.error('Removed from wishlst', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  } else {
    addToWishlist(_id);
    toast.success('Add to wishlist!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  setWishlistState([...wishlistState]); // Trigger re-render

  // console.log(wishlistProducts)

  axios.put('/api/updatewishlist', { userId, wishlistProducts })
  .then(response => {
    console.log('Wishlist updated:', response.data);
  })
  .catch(error => {
    console.error('Error updating wishlist:', error);
  });

 
}
// console.log(wishlistProducts)




console.log(btnState)

  const { addProduct } = useContext(CartContext);
  function addProductCart() {
     addProduct(_id)  
     toast.success('Add to wishlist!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });  
  }
  const url = "/product/" + _id;
  console.log(btnState)

  const filledHeartIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-800">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg>
  
  );
  
  const emptyHeartIcon = (


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 dark:text-white">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
  );
  

  return (
<>





<div className="flex-box p-[2%] ml-3">
<div key={_id} className="flex-box">


<div className=" p-1 mt-2  w-[250px] max-sm:w-[130px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 inline-block justify-between	mr-2 ml-2  ">

<button onClick={addWishList}  className="ml-[90%] max-sm:ml-[84%]" >    
{session?.user ? (btnState ? filledHeartIcon : emptyHeartIcon) : emptyHeartIcon}


</button>
    <Link href={url}>
        <img className="rounded-lg ml-3  w-[200px] max-sm:w-[90px] h-[150px] max-sm:h-[80px]  " src={images[0]} alt="product image" />
    </Link>
    <div className="px-0 pb-0 ">
        <Link href={url}>
          <span className='text-[13px] max-sm:text-[9px] text-gray-500 ml-2 p-1 '>{company ? company : 'your choice' } </span>
            <h5 className="flex text-[15px] max-sm:text-[9px] font-semibold tracking-tight text-gray-900 dark:text-white ml-3 ">{title} 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-[6px] max-sm: mt-[0px] ml-[4px] text-white-400 w-4 max-sm:w-[10px] h-4  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</h5>
<span className="ml-2 text-red-800"><b><s>{disprice}</s></b></span>
                        <span className="text-2xl max-sm:text-[15px]  font-bold text-gray-900 dark:text-white ml-3">₹{price}</span>

        </Link>
        <div className="flex items-center mt-2.5 max-sm:mt-[0px] mb-5 max-sm: mt-0 text-[2px]">
        <Star stars={rating}/>
            <span className="bg-blue-100 text-blue-800 text-[10px] font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 max-sm: text-[10px]">{rating}</span>
        </div>
        <div className="flex pb-0  ">
            <button onClick={addProductCart} className="h-[50px]  max-sm:h-[40px] text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-lg rounded-[4px]  text-sm max-sm: text-[9px] px-5 py-2.5 text-center dark:bg-red-800 dark:hover:bg-red-600 dark:focus:ring-red-800 w-full ">Add to cart</button>
       
        </div>
     
    </div>
</div>
</div>
</div>





</>
  


  );
}
