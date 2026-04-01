import React from 'react'
import Button from './common/Button'
import { RECTANGLE_HERO_DATA } from '@/utils/helper'
import Icons from './common/Icons'

function Hero() {
  return (
    <div className="bg-[url('/assets/images/png/hero-bg.png')] bg-cover md:bg-center bg-no-repeat bg-[80%] h-full ">
      <div className='max-w-287 mx-auto px-1.5 pt-[252px]'>
        <div>
          <h1 className='max-w-[727px] font-poppins font-medium text-[64px] max-md:text-5xl max-sm:text-4xl leading-[118%] tracking-[-6%] text-white'>The Ultimate <span className='text-[#E9AE82]'>CS 2 Marketplace</span> for Gamers Who Mean Business</h1>
          <p className='pt-3.25 pb-10.25 font-medium text-[16px] leading-[125%] trracking-[-0.6%] font-poppins text-[#F5F5F5]'>Buy, sell, and trade skins securely with unbeatable prices and transparency</p>
          <Button />
          <div class="sm:mt-[82px] mt-[286px] w-full border-[1.5px] border-white/20 backdrop-blur-[50px] rounded-[24px] py-[28px] pl-[32px] max-md:py-5 max-md:pl-4.25 max-md:pr-3.75">
            <div className='md:flex md:flex-row md:gap-[70px]   grid grid-cols-2 gap-[24px]
    md:flex md:flex-row md:gap-[70px]'>
              {RECTANGLE_HERO_DATA.map((item, i) => {
              return  <div key={i} className='flex flex-row items-center gap-4 max-md:gap-2 group min-w-fit'>
                  <div className="hero-box-bg w-15 h-15 max-md:w-11 max-md:h-11 shrink-0 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Icons icon={item.icon} />
                  </div>
                <span className='text-nowrap font-medium text-base max-md:text-sm leading-[125%] max-md:leading-[140%] tracking-[0%] text-[#F5F5F5]'>{item.title}</span>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero