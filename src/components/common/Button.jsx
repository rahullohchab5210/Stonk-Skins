import React from 'react'
import Icons from './Icons'

function Button() {
  return (
      <div>
          <div className="flex items-center btn-bg sm:mx-5 mx-4  max-w-61.25 w-full h-13 transition-all duration-300 cursor-pointer hover:scale-105">
              <button className='flex items-center justify-center w-[193px] text-base font-medium leading-[125%] tracking-[-6%] text-[#F5F5F5] font-dm cursor-pointer '>Login with Steam</button>
              <button className="flex items-center justify-center bg-[#FFFFFF0F]/6 h-13 w-13 rounded-[500px] cursor-pointer">
                  <Icons icon={"BTN_ARROW"} pathClass={""}/>
              </button>
          </div>
      </div>
  )
}

export default Button