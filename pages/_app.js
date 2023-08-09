import { FilterContextProvider } from '/components/Filter_context';
import { CartContextProvider } from '/components/Cartcontexts';
import '/styles/globals.css';




import { createGlobalStyle } from "styled-components"
import { SessionProvider } from 'next-auth/react';

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
    <FilterContextProvider>


   <Component {...pageProps} />


   </FilterContextProvider>
   </CartContextProvider>
   </SessionProvider>

  
   </>
  )
}
