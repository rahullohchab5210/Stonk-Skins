import { CATEGORY_DATA } from '@/utils/helper'
import React from 'react'

function Category({ onSelectCategory, activeIndex }) {
  return (
    <div className='max-w-[1140px] mx-auto max-lg:px-3 '>
      <div className='flex flex-row items-center gap-[33px] mt-[14px] mb-[18px] max-w-[1127px] max-xl:overflow-x-auto max-xl:whitespace-nowrap max-xl:scrollbar-hide max-xl:px-2 w-full '>

        {Array(8).fill(CATEGORY_DATA).map((item, i) => {
          const isActive = activeIndex === i;

          // Gradient class for text
          const gradientTextClass = 'bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent';

          return (
            <div
              key={i}
              onClick={() => onSelectCategory(i)}
              className='flex flex-row items-center gap-[11px] cursor-pointer'
            >

              {/* Title */}
              <span className={`font-medium text-[16px] leading-[120%] tracking-[-0.6%] 
                ${isActive ? gradientTextClass : 'text-[#F5F5F5]'}`}>
                {item.title}
              </span>

              {/* Sub category (icon) */}
              <div className={`py-[3px] px-2.5 bg-[#220E2D] border-2 border-[#432755] rounded-[8px] shadow-[0px_3.5px_0px_0px_#3B214B] font-medium text-[14px] leading-[140%] tracking-[0%]`}>
                <div className={`
                   
                    ${isActive ? gradientTextClass : 'text-white'}`}
                >
                  {item.icon}
                </div>
              </div>

            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Category




 