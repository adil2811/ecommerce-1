"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>

      <Header/>
      <h1> congratulations your signed In {session.user?.name}<Link href={'/'}> Go to the home page</Link></h1>
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
                <h1 className="text-sm font-medium text-gray-600 m-2">OR</h1>
              </div>
              <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                <div className="">
                  <input
                    type="email"
                    id="email_field"
                    value={email}
                    placeholder="Email ID"
                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password_field"
                    value={password}
                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    onChange={(e) => setPassword(e.target.value)}
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
