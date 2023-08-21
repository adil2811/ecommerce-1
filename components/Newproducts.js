import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import React from "react";

import { CartContext } from "/components/Cartcontexts";
import { WishlistContext } from "/components/Wishlist";
import axios from "axios";






export default function Newproducts({
  _id,
  title,
  description,
  images,
  price,
})

 {
const { addToWishlist , wishlistProducts , setWishlistProducts  } = useContext(WishlistContext);
const [wishlistState, setWishlistState] = useState(wishlistProducts);

const { removeFromWishlist  } = useContext(WishlistContext);
const [btnState ,setBtnState] = useState(null)
useEffect(() => {
  axios.get("/api/wishlist").then((response) => {
    setWishlistState(response.data);
  });
}, []);


async function  addWishList() {
  const isAlreadyInWishlist = wishlistProducts.includes(_id);

  setBtnState(isAlreadyInWishlist);

  if (isAlreadyInWishlist) {
    removeFromWishlist(_id);
  } else {
    addToWishlist(_id);
  }

  setWishlistState([...wishlistState]); // Trigger re-render



}
console.log(wishlistProducts)




console.log(btnState)

  const { addProduct } = useContext(CartContext);
  function addProductCart() {
    addProduct(_id)
  }
  const url = "/product/" + _id;
  return (
<>





<div className="flex-box p-3 ml-2">
<div key={_id} className="flex-box">


<div className=" p-1 mt-2  w-[250px] max-sm:w-[130px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 inline-block justify-between	mr-2 ml-2  ">

<button onClick={addWishList}  className="ml-[90%]" >    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg> 


</button>
    <Link href={url}>
        <img className="rounded-lg ml-3  w-[200px] max-sm:w-[90px] h-[150px] max-sm:h-[80px]  " src={images[1]} alt="product image" />
    </Link>
    <div className="px-0 pb-0 ">
        <Link href={url}>
          <span className='text-[13px] max-sm:text-[9px] text-gray-500 ml-2 p-1 '>Apple Laptop </span>
            <h5 className="flex text-[15px] max-sm:text-[9px] font-semibold tracking-tight text-gray-900 dark:text-white ml-3 ">{title} 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-[6px] max-sm: mt-[0px] ml-[4px] text-white-400 w-4 max-sm:w-[10px] h-4  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</h5>
                        <span className="text-2xl max-sm:text-[15px]  font-bold text-gray-900 dark:text-white ml-3">₹{price}</span>

        </Link>
        <div className="flex items-center mt-2.5 max-sm:mt-[0px] mb-5 max-sm: mt-0">
            <svg className="w-3 h-3 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-3 h-3 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-3 h-3 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-3 h-3 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-3 h-3 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <span className="bg-blue-100 text-blue-800 text-[10px] font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 max-sm: text-[10px]">4.0</span>
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
