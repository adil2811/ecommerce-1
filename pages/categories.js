
'use client'
import Filterpanel from "@/components/Filterpanel";
import Header from "@/components/Header";
import Searchbar1 from "@/components/Searchbar1";
import List from "@/components/List";
// import { mongooseConnect } from "@/lib/mongoose";
// import { Product } from "/models/Product";
import React, { useState } from "react"; // Import React and useState
import { useFilterContext } from "@/components/Filter_context";
import Sort from "@/components/Sort";
import Footer from "@/components/Footer";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories,setCategories] = useState([])
  
  
  const { filter_products } = useFilterContext();

  console.log(filter_products)

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);
   
    console.log(categories)
  return (
    <>
      <Header />
      <div className="home">
        <Searchbar1 />
        <div className="home_panelList-wrap">
          <div className="home_panel-wrap">
         
                <Filterpanel/>
          
          </div>
          <div className="home_list-wrap">
            <div className="home_list-wrap-1"><Sort/></div>
            <div className="home_list-wrap-2">
              {filter_products.map((products) => {
                return <List {...products} key={products._id} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}


