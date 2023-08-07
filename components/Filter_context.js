
import { createContext,useContext, useEffect, useReducer, useState } from "react"
import reducer from '../reducer/filterReducer'
import axios from "axios";
// import { mongooseConnect } from "@/lib/mongoose";
// import { Product } from "@/models/Product";



const FilterContext = createContext();

const API = 'api/products'
const initialState = {
    filter_products: [],
    all_products: [],
    sorting_value: "recent",
    filter:{
        text:"",
        category:"All"
    }
};


export const  FilterContextProvider = ({children}) => {

    const [categories,setCategories] = useState([]);
   
   
    useEffect(() => {
        fetchCategories();
      }, [])
  
      function fetchCategories() {
        axios.get('/api/categories').then(result => {
          setCategories(result.data);
        });
      }


    const [data,setData] = useState([])

  const getProducts = async (url) => {
    const res = await axios.get(url);
    const products = await res.data;
    setData(products)
};

useEffect(() => {
    getProducts(API)
},[])
   
    const [state,dispatch] = useReducer(reducer,initialState);

const sorting = (event) => {
    let userValue = event.target.value
    dispatch({ type: "GET_SORT_VALUE", payload: userValue})

}

const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: {name,value}})
}


useEffect(()=> { 
  dispatch({type:"LOAD_FILTER_PRODUCTS", payload: data});
}, [data])

useEffect(()=> {
    dispatch({type:"FILTER_PRODUCTS"});

dispatch({type:"SORTING_PRODUCTS"});
},[state.sorting_value, state.filter])

  return (
    <FilterContext.Provider value={{...state,sorting,updateFilterValue,categories}}>
        {children}
      </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}




