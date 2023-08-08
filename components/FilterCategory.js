
import React from 'react'
import { useFilterContext } from './Filter_context';

export default function   FilterCategory() {

    const { categories , name,updateFilterValue} = useFilterContext();

 console.log(categories)

//  const getUniqueData = (data,property,_id) => {
//     let newVal = data.map((curElem)=>{
//         return curElem[property,_id];
//     })
//     return (newVal = ["All", ...new Set(newVal)]);

//  }


//  const categoryOnlyData = getUniqueData(categories,"name","_id");


  return (

    <>
    <h3 className='mt-[13px] ml-9 text-black-900 text-xl' >
       Category
    </h3>
    <ul className='ml-8 p-2 '  >
        <li className='text-gray-600 hover:text-green-600'><button type="button"  name='category' onClick={updateFilterValue}>All</button></li>
   {categories.map((curElem,index)=> {
        return  <li className='mt-1 text-gray-600 hover:text-green-600 active:text-red-600 ' key={index}><button key={index} type="button" value={curElem._id} name='category' onClick={updateFilterValue}>{curElem.name}</button></li>
    })

   }
   
   
   
    {/* {categoryOnlyData.map((curElem,index)=> {
        return  <li className='mt-1'><button key={index} type="button" value={curElem._id} name='category' onClick={updateFilterValue}>{curElem._id}</button></li>
    })} */}
    </ul>
    </>
  )
}
