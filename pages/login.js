"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WishlistContext } from "@/components/Wishlist";
import { CartContext } from "/components/Cartcontexts";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import axios from 'axios';







const Login = () => {
  const { wishlistProducts ,setWishlistProducts, removeFromWishlist} = useContext(WishlistContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [userId,setUserId] = useState('')
  const [userwishlist,setUserwishlist] = useState([])


  const { data: session } = useSession();
  const { addProduct } = useContext(CartContext);
  
  
 

   useEffect(() => {
    setUserId(session?.user?._id)
  
  },[session])


  console.log(session?.user?.wishlist)

  useEffect(() => {
    if (wishlistProducts.length > 0) {
      axios.post("/api/wishlist", { ids: wishlistProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [wishlistProducts]);


  useEffect(() => {
    if (session) {
      axios.get('/api/wishlist').then((response) => {
        setWishlist(response.data);
       
      });
    }
  }, [session]);



async function  removewishlist() {
  const isAlreadyInWishlist = wishlistProducts.includes(_id);

  setBtnState(!isAlreadyInWishlist); // Toggle btnState

  if (isAlreadyInWishlist) {
    removeFromWishlist(_id);
  } else {
    addToWishlist(_id);
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







  const submitHandler = async (e) => {
    e.preventDefault();


    try {
      // Perform the user sign-in operation using the provided credentials
          

      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      toast.success('your logged in', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

     
      location.reload();

        
    } catch (error) {
      // Log the error to the console
      console.log("Error caught:", error); // Log the error for debugging
  
      // Display an error toast notification for failed login
 
    }

  };
  console.log(products)

  console.log(session); 
  







  if (session) {
    function addProductCart(id) {
      addProduct(id)
      toast.success('product has been added', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    const url = "/product/";
    
    return (
      <>

        <Header />
    
      <h1 className="text-3xl font-semibold mb-6">Your Wishlist</h1>


      {wishlistProducts.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className=" grid gap-4 grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2  grid-rows-3 sm:grid-rows-3 grid-rows-2 lg:grid-rows-4 sm:grid-rows-3 grid-rows-2 ">
            {products.map((product) => (
        <div key={product._id} className="">
        <div  className="inline-flex ">
        
        
        <div className=" w-[250px] max-sm:w-[130px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-between	max-sm:mt-7  ">
        
       
            <Link href={url+product._id}>
                <img className="rounded-lg ml-3  w-[200px] max-sm:w-[90px] h-[150px] max-sm:h-[80px]  " src={product.images[1]} alt="product image" />
            </Link>
            <div className="px-0 pb-0 ">
                <Link href={'#'}>
                  <span className='text-[13px] max-sm:text-[9px] text-gray-500 ml-2 p-1 '>{product.company} </span>
                    <h5 className="flex text-[15px] max-sm:text-[9px] font-semibold tracking-tight text-gray-900 dark:text-white ml-3 ">{product.title} 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-[6px] max-sm: mt-[0px] ml-[4px] text-white-400 w-4 max-sm:w-[10px] h-4  ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
        </h5>
                                <span className="text-2xl max-sm:text-[15px]  font-bold text-gray-900 dark:text-white ml-3">₹{product.price}</span>
        
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
                    <button onClick={() => addProductCart(product._id)} className="h-[50px]  max-sm:h-[40px] text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-lg rounded-[4px]  text-sm max-sm: text-[9px] px-5 py-2.5 text-center dark:bg-red-800 dark:hover:bg-red-600 dark:focus:ring-red-800 w-full ">Add to cart</button>
               
                </div>
             
            </div>
        </div>
        </div>
        </div>
        ))}
        </div>
      )}


        

       

     






      </>

    )

  }

  return (
    <>
      <Header />

      <form
        className="border border-secondary rounded p-4"
        onSubmit={submitHandler}
      >
        <div className="flex justify-center">

          <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%]  m-2">
            <div className=" w-full md:w-3/4">
              <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
                <h1 className="font-semibold text-xl md:text-5xl text-gray-600 m-2">

                  Login to your account
                </h1>
             
                {/* <div className="text-lg lg:text-xl text-center space-x-5 m-2">
                  <button onClick={() => signIn("google")}>
                    <i className="fa-brands fa-google-plus-g text-white bg-red-500 rounded-full px-[10px] py-[10px] ">
                      Google
                    </i>
                  </button>
                </div> */}
                <h1 className="text-sm font-medium text-gray-600 m-2">{error && <p className="text-red-500">{error}</p>} </h1>
              </div>
              <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                <div className="">
                  <input
                    type="email"
                    id="email_field"
                    value={email}
                    placeholder="Email ID"
                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    onChange={(e) => { setEmail(e.target.value); setError(null) }}
                  />
                </div>
                <div className="">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password_field"
                    value={password}
                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    onChange={(e) => { setPassword(e.target.value); setError(null) }}
                  />
                </div>
              </div>
              <div className="text-center mt-7">
                <button
                  type="submit"
                  className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-blue-400 to-emerald-400  font-medium m-2 mb-6 "
                >
                  Sign In
                </button>
              </div>
            </div>
            <div className="h-[100%] w-full md:w-1/3  bg-gradient-to-l from-blue-400 to-emerald-400  items-center flex justify-center">
              <div className="text-white text-base font-semibold text-center my-10 space-y-2 m-2">
                <h1 className="text-5xl">New Here?</h1>
                <h1 className="">
                  Sign Up and discover new oppurtinities here
                </h1>
                <Link
                  href={"/register"}
                  className="bg-white rounded-2xl px-4 text-emerald-400 py-1"
                >
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </div>
   
      </form>
      <Footer />
    </>
  );
};

export default Login;


