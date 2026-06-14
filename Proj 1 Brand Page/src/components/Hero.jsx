import React from 'react'
import shoe_image from '../assets/shoe_image.png'
import amazon from '../assets/amazon.png'
import flipkart from '../assets/flipkart.png'

function Hero() {
    return (
        <div className='flex justify-center p-20'>
            <div className='text-div h-[613px] w-[595px]'>
                <div className='font-bold text-[90px]  no-underline'>YOUR FEET DESERVE THE BEST
                </div>
                <div className='pb-[38px] ContentDiv text-gray-700 text-[18px] max-w-[400px] max-h-[91px] pt-[16px] pb-[36px] pr-[48px]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </div>
                <div className='BtnDiv flex justify-start max-h-41px max-w-331px pt-[30px]'>
                    <button className='bg-red-500 text-white text-[14px] font-medium m-[5px] py-[6px] px-[16px] border-[1px] border-gray-solid ml-[0px]'>Shop Now</button>
                    <button className='text-[14px] font-medium m-[5px] py-[6px] px-[16px] border-[1px] border-gray-solid'>Category</button>
                </div>
                <div className='SocNetDiv text-gray-700 text-[18px] pt-[5px]'>Also Available On:
                    <div className='flex justify-start pt-[5px] mb-[2px]'>
                        <div className='w-[32px] h-[32px] pr-[4px]'><a href="www.amazon.com"><img src={amazon} alt="" /></a></div>
                        <div className='w-[32px] h-[32px] ml-[12px]'><a href="www.flipkart.com"><img src={flipkart} alt="" /></a></div>
                    </div>
                </div>
            </div>
            <div className='h-[640px] w-[582px]'>
                <img className='w-[640px] h-[582px]' src={shoe_image} alt="nike shoe" />
            </div>
        </div>
    )
}

export default Hero