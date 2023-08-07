import React from 'react'
import { useFilterContext } from "@/components/Filter_context";


export default function Sort() {
    const { filter_products , sorting } = useFilterContext();

  return (
    <div className='colum-2'>
        <div className='text-gray-700'>All Products</div>
        <div className='text-gray-600'>Total Search results {filter_products.length}</div>
        <div className='ml-[30%] text-gray-800'>
            <form action="#">
                <lable htmlFor="sort"></lable>
                <select name="sort" id="sort" onChange={sorting}>
                <option value="recent" >recent item</option>

                    <option value="lowest">Price (lowest)</option>

                    <option value="higest">Price (higest)</option>


                    <option value="a-z">Price (a-z)</option>


                    <option value="z-a">Price (z-a)</option>

                </select>
            </form>
        </div>
      
    </div>
  )
}
