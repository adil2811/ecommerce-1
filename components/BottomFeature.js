import React from 'react'
import Image from 'next/image'
import spicy from  '../public/img/spicy.webp'
import wood from  '../public/img/wood.webp'
import Flor from  '../public/img/f.webp'
import banner from '../public/img/321.png'

export default function BottomFeature() {
  return (
 <>
 
   
 <div className="flex justify-center p-4 bg-black">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="text-white text-3xl md:text-5xl font-medium my-2">Discover Your Choice</div>
        <div className="text-white md:text-xl my-2 w-3/4">
There's nothing quite as effective as a smell to trigger a long-forgotten memory, whether it's the recollection of a past romantic relationship or the cherished moments spent with a dear friend.s</div>
        <div className="my-2 flex flex-col md:flex-row max-w-7xl justify-center items-center">
          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="overflow-hidden m-4 flex flex-col justify-center bg-gray-600 rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <div className="items-center justify-center flex py-2">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="text-stone-200 m-2 px-8 text-xs">
The captivating charm of wood fragrance endures, presenting a variety of captivating scents. From the natural tones of cedarwood to the enigmatic qualities of oud, each kind of wood unfolds a distinctive aromatic tale. Found in perfumes, candles, and surroundings, its flexibility provides an honest and reassuring sensory journey. This aromatic exploration through wood fragrance not only stirs feelings but also nurtures a profound link to the timeless beauty of nature. </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-6 w-6 bg-gray-600 -mt-8 mb-4 origin-center rotate-45"></div>
              <div className="flex flex-col items-center justify-center">
                <Image src={wood} height={50} width={50} alt="" className="rounded-full" />
                <div className="text-white text-sm font-medium">Wood</div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="overflow-hidden m-4 flex flex-col justify-center bg-gray-600 rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <div className="items-center justify-center flex py-2">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="text-stone-200 m-2 px-8 text-xs">The Fougère fragrance, a timeless and enduring aromatic theme, encapsulates the feeling of verdant nature. It combines lavender, oakmoss, and coumarin notes to conjure the refreshing aroma of a post-rainforest. Frequently complemented by hints of herbs or citrus, this fragrance style is both revitalizing and refined. With its classic charm and adaptable nature, the Fougère fragrance remains a fundamental element in perfumery, catering to individuals who value the harmonious interplay of freshness and aromatic complexity.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-6 w-6 bg-gray-600 -mt-8 mb-4 origin-center rotate-45"></div>
              <div className="flex flex-col items-center justify-center">
                <Image src={Flor} height={50} width={50} alt="" className="rounded-full " />
                <div className="text-white text-sm font-medium">Fougère </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="overflow-hidden m-4 flex flex-col justify-center bg-gray-600 rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <div className="items-center justify-center flex py-2">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="text-stone-200 m-2 px-8 text-xs">A spicy fragrance is a captivating and invigorating olfactory experience that infuses warmth and intensity into the air. Comprising notes like cinnamon, clove, pepper, and nutmeg, it evokes a sense of richness and exotic allure. The harmonious blend of these spicy elements often creates a passionate and energetic ambiance. Whether worn as a personal scent or diffused in a space, the spicy fragrance adds a touch of excitement and complexity, making it a popular choice for those who appreciate the vibrant and bold side of perfumery.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-6 w-6 bg-gray-600 -mt-8 mb-4 origin-center rotate-45"></div>
              <div className="flex flex-col items-center justify-center">
                <Image src={spicy} height={50} width={50} alt="" className="rounded-full " />
                <div className="text-white text-sm font-medium">spicy</div>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for the other two testimonials */}
        </div>
      </div>
    
    </div>


 
 </>
  )
}
