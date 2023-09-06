import Featured from '@/components/Featured'
import Header from '@/components/Header'
import Newproducts from '/components/Newproducts';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '/models/Product';
import { FilterContextProvider } from '@/components/Filter_context';
import { SessionProvider } from 'next-auth/react';
import Footer from '@/components/Footer';
import BottomFeature from '@/components/BottomFeature';
import Head from 'next/head'



export default function Home({featuredProduct,newProducts,products}) {





  return (
    <>
               
               <Head>
        <title>Best Perfume for Men and Women | Your choice</title>
        <meta name="description" content="Discover your signature fragrance with us | long-lasting fragrance perfume for women and men" />
        

      </Head>

<SessionProvider>
    <Header/> 
    </SessionProvider>
    <FilterContextProvider product={products}/>




    <Featured product={featuredProduct} />
    {
      newProducts.map((product) =>{
        return <Newproducts key={product._id} {...product}  />

      })
    }
    <BottomFeature/>
    <Footer/>
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '64edfedaadb25fe8167cf24a';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({},null,{sort:{'_id':-1},limit:6});
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  
  return {
   props: {
    featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    newProducts: JSON.parse(JSON.stringify(newProducts)),
    products: JSON.parse(JSON.stringify(products)),

   },
  };
}


