import React, { useState } from "react";
import { CartContext } from "/components/Cartcontexts";
import { useContext } from "react";
import Link from "next/link";

// import {AiOutlineSearch} from 'react-icons/ai'
// import { words } from '@/lib/data'
// Remember to import words or whatever you're using to store all the words the user can search for

export default function Searchbar({ product }) {
  const { setSearchBar, searchBar, activeStyle } = useContext(CartContext);
  const activeStyle1 = "ml-[100%] delay-200";
  const notactivestyle = "delay-200 ml-[0%]";

  const title = product.map((product, product1) => {
    return {...product};
  });
  const id = title.map((a) => a.b);
  const value = (e) => {
    return e;
  };

  console.log(id);
  console.log({ title });

  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
    if (e.target.value == "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      title
        .map((a) => (a.title))
        .filter((w) => w.includes(e.target.value.toLowerCase()))
        .slice(0, 8)
    );
  };
  const cancel = () => {
    setSearchBar(false);
  };

  console.log(activeSearch);

  return (
    <form className={searchBar ? "sbactice is-active" : "sbactice"}>
      <div className="relative felx mt-2 ml-20">
        <input
          type="search"
          placeholder="Type Here"
          className="w-[80%] p-4 rounded-full bg-slate-800 text-white"
          onChange={(e) => handleSearch(e)}
        />
        <span onClick={cancel} className="text-white text-3xl mt-100 ml-5">
          Cancel
        </span>
      </div>
      <div className="flex mt-4">
        {activeSearch.length > 0 && (
          <div className="flex absolute top-110 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
            {activeSearch.map((s) => (
            <Link href={'/product/'+""}>  <span >{s.toLowerCase()}</span></Link>
            ))}
            {}
          </div>
        )}
      </div>
    </form>
  );
}
