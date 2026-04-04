import { HOW_ITS_WORK_DATA } from '@/utils/helper'
import React from 'react'
import Button from './common/Button'

function HowItWorks() {
    return (
        <div className=" bg-[url('/assets/images/png/how-works-bg.png')] bg-cover bg-center bg-no-repeat sm:max-h-[752px] pt-[100px] sm:pt-[169px] sm:pb-[227px] pb-[93px] h-full relative">
            
            <div className='max-w-285 mx-auto px-3 relative'>
                <div className="max-[664px]:hidden absolute z-1 top-[113px] left-1/2 -translate-x-1/2 w-[70%] max-[984px]:w-[35%]  border-t border-dashed border-white/30"></div>
                <h3 className='sm:pb-5.5 max-sm:pb-[48px] font-medium sm:text-5xl text-[40px] leading-[118%] tracking-[-6%] text-white text-center font-poppins'>How It Works</h3>
                <div className='flex flex-row max-lg:flex-wrap max-lg:gap-y-10 max-lg:justify-center items-center justify-between mb-10'>
                    {HOW_ITS_WORK_DATA.map((item, i) => {
                        return <div key={i} className='flex sm:flex-col max-sm:gap-[15.96px] flex-row sm:items-center max-w-[320px]  '>
                            <div className="z-3 w-full bg-[url('/assets/images/png/how-works-ellipse.png')] max-w-[68.04px] h-[69px] bg-cover flex items-center justify-center font-medium text-[32px] leading-[118%] tracking-[-6%] text-white font-poppins">
                                {item.number}
                            </div>
                            <div className='flex flex-col'> 
                         <h5 className='sm:pt-6.25 pt-5 font-medium sm:text-[32px] text-2xl leading-[118%] tracking-[-6%] sm:text-center text-white font-poppins'>{item.title}</h5>
                         <p className= 'sm:px-3 sm:text-center sm:pt-3.25 pt-[29px] font-medium text-base leading-[20px] tracking-[-0.6%] text-[#F5F5F5] font-dm'>{item.description}</p>
                        </div>
                        </div>
                    })}
                </div>
                <div className='flex items-center justify-center'>
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks



 