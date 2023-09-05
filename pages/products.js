import Header from '@/components/Header'
import Newproducts from '/components/Newproducts';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '/models/Product';
import React from 'react'
import Footer from '@/components/Footer';
import Head from 'next/head';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function Productspage({products, currentPage,
  totalPages}) {
    console.log({products})
  return (
    <>
         <Head>
        <title>Looking for Perfume in Mumbai | Your choice</title>
        <meta name="description" content="Discover Your Choice: Your Destination for Exquisite Masculine and Feminine Fragrances and Attar Perfumes" />

      </Head>
    <Header/>
    <div className='center'>
    <h1 className='title'>All products</h1>
    </div>
    <div className='StyledProductGrid'>
    {
      products.map((product) =>{
        return <Newproducts key={product._id} {...product}  />

      })
    }
    </div>

    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
  <div>
    <p className="text-sm text-gray-700">
      Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
      <span className="font-medium">99</span> results
    </p>
  </div>
  <div>
    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
      <a
        href="#"
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Previous</span>
        {/* Add your Previous icon here */}
      </a>
      {/* Loop through and render your page numbers here */}
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <a
            key={page}
            href={`#page-${page}`} // Replace with the actual link
            className={`relative inline-flex items-center ${
              page === currentPage ? 'bg-indigo-600 text-white' : 'text-gray-900'
            } px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </a>
        );
      })}
      <a
        href="#"
        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Next</span>
        {/* Add your Next icon here */}
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

  // Retrieve pagination parameters from the query string or use default values
  const page = parseInt(context.query.page) || 1; // Current page (default to 1)
  const productsPerPage = 6; // Number of products per page (you can adjust this as needed)

  // Calculate the skip value based on the current page
  const skip = (page - 1) * productsPerPage;

  // Fetch products with pagination
  const products = await Product.find({}, null, { sort: { _id: -1 } })
    .skip(skip)
    .limit(productsPerPage);

  // Count the total number of products
  const totalProducts = await Product.countDocuments();

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      currentPage: page,
      totalPages,
    },
  };
}