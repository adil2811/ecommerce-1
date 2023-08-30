"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useSession } from "next-auth/react";
import {useRouter} from "next/navigation";
import React, { useContext, useState } from "react";
import { WishlistContext } from "@/components/Wishlist";
import {  toast } from 'react-toastify';
import Link from "next/link"
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {
  const { data:session } = useSession()
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = useState(null); // Initialize with null


 
  const {wishlistProducts } = useContext(WishlistContext)






  const submitHandler = async (e) => {
    
    e.preventDefault();
    console.log(name,email,password)

    if (password.length < 6) {
    {toast.error('password length is short', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      return; // Exit the function if validation fails
    }
  }
    try {
      setLoading(true);

      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
        wishlist: wishlistProducts, // Add wishlist items to the payload


      });

      console.log(data);

      router.push('/login');
      toast.success('Your are sucessfully register', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });


    }  catch (error) {
      console.log("Signup failed", error.message);
      setError("Invalid email or Already logged in"); // Set the error message

      

    }finally {
      setLoading(false);

  }
  
  };

  return (
    <>
    <Header/>
     <form
            className="border border-secondary rounded p-4"
            onSubmit={submitHandler}
          >



    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">



    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">{loading ? "Processing" : "Signup"}</h2>
      <div className="relative mb-4">



        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
        <input 
         type="text"
         id="name_field"
         value={name}
         onChange={(e) => setName(e.target.value)}
           className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input 
           type="email"
           id="email_field"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      
      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">password</label>
        <input 
         type="password"
         id="password_field"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
           className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
     <span className="text-red-600 m-2">{error} </span> 
      <button  disabled={loading} className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Register</button>
      <p className="text-xs text-gray-500 mt-3">If you are already register in <Link href='/login' className="text-blue-800" > Click here</Link></p>
    </div>
   
    
  </div>
</section>
</form>
<Footer/>
</>
  );
};

export default Register;