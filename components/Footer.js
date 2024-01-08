import React from 'react'
import Link from 'next/link'


export default function Footer() {
    const phoneNumber = '+918452050281'; 
  const emailAddress = 'skadil718@gmail.com'; 

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl);
  };
    
    
  return (
    <div>
       <div className="bg-black p-4 items-center">

<div className="space-y-9 grid grid-cols-1 md:grid-cols-2 md:pl-24 md:pr-16 lg:grid-cols-4 lg:px-7 xl:px-14 xl:ml-16">
    <div className="text-[#6d6d6d] font-[650] text-[16px] leading-7">
        <div className="flex justify-start md:mt-10">
            <h1
                className="text-white pb-[36px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                Inform </h1> <span className="text-white font-sans uppercase font-normal tracking-wider">ation</span>
        </div>
        <p className='mr-4 '>
        Introducing YourChoiceee: a perfumery that redefines fragrance creation with opulence and elegance. Each scent is a masterpiece, blending rare ingredients and storytelling. From alluring florals to masculine colognes, YourChoiceee offers an unforgettable sensory experience. Their bottles are art, and each fragrance comes with a captivating narrative. Experience luxury and sophistication with YourChoiceee – where memories and emotions intertwine in every drop.
        </p>
    </div>
    <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide md:">
        <div>
            <pre
                className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90"> CATEGORIES &nbsp;</pre>
        </div>
        <p>Perfume</p>
        <p>Attar</p>
        <p>Cloths(coming soon)</p>
    </div>
    <div className="md:flex flex-col justify-between">
        <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide">
            <div className="flex justify-start">
                <h1
                    className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                    USEFUL </h1> <span className="text-white font-sans uppercase font-normal tracking-wider">LINK</span>
            </div>
            <p className=""> <Link className="hover:text-[#cacaca]" href={'/about'}  >About us</Link> </p>
            <p className=""> <Link className="hover:text-[#cacaca]" href={'/refund'}>Support</Link> </p>
            <p className=""> <Link className="hover:text-[#cacaca]" href={'/refund'}> Return, Exchange and Refund</Link> </p>
            <p className=""> <Link className="hover:text-[#cacaca]" href={'/refund'}> Shipping Policy</Link> </p>
            <p className=""> <Link className="hover:text-[#cacaca]" href={'/refund'}> Terms and conditions</Link> </p>
            <p className=""> <Link className="hover:text-[#cacaca]" href={'/refund'}> Cancellation Policy</Link> </p>



  
        </div>
        <div
            className="text-[#747474] text-[15px] font-[550] leading-6 tracking-wide mt-9 md:order-5 md:pt-32 lg:pb-28">
            <div className="flex justify-start md:-mt-32">
                <h1
                    className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                     </h1> <span className="text-white font-sans uppercase font-normal tracking-wider"></span>
            </div>
            
        </div>
    </div>
    <div className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
        <div className="flex justify-start">
            <h1
                className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                get in t </h1> <span className="text-white font-sans uppercase font-normal tracking-wider">ouch</span>
        </div>
        <p className="space-x-3"> <i className="fa fa-home text-[17px]"></i><strong
                className="text-[#8b8b8b] text-[15px] tracking-wide">Our Office Address</strong> </p>
        <div className="leading-7">
            <p className=""> Amin Building ground floor shop 10 JJ
                            <br/>  (India) </p>
        </div>
        <div className=" justify-start leading-7 mt-5 text-[15px] font-[500]">
          
        <p className=" ml-[-10px] space-x-3 cursor-pointer" onClick={openWhatsApp}>
        <i className="fa fa-whatsapp text-[17px]"></i>
        <strong className="text-[#8b8b8b] text-[15px] tracking-wide">
          WhatsApp: {phoneNumber}
        </strong>
      </p>          
            <a href={`mailto:${emailAddress}`} className="text-[#8b8b8b] text-[15px] tracking-wide">
          Email: {emailAddress}
        </a>
        </div>
    </div>
</div>
<div className="divide-y divide-[#747474] contrast-200 mt-3 mb-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24">
    <p>&nbsp;</p>
    <p>&nbsp;</p>
</div>
<div className="flex justify-center mb-4 md:mb-1 text-[#afafaf] text-center text-xl space-x-3">
    <p> <Link href="#"
    aria-label="Click here to follow us on facebook"
            className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[7px]">
              <svg xmlns="http://www.w3.org/2000/svg" className='mt-[-5px] ml-1' loading="lazy"  width="35" height="35" viewBox="0 0 50 50">
    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
  </svg>
                </Link> </p>
    <p> <Link href="#"
        aria-label="Click here to follow us on twiiter"

    className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    loading="lazy"
    x="0px"
    y="0px"
    className='mt-[-3px] ml-1'
    width="35"
    height="35"

    viewBox="0 0 50 50"
  >
    <path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"></path>
  </svg>
                
                </Link> </p>
    <p> <Link href="#"
        aria-label="Click here to follow us on instagram"

            className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px] ">
               <svg xmlns="http://www.w3.org/2000/svg" className='mt-[-2px] ml-[2px]' width="35" height="35"   loading="lazy" viewBox="0 0 50 50">
      <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
    </svg>
                </Link> </p>



</div>
</div>

    </div>
  )
}
