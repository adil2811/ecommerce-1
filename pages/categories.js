
import Filterpanel from "@/components/Filterpanel";
import Header from "@/components/Header";
import Searchbar1 from "@/components/Searchbar1";
import List from "@/components/List";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "/models/Product";
import { useState, useEffect } from "react";
import { useFilterContext } from "@/components/Filter_context";

import axios from "axios";
import Sort from "@/components/Sort";
import Footer from "@/components/Footer";

export default function categories({ Filterproducts, Newproducts }) {
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

export async function getServerSideProps() {
  await mongooseConnect();

  const Filterproducts = await Product.find({}, null, { sort: { _id: -1 } });
  const Newproducts = await Product.find({}, null, { sort: { _id: -1 } });

  return {
    props: {
      Filterproducts: JSON.parse(JSON.stringify(Filterproducts)),
      Newproducts: JSON.parse(JSON.stringify(Newproducts)),
    },
  };
}
