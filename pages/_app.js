import { FilterContextProvider } from '/components/Filter_context';
import { CartContextProvider } from '/components/Cartcontexts';
import '/styles/globals.css';
import { createGlobalStyle } from "styled-components"
import { SessionProvider } from 'next-auth/react';
import { WishlistContextProvider } from '@/components/Wishlist';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head'


const GlobalStyles = createGlobalStyle`

body{
  background-color: white;
  padding:0;
  margin:0;
  font-family: 'Roboto':ital
 -ms-overflow-style: none;
 scrollbar-width: none;

}
`;

export default function App({ Component, pageProps , props }) {
  return (
    <>
     <Head>
        <title>Best Perfume for Men and Women | Your choice</title>
        <meta name="description" content="Discover your signature fragrance with us | long-lasting fragrance perfume for women and men" />
      </Head>
    <GlobalStyles/>
    <SessionProvider>
   <CartContextProvider>
     <WishlistContextProvider>
      <FilterContextProvider>


   <Component {...pageProps} />
   <ToastContainer
   limit={3}
   />



      </FilterContextProvider>
     </WishlistContextProvider>
   </CartContextProvider>
   </SessionProvider>

  
   </>
  )
}
