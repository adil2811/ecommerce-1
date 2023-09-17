import React from 'react'
import Image from 'next/image'
import spicy from  '../public/img/spicy.webp'
import wood from  '../public/img/wood.webp'
import Flor from  '../public/img/f.webp'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function smell() {
  return (
    <>
    <Header/>
    <div className="flex justify-center">
    <div className="flex flex-col max-w-7xl justify-center items-center">
      <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
        <div className="h-26 w-full overflow-hidden">
        <Image src={spicy} height={500} width={500} alt="" className=" " />

        </div>
        <div className="grid p-2">
          <div className="font-bold text-lg text-black m-2 mt-10">Spicy
          </div>
          <div className="text-gray-500 m-2 text-sm">
        
            A spicy fragrance is a captivating and invigorating olfactory experience that infuses warmth and intensity into the air. Comprising notes like cinnamon, clove, pepper, and nutmeg, it evokes a sense of richness and exotic allure. The harmonious blend of these spicy elements often creates a passionate and energetic ambiance. Whether worn as a personal scent or diffused in a space, the spicy fragrance adds a touch of excitement and complexity, making it a popular choice for those who appreciate the vibrant and bold side of perfumery.
       
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
        <div className="grid p-2">
          <div className="font-bold text-lg text-black m-2 mt-10">
                Woody
          </div>
          <div className="text-gray-500 m-2 text-sm">
           
            The captivating charm of wood fragrance endures, presenting a variety of captivating scents. From the natural tones of cedarwood to the enigmatic qualities of oud, each kind of wood unfolds a distinctive aromatic tale. Found in perfumes, candles, and surroundings, its flexibility provides an honest and reassuring sensory journey. This aromatic exploration through wood fragrance not only stirs feelings but also nurtures a profound link to the timeless beauty of nature. 
          </div>
        </div>
        <div className="h-26 w-full overflow-hidden">
        <Image src={wood} height={500} width={500} alt="" className=" " />

        </div>
      </div>
      <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
        <div className="h-26 w-full overflow-hidden">
        <Image src={Flor} height={500} width={500} alt="" className=" " />

        </div>
        <div className="grid p-2">
          <div className="font-bold text-lg text-black m-2 mt-10">
          Fougère.
          </div>
          <div className="text-gray-500 m-2 text-sm">
      
            The Fougère fragrance, a timeless and enduring aromatic theme, encapsulates the feeling of verdant nature. It combines lavender, oakmoss, and coumarin notes to conjure the refreshing aroma of a post-rainforest. Frequently complemented by hints of herbs or citrus, this fragrance style is both revitalizing and refined. With its classic charm and adaptable nature, the Fougère fragrance remains a fundamental element in perfumery, catering to individuals who value the harmonious interplay of freshness and aromatic complexity.
          </div>
        </div>
      </div>
    </div>
  </div> 
  <Footer/>
  </>
   )
}
