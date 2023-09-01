import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import aboutus from '../public/img/aboutus.jpg'
export default function about() {
  return (
    <>
    <Header/>
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Welcome to Your Choice, where elegance blends harmoniously with the enchantment of fragrance. We are enthusiastic creators and providers of exceptional scents, devoted to captivating your senses and elevating your experiences with our one-of-a-kind olfactory offerings.

Our Origins

The genesis of Your Choice revolves around a profound admiration for the artistry and enchantment of perfume. We firmly believe that fragrance transcends mere odor; it embodies one's character, evokes emotions, and etches lasting memories. This belief has driven us to meticulously craft unique scents that resonate deeply with the heart and spirit.

Our journey commenced in 2022 when a group of like-minded individuals, each possessing expertise in perfumery, design, and marketing, united to create something extraordinary. With a dedication to quality and innovation, we set out to redefine the perfume industry.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <Image  src={aboutus} width={1000} height={1000} alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row ustify-between gap-8 pt-12">
                <div className="w-full lg:w-full flex justify-center">
            
                    <p className="font-normal text-base leading-6 text-gray-600 ">


Welcome to Your Choice, where elegance blends harmoniously with the enchantment of fragrance. We are enthusiastic creators and providers of exceptional scents, devoted to captivating your senses and elevating your experiences with our one-of-a-kind olfactory offerings.

Our Origins

The genesis of Your Choice revolves around a profound admiration for the artistry and enchantment of perfume. We firmly believe that fragrance transcends mere odor; it embodies one's character, evokes emotions, and etches lasting memories. This belief has driven us to meticulously craft unique scents that resonate deeply with the heart and spirit.

Our journey commenced in 2022 when a group of like-minded individuals, each possessing expertise in perfumery, design, and marketing, united to create something extraordinary. With a dedication to quality and innovation, we set out to redefine the perfume industry.

Our Core Values

At Your Choice, our foundation rests upon a commitment to excellence, authenticity, and sustainability. True luxury, in our view, extends beyond ingredients to encompass the meticulous care and artistry poured into each bottle. Our perfumers, armed with years of experience, meticulously choose the finest natural and synthetic components to craft fragrances as distinctive as they are enticing.

Environmental responsibility is another cornerstone of our philosophy. Sustainability isn't just a buzzword; it's an integral part of who we are. We consistently work towards reducing our environmental impact by sourcing eco-friendly materials, minimizing waste, and advocating ethical practices in the perfume industry.

Our Collections

Discover our diverse array of fragrance collections, thoughtfully curated to cater to various moods, personalities, and occasions. Whether you're in search of a signature scent for everyday use, a special fragrance for memorable moments, or a thoughtful gift for a loved one, we offer a selection to satisfy all tastes and preferences.

Embark on a Fragrant Odyssey with Us

At Your Choice, we extend an invitation to embark on a fragrant journey together. Immerse yourself in our realm of captivating scents and explore the enchantment of perfume in a whole new light. Our goal is not merely to sell fragrances but to create cherished memories, stir emotions, and help you express your unique identity through scent.

We appreciate your choice of Your Choice as your fragrance companion. We eagerly anticipate being a part of your remarkable scented moments and assisting you in leaving an enduring impression wherever you go.

Savor the essence of luxury. Encounter Your Choice.</p>
                </div>
             
            </div>
        </div>
    <Footer/>
    </>
  
  )
}
