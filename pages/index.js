import Featured from '@/components/Featured'
import Header from '@/components/Header'
import Newproducts from '/components/Newproducts';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '/models/Product';
import { FilterContextProvider } from '@/components/Filter_context';
import { SessionProvider } from 'next-auth/react';
import Footer from '@/components/Footer';



export default function Home({featuredProduct,newProducts,products}) {





  return (
    <>
               
               {/* <SearchBar product={products} /> */}
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
    <Footer/>
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '64a813970fdabdf3a1b46204';
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


