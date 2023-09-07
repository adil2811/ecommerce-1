import { FilterContextProvider } from '/components/Filter_context';
import { CartContextProvider } from '/components/Cartcontexts';
import '/styles/globals.css';
import { createGlobalStyle } from "styled-components"
import { SessionProvider } from 'next-auth/react';
import { WishlistContextProvider } from '@/components/Wishlist';
import { ToastContainer } from 'react-toastify';
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";


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
  const router = useRouter();

  return (
    <>
     <AnimatePresence mode='wait'>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.55,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="base-page-size "
      >

    <GlobalStyles/>
    <SessionProvider>
   <CartContextProvider>
     <WishlistContextProvider>
      <FilterContextProvider>

      
      <GoogleAnalytics measurementId="G-T139YJSYZV"  strategy="afterInteractive"  />
      

   <Component {...pageProps} />
   <ToastContainer
   limit={3}
   />



      </FilterContextProvider>
     </WishlistContextProvider>
   </CartContextProvider>
   </SessionProvider>
   </motion.div>
    </AnimatePresence>
  
   </>
  )
}
