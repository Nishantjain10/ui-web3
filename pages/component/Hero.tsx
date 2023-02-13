import React from 'react'
import clampVector from "@/public/images/clampVector.svg";
import clampVectorBg from "@/public/images/clampVectorBg.svg";
import clampVectorBgOne from "@/public/images/clampVectorBgOne.svg";
import clampVectorBgTwo from "@/public/images/clampVectorBgTwo.svg";
import clampVectorBgThree from "@/public/images/clampVectorBgThree.svg";
import btnSparkle from "@/public/images/btnSparkle.svg";
import btnSparklePrimary from "@/public/images/btnSparklePrimary.svg";
import btnHeart from "@/public/images/btnHeart.svg";
import clampArrow from "@/public/images/clampArrow.svg";
import Image from "next/image";


const Hero = () => {
  return (
    <div className='hero-section md:container md:mx-auto flex flex-row justify-around items-center py-36'>
      <Image src={clampVectorBgOne} className ="absolute top-30 left-24 max-2xl:left-0" alt={""}></Image>
      <Image src={clampVectorBgThree} className ="absolute top-30 right-24 max-2xl:right-4" alt={""}></Image>
      
      <div className='flex flex-col justify-center gap-y-10'>
        <div className='hero-title font-poppins text-product-orange text-7xl text-left leading-tight font-semibold w-[20ch]'>Getting started with 
        <span className='text-product-green'> Crypto</span> is finally <span className='text-product-green'> easy</span>
        <span className='inline-block'>
        <Image src={clampArrow} className ="absolute -mt-3 -ml-12" alt={""}></Image>
        </span>
        </div>
        <div className='font-poppins font-medium text-product-green text-2xl w-[716px] text-left' >
          <span className='inline-block'>
          <Image src={btnSparklePrimary} className ="absolute -mt-12 -ml-8" alt={""}></Image>
            </span> 
            Start your cryptocurrency and DeFi journey today with Clamp. Access a wide range of passive income generation tools, such as digital asset indexes, yield bearing tokens, and a lot more.</div>
        <div className='flex flex-row items-center gap-x-14 py-4 px-1'>
          <div className='border-2 text-lg text-product-green font-poppins font-medium px-8  shadow-sm shadow-product-yellow py-2 border-product-green bg-product-yellow rounded-lg'>Explore Indexes</div>
        <div className='-ml-14 -mt-12'>
        <Image src={btnSparkle} className ="" alt={""}></Image>
        </div>
          <div className='border-2 text-lg text-product-green font-poppins font-medium px-14  shadow-sm shadow-product-yellow py-2 border-product-green  rounded-lg'>Learn More</div>
        <div className=' -ml-12 -mt-12'>
        <Image src={btnHeart} className ="" alt={""}></Image>
        </div>
        <div className='pl-10'>
        <Image src={clampVectorBgTwo} className ="absolute" alt={""}></Image>
        </div>
        </div>
      </div>
      <div>
      <Image src={clampVectorBg} className ="absolute -z-10" alt={""}></Image>
      <Image src={clampVector} className ="z-10" alt={""}></Image>
      </div>
    </div>
  )
}

export default Hero