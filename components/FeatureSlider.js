import React from 'react'
import Image from 'next/image'
import img from '../public/img/aboutus.jpg'

export default function FeatureSlider() {
  return (
    <div className="flex flex-col space-y-2 py-16 h-[25vh] md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 lg:pl-24 relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[95vh] -z-10">
        <Image
          src={img}
          alt="Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      </div>
      <div className="lg:ml-20 ">
      <h1 class="text-red-600 text-2xl md:text-4xl lg:text-6xl m font-bold">
    <span class="bg-black bg-opacity-10">+50% Off On Every perfume <br/> Limited Period </span>
  </h1>
 
  
      
      </div>
    </div>
  )
}
