import { GUNS_DATA } from '@/utils/helper'
import React, { useState } from 'react'

function GunsSection() {
    const [activeCardIndex, setActiveCardIndex] = useState(null);

    return (
        <div className='absolute left-1/2 -translate-x-1/2 top-[145px] w-full max-[1024px]:z-10 z-50'>
            <div className='max-w-291.75 mx-auto'>
                <div className='flex flex-row pl-[39px] pr-[24.4px] pt-[23px] pb-[33.26px] backdrop-blur-[30px] bg-[#2C1638]  border-[1.5px] border-[#D9D9D9]/30 shadow-[10px_10px_30px_0px_rgba(0,0,0,0.6)] justify-between items-center rounded-[24px] max-[1200px]:rounded-[0px] max-[1200px]:overflow-x-auto max-[1200px]:whitespace-nowrap max-[1200px]:scrollbar-hide max-[1200px]:gap-6 w-full'>

                    {GUNS_DATA.map((item, i) => {
                        const isActiveCard = activeCardIndex === i;

                        return (
                            <div
                                key={i}
                                className='flex flex-col gap-[23px] '
                            >
                                <h6 onClick={() => setActiveCardIndex(i)} className={`cursor-pointer font-medium text-[16px] leading-[125%] tracking-[-0.6%] text-[#F5F5F5] ${isActiveCard ? 'bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent' : 'text-[#F5F5F5]'}`}>
                                    {item.title}
                                </h6>

                                <div >
                                    <div className={`w-[115.2px] h-[73.14px] flex items-center justify-center backdrop-blur-[45.71px] 
                                        rounded-[14.63px] shadow-[10px_10px_30px_0px_rgba(0,0,0,0.6)] bg-[#1C0829]
                                    `}>
                                        <img src={item.img} alt="image" />
                                    </div>

                                    <div className='flex flex-col'>
                                        <span className={`font-medium text-[15px] leading-[125%] tracking-[-0.6%] pt-[7.31px] text-[#F5F5F5]`}>
                                            {item.product}
                                        </span>

                                        <span className='text-[13px] font-medium text-[#F5F5F54F] leading-[140%] tracking-[-0.6%]'>
                                            {item.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default GunsSection



 