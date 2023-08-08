'use client'
import React from 'react'
import { useFilterContext } from './Filter_context'

export default function Searchbar1({}) {
  const { filter: { text }, updateFilterValue } = useFilterContext();

  return (
    <>
    <form onSubmit={(e) => e.preventDefault()}>
      <div className='searchBar-wrap'>
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-4 mt-1 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
<input type='text' name='text' placeholder='Make out Hills' value={text || ''} onChange={updateFilterValue} />
</div>
</form>
    </>
  )
}
