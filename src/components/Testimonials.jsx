"use client";
import React from "react";
import Icons from "./common/Icons";
import { TESTIMONIALS_DATA } from "@/utils/helper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Testimonials() {
    return (
        <div className="  bg-cover bg-center  pt-[63px]   w-full h-full">

            {/* HEADING + ARROWS */}
            <div className="flex items-center max-w-287 mx-auto justify-between mb-7.75 max-[1200px]:px-3  max-sm:px-5.5 ">
                <h3 className="text-white  text-[40px] lg:text-5xl">Testimonials</h3>

                <div className="hidden min-sm:block">
                    <div className="grid grid-cols-2 gap-3">
                        <button className="swiper-button-prev-test bg-[#220933]/95 rounded-[19px] w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover rotate-180 cursor-pointer hover:scale-107 transition-all duration-300">
                            <Icons icon={"SLIDER_ARROW"} />
                        </button>

                        <button className="swiper-button-next-test bg-[#220933]/95 rounded-[19px] w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover cursor-pointer hover:scale-107 transition-all duration-300">
                            <Icons icon={"SLIDER_ARROW"} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="sm:max-w-[1460px] max-w-[1140px]   min-[1200px]:pl-[140px] max-[1200px]:pl-5 overflow-hidden  mx-auto">
                <div className="flex max-sm:flex-col sm:gap-[21px] max-sm:gap-y-8.25">

                    {/* LEFT STATIC FIXED CARD (NO SLIDE) */}
                    <div className=" max-sm:pr-15"> 
                    <div className="bg-[url('/assets/images/png/testimonial-card-bg.png')] bg-cover bg-center sm:w-[271px] w-full  max-sm:ml-5 max-sm:rounded-3xl    h-[366px] pt-[50.5px] sm:shrink-0">
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col items-center gap-2.75'>
                                <h6 className='font-medium text-[32px] text-white font-poppins'>Excellent</h6>
                                <img src="/assets/images/png/icon-w.png" className='w-[107px] h-[104px]' />
                                <Icons icon={"BIG_STAR"} />
                            </div>
                            <p className='pt-2 pb-2 font-medium text-base text-[#F5F5F5] max-w-full sm:max-w-[271px]'>
                                Based on <span className='underline'>456 reviews</span>
                            </p>
                            <Icons icon={"TRUSTPILOT"} />
                        </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE SWIPER SLIDER */}
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".swiper-button-next-test",
                            prevEl: ".swiper-button-prev-test",
                        }}
                        spaceBetween={20}
                        slidesPerView={"auto"}
                        grabCursor={true}
                        loop={true}
                        className="w-full"
                    >
                        {TESTIMONIALS_DATA.map((item, i) => (
                            <SwiperSlide key={i} style={{ width: "368px" }}>
                                <div className='px-5 py-[31.5px] border-[1.5px] border-white/10 rounded-3xl backdrop-blur-[50px] sm:max-w-[368px] max-w-[319px] max-h-[366px]'>
                                    <div className='flex items-center justify-between'>
                                        <Icons icon={"SMALL_STAR"} />
                                        <span className='font-medium sm:text-xl text-sm text-[#F5F5F5]'>{item.date}</span>
                                    </div>

                                    <h6 className='font-medium sm:text-[32px] text-[28px] text-white font-poppins pb-2 pt-[81px]'>
                                        {item.title}
                                    </h6>

                                    <p className='font-medium sm:text-base text-sm text-[#F5F5F5] pb-[81px]'>
                                        {item.description}
                                    </p>

                                    <h6 className='font-bold sm:text-xl text-[18px] text-[#F5F5F5] relative'>{item.name}
                                        <span className="absolute -top-2 left-0"><svg width="60" height="1" viewBox="0 0 60 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="60" height="1" fill="white" fill-opacity="0.14" />
                                        </svg>
</span>
                                    </h6>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div>
    );
}

export default Testimonials;







// "use client";
// import React from "react";
// import Icons from "./common/Icons";
// import { TESTIMONIALS_DATA } from "@/utils/helper";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// function Testimonials() {
//     return (
//         <div className="bg-[url('/assets/images/png/testimonials-bg.png')] bg-cover bg-center max-h-[660px] pt-[167px] bg-[#220933]/90 w-full h-screen">

//             {/* HEADING + ARROWS */}
//             <div className="flex items-center max-w-287 mx-auto justify-between mb-7.75">
//                 <h3 className="text-white text-3xl md:text-4xl lg:text-5xl">Testimonials</h3>

//                 {/* CUSTOM ARROWS */}
//                 <div className="hidden min-[450px]:block">
//                     <div className="grid grid-cols-2 gap-3">
//                         {/* LEFT */}
//                         <button
//                             className="swiper-button-prev-test cursor-pointer bg-[#220933]/95 rounded-[19px] w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover rotate-180"
//                         >
//                             <Icons icon={"SLIDER_ARROW"} />
//                         </button>
//                         {/* RIGHT */}
//                         <button
//                             className="swiper-button-next-test cursor-pointer bg-[#220933]/95 rounded-[19px] w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover"
//                         >
//                             <Icons icon={"SLIDER_ARROW"} />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* SLIDER */}
//             <div className="max-w-287 mx-auto">
//                 <Swiper
//                     modules={[Navigation]}
//                     navigation={{
//                         nextEl: ".swiper-button-next-test",
//                         prevEl: ".swiper-button-prev-test",
//                     }}
//                     spaceBetween={20}
//                     slidesPerView={"auto"}
//                     grabCursor={true}
//                     loop={true}
//                 >
//                     {/* FIRST BIG CARD STATIC */}
//                     <SwiperSlide style={{ width: "271px" }}>
//                         <div className="bg-[url('/assets/images/png/testimonial-card-bg.png')] bg-cover bg-center w-[271px] h-[366px] pt-[50.5px]">
//                             <div className="flex flex-col items-center">
//                                 <div className="flex flex-col items-center gap-2.75">
//                                     <h6 className="font-medium text-[32px] tracking-[-6%] text-white font-poppins">
//                                         Excellent
//                                     </h6>
//                                     <img
//                                         src="/assets/images/png/icon-w.png"
//                                         className="w-[107px] h-[104px]"
//                                     />
//                                     <Icons icon={"BIG_STAR"} />
//                                 </div>

//                                 <p className="pt-2 pb-2 font-medium text-base tracking-[-0.6%] font-dm text-[#F5F5F5]">
//                                     Based on <span className="underline">456 reviews</span>
//                                 </p>

//                                 <Icons icon={"TRUSTPILOT"} />
//                             </div>
//                         </div>
//                     </SwiperSlide>

//                     {/* OTHER CARDS */}
//                     {TESTIMONIALS_DATA.map((item, i) => (
//                         <SwiperSlide key={i} style={{ width: "368px" }}>
//                             <div className="px-5 py-[31.5px] border-[1.5px] border-white/10 rounded-3xl backdrop-blur-[50px] max-w-[368px] min-h-[366px]">
//                                 <div className="flex items-center justify-between">
//                                     <Icons icon={"SMALL_STAR"} />
//                                     <span className="font-medium text-xl text-[#F5F5F5] font-dm">{item.date}</span>
//                                 </div>

//                                 <h6 className="font-medium text-[32px] text-white font-poppins pb-2 pt-[81px]">
//                                     {item.title}
//                                 </h6>

//                                 <p className="font-medium text-base text-[#F5F5F5] font-dm pb-[81px]">
//                                     {item.description}
//                                 </p>

//                                 <h6 className="font-bold text-xl text-[#F5F5F5] font-dm">
//                                     {item.name}
//                                 </h6>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// }

// export default Testimonials;



// import React from 'react'
// import Icons from './common/Icons'
// import { TESTIMONIALS_DATA } from '@/utils/helper'

// function Testimonials() {
//     return (

//         <div className="bg-[url('/assets/images/png/testimonials-bg.png')] bg-cover bg-center max-h-[660px] pt-[167px] bg-[#220933]/90 w-full h-screen">

//             <div className="flex items-center max-w-287 mx-auto justify-between mb-7.75">
//                 <h3 className="text-white text-3xl md:text-4xl lg:text-5xl">
//                     Testimonials
//                 </h3>

//                 <div className="hidden min-[450px]:block">
//                     <div className="grid grid-cols-2 gap-3">

//                         {/* LEFT BUTTON */}
//                         <button
//                             className="cursor-pointer bg-[#220933]/95 rounded-[19px] w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover rotate-180"
//                         >
//                             <Icons icon={"SLIDER_ARROW"} />
//                         </button>

//                         {/* RIGHT BUTTON */}
//                         <button
//                             className="cursor-pointer bg-[#220933]/95 rounded-[19px] w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover"
//                         >
//                             <Icons icon={"SLIDER_ARROW"} />
//                         </button>
//                     </div>
//                 </div>
//             </div>


//             <div className='max-w-287 mx-auto '>
//                 <div className='flex flex flex-row gap-[21px]'>
//                     <div className="bg-[url('/assets/images/png/testimonial-card-bg.png')] bg-cover bg-center w-[271px] h-[366px] pt-[50.5px]  ">
//                         <div className='flex flex-col items-center'>
//                             <div className='flex flex-col items-center gap-2.75'>
//                                 <h6 className='font-medium text-[32px] leading-[118%] tracking-[-6%] text-white font-poppins'>Excellent</h6>
//                                 <img src="/assets/images/png/icon-w.png" alt="image" className='w-[107px] h-[104px]' />
//                                 <Icons icon={"BIG_STAR"} />
//                             </div>
//                             <p className='pt-2 pb-2 font-medium text-base leading-[125%] tracking-[-0.6%] font-dm text-[#F5F5F5]'>Based on <span className='underline'>456 reviews</span></p>

//                             <Icons icon={"TRUSTPILOT"} />

//                         </div>
//                     </div>
//                     <div className='flex flex-row items-center gap-[20px]'>
//                         {TESTIMONIALS_DATA.map((item,i) => { 
//                      return   <div key={i} className='px-5 py-[31.5px] border-[1.5px] border-white/10 rounded-3xl backdrop-blur-[50px] max-w-[368px] min-h-[366px]'>
//                             <div className='flex flex-row items-center justify-between'>
//                                 <Icons icon={"SMALL_STAR"} />
//                                 <span className='font-medium text-xl leading-[20px] leading-[-0.6%] text-[#F5F5F5] font-dm'>{item.date}</span>
//                             </div>
//                             <h6 className='font-medium text-[32px] leading-[118%] tracking-[-6%] font-poppins text-white pb-2 pt-[81px]'>{item.title}</h6>
//                             <p className='font-medium text-base leading-[20px] tracking-[-0.6%] text-[#F5F5F5] font-dm pb-[81px]'>{item.description}</p>

//                             <h6 className='font-bold text-xl leading-[20px] tracking-[-0.6%] text-[#F5F5F5] font-dm'>{item.name}</h6>
//                             </div>
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Testimonials