import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { BlogPost } from "@/models/Blog";
import Link from 'next/link';
import {mongooseConnect} from "@/lib/mongoose";

export default function Blogs({blog}) {
  console.log(blog)

  

  const formatDate = (dateString) => {

    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-based
    const year = date.getFullYear().toString().slice(2); // Getting the last two digits of the year
    return `${day}-${month}-${year}`;
  };
  return (
    <>
    <Header/>
    <div className="flex justify-center">
  <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center">
  {blog.map((post) => (
            <Link href={"/blogs/" + post._id}  
              key={post._id} // Assuming each blog post has a unique identifier like _id
              className="overflow-hidden md:w-1/4 bg-white m-4 shadow-lg flex flex-col justify-center text-black hover:text-white hover:bg-green-500 hover:scale-105 rounded"
            >
              <div className="h-26 w-full overflow-hidden">
             
                  <img src={post.images[1]} alt="" className="" />
            
              </div>
              <div className="text-sm m-2">{formatDate(post.datePosted)}</div>
              <div className="font-medium text-normal m-2">{post.title}</div>
           
            </Link>
          ))}

  </div>
</div>

  <Footer/>
  </>
  )
}

export async function getServerSideProps() {
  await mongooseConnect();
  const blog = await BlogPost.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      blog: JSON.parse(JSON.stringify(blog)),
    },
  };
}
