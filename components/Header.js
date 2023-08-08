'use client'
import Link from "next/link"
import Image from 'next/image'

import styled from "styled-components"
import Center from "/components/Center";
import { useContext } from "react";
import { CartContext } from "/components/Cartcontexts";
import { signOut, useSession } from "next-auth/react";
import profilepic from "/Users/adilshiakh/Desktop/images ecommerce/userimg/user.jpg"
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




  return (
    <>
 <div className="StyledHeader">
<div className="center">
  <div className="wrapper">
<span className=" text-2xl text-white hover:border-b border-white hover:font-bold font-medium" href={'/'}>Ecommerce</span>
<div className="flex gap-4">
<Link className="text-white hover:border-b border-white hover:font-bold font-medium " href={'/'}>Home</Link>
<Link className="text-white hover:border-b border-white hover:font-bold font-medium " href={'/products'}>All Product</Link>
<Link className="text-white hover:border-b border-white hover:font-bold font-medium " href={'/categories'}>Categories</Link>
<Link className="text-white hover:border-b border-white hover:font-bold font-medium " href={'/login'}>Account</Link>
<Link className="text-white hover:border-b border-white hover:font-bold font-medium " href={'/cart'}>Cart ({cartProducts.length})</Link>



<div className="z-1 " ref={menuRef}>
<div className="flex ">
<button id="dropdownInformationButton" onClick={()=>{setOpen(!open)}} data-dropdown-toggle="dropdownInformation" className="" type="button">
<Image
src={profilepic}
alt="Picture of the author"
width={30} 
height={30} 
className="rounded-full"
// blurDataURL="data:..." automatically provided
// placeholder="blur" 
/>
<svg className="w-3.5 h-3.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="" strokeLinejoin="" strokeWidth="0" d="m1 1 4 4 4-4"/>
</svg>
</button>
</div>

</div>

</div>

</div>
<div  className={`dropdown-menu ${open? 'active' : 'inactive'} ml-[85%]`}>
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
