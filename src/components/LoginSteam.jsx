import React from 'react'
import Button from './common/Button'

function LoginSteam() {
  return (
      <div className='h-full w-full sm:pt-[233px] pt-[85px] '>
          <div className='max-w-287 mx-auto max-[1200px]:px-4'>
              <div className="bg-[url('/assets/images/png/login-steam-bg.png')] bg-cover bg-center h-full w-full rounded-3xl">
                  <div className='flex flex-col items-center sm:pt-9.5 pt-10.5 sm:pb-9.5 pb-10.5 max-[370px]:px-1'> 
                      <h3 className='font-medium sm:text-5xl text-[32px] leading-[118%] tracking-[-6%] text-white font-poppins text-center sm:max-w-[601px] min-[370px]:max-w-[312px] max-w-full'>Start Trading Smarter with StonksSkins Today!</h3>
                      <p className='sm:pt-2.75 pt-4 sm:pb-4 pb-6  font-bold text-base leading-[20px] tracking0-[-0.6%] text-[#F5F5F5] font-dm text-center sm:max-w-[450px] max-w-[352px] '>Join thousands of gamers already buying, selling, and trading skins securely and hassle-free.</p>
                      <Button/>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default LoginSteam