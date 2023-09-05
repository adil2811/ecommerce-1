import { FilterContextProvider } from '/components/Filter_context';
import { CartContextProvider } from '/components/Cartcontexts';
import '/styles/globals.css';
import { createGlobalStyle } from "styled-components"
import { SessionProvider } from 'next-auth/react';
import { WishlistContextProvider } from '@/components/Wishlist';
import { ToastContainer } from 'react-toastify';
import GoogleAnalytics from "@bradgarropy/next-google-analytics"

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

    <GlobalStyles/>
    <SessionProvider>
   <CartContextProvider>
     <WishlistContextProvider>
      <FilterContextProvider>

      
      <GoogleAnalytics measurementId="G-T139YJSYZV" />

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
