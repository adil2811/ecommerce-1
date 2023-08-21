"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WishlistContext } from "@/components/Wishlist";

import axios from 'axios';







const Login = () => {
  const {wishlistProducts } = useContext(WishlistContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); 
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const { data: session } = useSession();



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

  console.log(session?.user?.wishlist)






  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,

      });
      // useEffect(() => {
      //   console.log(data);

      // },[data])  
    } catch (error) {
      console.log(error);
      setError('Invalid email or password' ); // Set error message

    }
  };
  console.log(products)

  console.log(session);



 



  if (session) {
    return (
      <>

      <Header/>

      <h1> congratulations your signed In {session.user?.name} {session.user?._id}<Link href={'/'}> Go to the home page</Link>   </h1>
      
      <p>{session?.user?.wishlist.length}</p>
      {/* {!wishlistProducts?.length && <div> no wishlist added</div>} */}
      {products?.length > 0 && (
        <h1>this is your products</h1>

      )}

      {products.map((product)=> (
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" key={product._id}>
          <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
            <img className="object-cover w-[300px]" src={product.images[0]} alt="product image" />
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
          </Link>
          <div className="mt-4 px-5 pb-5">
            <Link href="#">
              <h5 className="text-xl tracking-tight text-slate-900"> {product.title}</h5>
            </Link>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">{product.price}</span>
                <span className="text-sm text-slate-900 line-through">₹12k</span>
                <span className="">{product.description.slice(0,70)+'...'}</span>
              </p>
              <div className="flex items-center">
                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
              </div>
            </div>
            <Link href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart</Link>
          </div>
        </div>
      ))}
  


      
   

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
                <h1 className="text-sm font-medium text-gray-600 m-2">
                  Login using Social accounts
                </h1>
                <div className="text-lg lg:text-xl text-center space-x-5 m-2">
                  <button onClick={() => signIn("google")}>
                    <i className="fa-brands fa-google-plus-g text-white bg-red-500 rounded-full px-[10px] py-[10px] ">
                      Google
                    </i>
                  </button>
                </div>
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
                    onChange={(e) => {setEmail(e.target.value); setError(null)}}
                  />
                </div>
                <div className="">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password_field"
                    value={password}
                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    onChange={(e) => {setPassword(e.target.value); setError(null)}}
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
        {/* <script src="https://cdn.tailwindcss.com"></script>
                                        <script src="https://kit.fontawesome.com/290d4f0eb4.js" crossorigin="anonymous"></script>
                                        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                                        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}
      </form>
      <Footer />
    </>
  );
};

export default Login;

//  <input type="email"  id="email_field" value={email} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setEmail(e.target.value)} />

//  <input type="password"
//                 id="password_field"
//                 value={password}
//                  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                  onChange={(e) => setPassword(e.target.value)} />
