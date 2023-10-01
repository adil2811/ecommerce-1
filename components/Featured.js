import {useContext} from "react";
import {CartContext} from "/components/Cartcontexts";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import Image from 'next/image'; // Import the Next.js Image component








export default function Featured({product}) {

 const {addProduct} = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id)
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
  const url = "/product/" + product._id;


  return (
     <Link href={url} className="m-auto	">
    <div className="m-auto mt-4  max-w-screen-lg overflow-hidden rounded-xl border shadow-lg md:pl-8  ">
    <div className="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
      <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
        <h1 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">{product.title}</h1>
        <p className="mt-2 text-lg">{product.company}</p>
        <p className="mt-4 mb-8 max-w-md text-gray-500 text-[13px]">{product.description.slice(0,318)}...</p>
        <button onClick={addFeaturedToCart}  className="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition sm:mt-[-25px]">
          <span  className="group flex w-full items-center justify-center rounded py-1 text-center font-bold "> Add to cart </span>
          <svg className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <div className="order-first ml-auto w-full   bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
      <Image
              src={product.images[0]}
              alt={product?.alttitle}
              width={500} // Set your preferred width
              height={400} // Set your preferred height
              layout="responsive" // Choose layout type
              objectFit="cover" // Choose object-fit value
              loading="lazy" // Set priority to true for above-the-fold image
            />
                </div>
    </div>
  </div>  
  
    </Link>
  );
}


