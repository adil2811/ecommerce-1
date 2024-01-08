import Header from '@/components/Header'
import Newproducts from '/components/Newproducts';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '/models/Product';
import React from 'react'
import Footer from '@/components/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';



export default function Productspage({products, currentPage,
  totalPages,productsPerPage,totalProducts}) {
    console.log({products})
    const router = useRouter();

  return (
    <>
         <Head>
        <title>Looking for Perfume in Mumbai | Your choice</title>
        <meta name="description" content="Discover Your Choice: Your Destination for Exquisite Masculine and Feminine Fragrances and Attar Perfumes" />

      </Head>
    <Header/>
    <div className='center'>
    <h1 className='title text-center'><b>All products</b></h1>
    </div>
    <div className='StyledProductGrid'>
    {
      products.map((product) =>{
        return <Newproducts key={product._id} {...product}  />

      })
    }
    </div>

    <div className="flex mb-3 max-sm:justify-between sm:flex sm:flex-1 sm:items-center sm:justify-between">
  <div>
    <p className="text-sm max-sm:text-[10px] max-sm:mt-2  text-gray-700">
      Showing <span className="font-medium">1</span> to <span className="font-medium">{productsPerPage}</span> of{' '}
      <span className="font-medium">{totalProducts}</span> results
    </p>
  </div>
  <div>
    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
    <a
        onClick={() => {
          if (currentPage > 1) {
            router.push(`/products?page=${currentPage - 1}`);
          }
        }}
        className="cursor-pointer	 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Previous</span>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
      />
    </svg>

      </a>
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <a
          key={page}
          onClick={() => {
            router.push(`/products?page=${page}`); 
          }}
          className={`cursor-pointer	 relative inline-flex items-center ${
            page === currentPage ? 'bg-black hover:bg-black text-white' : 'text-gray-900'
          } px-4 max-sm:px-3   py-2 text-sm max-sm:text-[10px] font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </a>
        );
      })}
     <a 
        onClick={() => {
          if (currentPage < totalPages) {
            router.push(`/products?page=${currentPage + 1}`);
          }
        }}
        className="cursor-pointer	 relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Next</span>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
      />
    </svg>

      </a>
    </nav>
  </div>
</div>


    <Footer/>


    
      </>
  )
}

export async function getServerSideProps(context) {
  await mongooseConnect();

  const page = parseInt(context.query.page) || 1; 
  const productsPerPage = 9; 

  const skip = (page - 1) * productsPerPage;

  const products = await Product.find({}, null, { sort: { _id: -1 } })
    .skip(skip)
    .limit(productsPerPage);

  const totalProducts = await Product.countDocuments();

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  context.res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate'); // Cache for 1 hour


  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      currentPage: page,
      totalPages,
      productsPerPage,
      totalProducts,
    },
  };
}