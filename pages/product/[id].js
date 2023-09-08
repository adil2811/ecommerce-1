import Center from "@/components/Center";
import Header from "@/components/Header";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import {useContext} from "react";
import { CartContext } from "@/components/Cartcontexts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/Footer";
import Star from "@/components/Star";
import Head from 'next/head'


const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

export default function ProductPage({product}) {
console.log(product)
  
  const {addProduct} = useContext(CartContext);
  return (
    <>
          <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description.slice(0,50) + '...'} />
        

      </Head>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} alt={product.title} />
          </WhiteBox>
          <div>
            <div className="title">{product.title}</div>
            <div className="flex  mt-2  ">
           <Star  stars={product.rating}  reviews={4}/>
</div>
<hr className="mt-2"/>
<ul class="list-disc pl-4 text-gray-600 text-[13px]">
  <li class="">Gentle on Your Skin</li>
  <li class="">Completely Vegan</li>
  <li class="">No Harm to Animals</li>
  <li class="">Delivered in 5-7 Working Days</li>
  <li class="">Free Nationwide Shipping</li>
  <li>Remarkably Matching Scents</li>
</ul>

<p className="mt-5 ">{product.description}</p>
<span className=" text-gray-600 text-[12px]"> 50 ML Spray Bottle</span>


<div className="  text-gray-700  flex mt-4 space-x-11 > * + *	">
<div className="h-20 w-5">
<svg  xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg> 
<span className="text-[10px]">free&nbsp;deleviry</span>
</div>
<div className="h-5 w-5 ">  
<svg xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
</svg>
<span className="text-[10px]">Easy&nbsp;refund </span>
</div>
<div className="h-5 w-5">
<svg xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
</svg>
<span className="text-[10px]">Call&nbsp;service</span>
</div>
<div className="h-5 w-5">
<svg xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
</svg>
<span className="text-[10px]">2&nbsp;years&nbsp;Warrenty</span>
</div>
</div>
<hr></hr>
<p className="mt-2 text-black-800"><b>MRP:</b><span className="text-red-800"><b><s>{product.disprice}</s></b></span></p>

            <PriceRow className="mt-4">
              <div className="flex">
              <h3 className="p-1 text-xl mt-[-3px]"><b>Deal OF The day :</b> </h3> <Price>₹{product.price}</Price>
              </div>
              <div>
                <button className="button-prime"  onClick={() => addProduct(product._id)}>
        Add to cart
                </button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
      <Footer/>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  const product = await Product.findById(id);
  context.res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate'); // Cache for 1 hour

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}