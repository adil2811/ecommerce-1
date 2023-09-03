import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { BlogPost } from "@/models/Blog";
import { mongooseConnect } from "@/lib/mongoose";
import Image from 'next/image'; // Import the Next.js Image component

export default function BlogPage({ blog }) {
  console.log(blog);

  // Check if the blog data is available before rendering
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-black text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          {/* Use the Next.js Image component */}
          <img
            src={blog.images[1]}
            alt={blog.title}
            className="w-full h-60 sm:h-96 bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
            <h1 className="space-y-2">
                {blog.title}
            
              <p className="text-xs text-gray-400">By
                 Adil shaikh
                
              </p>
            </h1>
            <div className="text-gray-100">
              <article>{blog.content}</article>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const blog = await BlogPost.findById(id);

  // Return the blog data as props
  return {
    props: {
      blog: blog ? JSON.parse(JSON.stringify(blog)) : null,
    }
  }
}
