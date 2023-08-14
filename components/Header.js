'use client'
import Link from "next/link"
import Image from 'next/image'

import styled from "styled-components"
import Center from "/components/Center";
import { useContext } from "react";
import { CartContext } from "/components/Cartcontexts";
import { signOut, useSession } from "next-auth/react";
import profilepic from "../public/img/user.jpg";
import React, {useState, useEffect, useRef} from 'react';







const StyledHeader = styled.header`
 background-color: #222;
 height: 100px;


`;
const Logo = styled(Link)`
color:#fff;
text-decoration:none;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;







export default function Header() {
  const [hamburger, sethamburger] = useState("hamburger");
  const [mobn , setmobn] = useState("mobile-nav");
  const [ismenuClicked , setismenuClicked ] = useState(false);



  useEffect (() => {
    let handle =() => {    
    // if(ismenuClicked === true){
      sethamburger("hamburger");
      setmobn("mobile-nav");
      setismenuClicked(false)
    // }
    //  else {
    //     setismenuClicked(true)
    //   }

      
  };
    document.addEventListener("mousedown",handle)
  })


const {cartProducts,setSearchBar,searchBar,setActiveStyle} = useContext(CartContext);

const searchOption = () => {
  setSearchBar(true)
}

const { data  } = useSession()

console.log(data)


const [open, setOpen] = useState(false);

let menuRef = useRef();

useEffect(() => {
  let handler = (e)=>{
    if(!menuRef.current.contains(e.target)){

      setTimeout(()=> {
        setOpen(false);
      },200) 

      // console.log(menuRef.current);
    }      
  };

  document.addEventListener("mousedown", handler);
  

  return() =>{

     document.removeEventListener("mousedown", handler);
  }

});
// hamburger

const updatemenu = () => {
  if(!ismenuClicked){
    sethamburger("hamburger is-active")
    setmobn("mobile-nav is-active")
  }
  else {
    sethamburger("hamburger")
    setmobn("mobile-nav")
  }
 setismenuClicked(!ismenuClicked)
 }




  return (
    <>


 <div className="StyledHeader max-sm: h-[90px] ">
  
<div className="center">
  <div className="wrapper">
    <div className="sm: hidden max-sm:flex">
  <button className={hamburger} onClick={updatemenu}>
            <div className="bar" onClick={updatemenu}/>
          </button>

          <nav className={mobn}>
          <Link href={'/'}>Home</Link>
          <Link href={'/products'}>All Product</Link>
          <Link href={'/categories'}>Categories</Link>
          <Link href={'/login'}>Account</Link>
        </nav>
        </div>


<span className=" text-2xl text-white hover:border-b border-white hover:font-bold font-medium max-sm:hidden" href={'/'}>Ecommerce</span>
<div className="flex gap-4">
<Link className="text-white hover:border-b border-white hover:font-bold font-medium max-sm:hidden " href={'/'}>Home</Link>
<Link className="text-white hover:border-b border-white hover:font-bold font-medium max-sm:hidden " href={'/products'}>All Product</Link>
<Link className="text-white hover:border-b border-white hover:font-bold font-medium max-sm:hidden" href={'/categories'}>Categories</Link>
<Link className="text-white hover:border-b border-white hover:font-bold font-medium max-sm:hidden" href={'/login'}>Account</Link>
<Link className="text-white hover:border-b border-white hover:font-bold font-medium max-sm:hidden" href={'/cart'}>Cart ({cartProducts.length})</Link>



<div className="z-1 " ref={menuRef}>
  
<div className="flex ">
  
<Link  href={'/cart'} className="relative inline-flex items-center p-0 text-l font-large text-center text-black bg-black-700 rounded-lg hover:bg-black-800 focus:ring-0 focus:outline-none focus:ring-black-300 dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800 mr-5 mt-2 sm:hidden">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[50px] h-[20px] text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{cartProducts.length}</div>
</Link>

<button id="dropdownInformationButton" onClick={()=>{setOpen(!open)}} data-dropdown-toggle="dropdownInformation" className="max-sm: mr-4 mt-3" type="button">
<Image
src={profilepic}
alt="Picture of the author"
width={30} 
height={30} 
className="rounded-full"
// blurDataURL="data:..." automatically provided
// placeholder="blur" 
/>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-2 h-2 mt-1 mr-4 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
</svg>

</button>

</div>

</div>

</div>

</div>

<div  className={`dropdown-menu ${open? 'active' : 'inactive'} mt-[-20px] ml-[82%] max-sm:ml-[51%] w-[15%] max-sm:w-[37%] `}>
<div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
<div>{data?.user.name ? data?.user.name : ' Hello,'}</div>
<div className="font-medium truncate" >{data?.user.email ? data?.user.email : ' please log in'}</div>
</div>
<ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
<li>
<Link href={"/login"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray">Dashboard</Link>
</li>
<li>
<Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
</li>
<li>
<Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
</li>
</ul>
<div className="py-2">
<span  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
{data?.user ? (
<span className="text-gray-400 text-l cursor-pointer" onClick={() => signOut()}>Logout</span>

):
(
<Link href={'/login'} className="text-gray-400 text-l cursor-pointer text-white">Login</Link>

)
}
</span>
</div>
</div>

</div>

</div> 



     
      
  
      
</>
  )
}
