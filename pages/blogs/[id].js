import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { BlogPost } from "@/models/Blog";
import { mongooseConnect } from "@/lib/mongoose";
import Image from 'next/image';
import Head from 'next/head';


export default function BlogPage({ blog }) {
  function renderContentWithLineBreaks(content) {
    const paragraphs = content.split('\n'); // Split content into paragraphs
    return paragraphs.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  }
  console.log(blog);

  // Check if the blog data is available before rendering
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
         <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.content.slice(0,50) + '...'} />
        

      </Head>
      <Header />
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-black text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          {/* Use the Next.js Image component */}
          <Image
            src={blog.images[0]}
            alt={blog.title}
            width={1920} // Set your preferred width
            height={1080} // Set your preferred height
            layout="responsive" // Choose layout type
            objectFit="cover" // Choose object-fit value
            className=" sm:h-96 bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
            <h1 className="space-y-2">
                {blog.title}
            
              <p className="text-xs text-gray-400">By
                 Adil shaikh
                
              </p>
            </h1>
            
            <div className="text-gray-100">
              <h2 className='text-xl text-center text-pink-600'>{blog.H1}</h2>
              <article>              
                  {renderContentWithLineBreaks(blog.content)}
              </article>
              <h3 className='text-xl text-center text-pink-600'>{blog.H2}</h3>
              <article>              
                  {renderContentWithLineBreaks(blog.content2)}
              </article>
              <h4 className='text-xl text-center text-pink-600'>{blog.H3}</h4>
              <article>              
                  {renderContentWithLineBreaks(blog.content3)}
              </article>
              <h5 className='text-xl text-center text-pink-600'>{blog.H4}</h5>
              <article>              
                  {renderContentWithLineBreaks(blog.content4)}
              </article>
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
  context.res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate'); // Cache for 1 hour

  // Return the blog data as props
  return {
    props: {
      blog: blog ? JSON.parse(JSON.stringify(blog)) : null,
    }
  }
}
