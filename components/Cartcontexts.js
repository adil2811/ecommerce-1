import {createContext, useEffect, useState} from "react";


export const CartContext = createContext({});


export function CartContextProvider({children}) {
    const ls = typeof window !== "undefined" ? window.localStorage : null
    const [cartProducts,setCartProducts] = useState([]);
    const [selectedSize, setSelectedSize] = useState(true); // Default size is 50ml
    const [searchBar,setSearchBar] = useState(false)
    const [activeStyle,setActiveStyle] = useState('ml-[100%] hidden z-10 ');

    useEffect(() => {
        if(cartProducts?.length > 0) {
            ls?.setItem('cart', JSON.stringify(cartProducts));
        }
    }, [cartProducts, ls]); // Add ls to the dependency array
    useEffect(() => {
        if(ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart')));
        }
    }, [ls])
    function addProduct(productId)  {
        setCartProducts(prev => [...prev,productId]);
    }
    function removeProduct(productId){
        setCartProducts(prev => {
            const pos = prev.indexOf(productId)
            if (pos !== -1) {
                return prev.filter((value,index) => index !== pos);
            }
            return prev
        } )
    }
    function clearCart() {
        setCartProducts([]);
        ls.clear();
      }
    return (
<CartContext.Provider value={{cartProducts,setCartProducts,addProduct,removeProduct,clearCart,setSearchBar,searchBar,activeStyle,setActiveStyle,selectedSize, setSelectedSize}}>
      {children}
    </CartContext.Provider>    )
}

