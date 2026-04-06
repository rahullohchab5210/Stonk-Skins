"use client";
import { PAYMENT_ICONS_DATA, PAYMENT_TEXT_DATA, SOCIAL_MEDIA_DATA, USEFUL_LINKS } from '@/utils/helper'
import React from 'react'
import Icons from './Icons'

function Footer() {
  return (
    <div className='  h-full w-full md:pt-[113px] sm:pt-[100px] pt-[85px]'>
      <div className='max-w-287 mx-auto  px-5'>
        <div className='flex lg:flex-row max-sm:gap-y-8 flex-col justify-between'>
          <div className='max-w-[310px]'>
            <a href="#"><img src="/assets/images/png/logo.png" alt="logo" loading="lazy" className='max-w-39.25 max-h-18.5 w-full h-full' /></a>
            <p className='py-5 font-medium text-base leading-[20px] tracking-[-0.6%] text-[#F5F5F5] font-dm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lorem.</p>
            <div className='flex flex-row items-center gap-3'>
              {SOCIAL_MEDIA_DATA.map((item, i) => {
                return <a key={i} href={item.url} aria-label={item.label} target="_blank" className="h-8 w-8 rounded-full bg-linear-to-r from-[#e9ad83] to-[#9b1fe8] flex justify-center items-center hover:scale-110 transition-all duration-300">
                  <Icons icon={item.link} />
                </a>
              })}
            </div>
          </div>

          <div className='flex sm:flex-row flex-col max-sm:gap-y-8 min-[1100px]:gap-[81.61px] max-[1100px]:gap-[50px] max-lg::gap-[81.61px]'>
            <div >
              <h3 className="font-semibold text-[20px] leading-[118%] tracking-[-6%] font-poppins text-white mb-8">Useful Links</h3>

              <div className="grid grid-cols-2 min-[370px]:gap-x-[81.61px] gap-[40px]">
                {USEFUL_LINKS.map((col, i) => (
                  <ul key={i} className="space-y-3">
                    {col.map((item, index) => (
                      <li key={index} className="text-nowrap cursor-pointer font-medium text-base leading-[125%] tracking-[-0.6%] text-[#F5F5F5] font-dm">
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div>
              <h5 className='font-semibold text-[20px] leading-[118%] tracking-[-6%] font-poppins text-white'>Subscribe Newsletter</h5>
              <p className='pt-6.25 pb-9.75 max-w-[268px] font-medium text-base leading-[125%] tracking-[-0.6%] text-[#F5F5F5] font-dm '>Enter your email to receive our valuable newsletters.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex items-center backgroung-img max-w-[275px] w-full h-13">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="focus:outline-none w-full pl-8 font-medium text-base leading-[125%] text-[#F5F5F56E]/43 rounded-[68px]"
                  />

                  <button
                    type="submit"
                    aria-label="Send Message"
                    className="flex items-center justify-center bg-[#FFFFFF0F]/6 h-13 w-13 rounded-[500px] cursor-pointer"
                  >
                    <svg width="22.72" height="16.88" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.3625 0H2.3625C1.0875 0 0 1.05 0 2.3625V14.5125C0 15.7875 1.05 16.875 2.3625 16.875H20.3625C21.6375 16.875 22.725 15.825 22.725 14.5125V2.325C22.725 1.05 21.6375 0 20.3625 0ZM20.3625 1.6875C20.4 1.6875 20.4375 1.6875 20.475 1.6875L11.3625 7.5375L2.25 1.6875C2.2875 1.6875 2.325 1.6875 2.3625 1.6875H20.3625ZM20.3625 15.1125H2.3625C1.9875 15.1125 1.6875 14.8125 1.6875 14.4375V3.3375L10.4625 8.9625C10.725 9.15 11.025 9.225 11.325 9.225C11.625 9.225 11.925 9.15 12.1875 8.9625L20.9625 3.3375V14.475C21.0375 14.85 20.7375 15.1125 20.3625 15.1125Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#FFFFFF0D] backdrop-blur-[10px] sm:mt-10.25 mt-[48px]'>
        <div className='max-w-287 mx-auto px-3'>
          <div className='flex md:flex-row flex-col max-md:gap-y-8 items-center justify-between pt-5.5 pb-6 mb-0'>
            <div className='flex flex-row items-center max-md:flex-wrap max-w-[290px] max-sm:gap-x-[69px]  max-sm:gap-y-7.5 mx-auto max-sm:px-3.25   w-full justify-between sm:max-w-[397px]'>
              {PAYMENT_TEXT_DATA.map((text, i) => {
                return <span key={i} className='font-normal text-[16px] leading-[20px] tracking-[-0.6%] text-[#F5F5F557] font-dm'>{text}</span>
              })}
            </div>

            <div className='flex flex-row items-center min-[380px]:gap-[15.79px] gap-1.5'>
              {PAYMENT_ICONS_DATA.map((icon, i) => {
                return <span key={i} ><Icons icon={icon}/></span>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer