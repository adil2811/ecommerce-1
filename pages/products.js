import Header from '@/components/Header'
import Newproducts from '/components/Newproducts';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '/models/Product';
import React from 'react'
import Footer from '@/components/Footer';


export default function Productspage({products}) {
    console.log({products})
  return (
    <>
    <Header/>
    <div className='center'>
    <h1 className='title'>All products</h1>
    </div>
    <div className='StyledProductGrid'>
    {
      products.map((product) =>{
        return <Newproducts key={product._id} {...product}  />

      })
    }
    </div>
    <Footer/>


    
      </>
  )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const products = await Product.find({}, null, {sort:{'_id':-1}});
    return {
      props:{
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  }