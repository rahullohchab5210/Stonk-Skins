"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Products } from "@/utils/helper";
import Icons from "./Icons";

const Slider = ({ className, title }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="w-full  pt-[54px]  sm:pt-[113px] overflow-hidden ">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="flex items-center max-w-287 mx-auto justify-between mb-[31px]">

                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl">
                        {title}
                    </h2>

                    <div className="hidden min-[450px]:block">
                        <div className="grid grid-cols-2 gap-3">

                            <button
                                ref={prevRef}
                                className="cursor-pointer w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover rotate-180"
                            >
                                <Icons icon={"SLIDER_ARROW"} />
                            </button>

                            <button
                                ref={nextRef}
                                className="cursor-pointer w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover"
                            >
                                <Icons icon={"SLIDER_ARROW"} />
                            </button>

                        </div>
                    </div>
                </div>

                {/* SWIPER */}
                <Swiper
                    className={className}
                    modules={[Autoplay, Navigation]}
                    spaceBetween={21}
                    slidesPerView={1}
                    loop={true}
                    speed={800}
                    autoplay={{ delay: 2000 }}

                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}

                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}

                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {Products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-white/6 rounded-3xl p-3 border border-white/10 relative">

                                <div className="bg-[#220933] h-55 rounded-3xl flex items-center justify-center">
                                    <Image
                                        src={item.image}
                                        alt="product"
                                        width={317}
                                        height={91}
                                    />
                                </div>

                                <div className="mt-3 pl-1.5">
                                    <h3 className="text-white text-2xl sm:text-[32px] font-medium leading-[118%] tracking-[-6%] font-poppins">
                                        {item.title}
                                    </h3>
                                    <p className="pt-2 text-[#F5F5F5] font-medium text-sm sm:text-base leading-[125%] tracking-[-0.6%] font-dm">
                                        {item.description}
                                    </p>
                                    <div className="mt-3 mb-2.5 flex flex-row items-center justify-between"> 
                                    <div> 
                                            <p className="pb-2 text-[#F5F5F54F] font-medium text-base leading-[125%] tracking-[-0.6%] font-dm">
                                        {item.suggeste_price}
                                    </p>
                                            <p className="font-medium text-2xl leading-[118%] tracking-[-6%] bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent inline-block font-poppins">
                                                {item.price}
                                                <span className="text-base leading-[125%] tracking-[-0.6%] text-[#FF6565] font-dm">-20%</span>
                                        </p>
                                        </div>
                                        <div className="bg-[url('/assets/images/png/buy-icon-bg.png')] w-[62px] h-[62px] bg-cover bg-center flex items-center justify-center">
<Icons icon={"BUY"}/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};

export default Slider;






// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import Image from "next/image";
// import { Products } from "@/utils/helper";
// import Icons from "./Icons";

// const Slider = ({ className, prevRef, nextRef }) => {
//     return (
//         <Swiper
//             className={className}
//             modules={[Autoplay, Navigation]}
//             spaceBetween={21}
//             slidesPerView={1}
//             loop={true}
//             speed={800}
//             autoplay={{ delay: 2000, disableOnInteraction: false }}

//             navigation={{
//                 prevEl: prevRef?.current,
//                 nextEl: nextRef?.current,
//             }}

//             onBeforeInit={(swiper) => {
//                 if (prevRef?.current && nextRef?.current) {
//                     swiper.params.navigation.prevEl = prevRef.current;
//                     swiper.params.navigation.nextEl = nextRef.current;
//                 }
//             }}

//             breakpoints={{
//                 640: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//                 1280: { slidesPerView: 4 },
//             }}
//         >
//             {Products.map((item) => (
//                 <SwiperSlide key={item.id}>
//                     <div className="bg-white/6 rounded-3xl p-3 border border-white/10 relative">

//                         <div className="bg-[#220933] h-55.25 rounded-3xl flex items-center justify-center">
//                             <Image
//                                 src={item.image}
//                                 alt="product"
//                                 width={317}
//                                 height={91}
//                             />
//                         </div>

//                         <span className="absolute right-9 top-54 bg-gradient-to-r from-orange-400 to-purple-500 text-sm px-4 py-1 rounded-full text-white">
//                             TRADABLE
//                         </span>

//                         <div className="flex items-end justify-between p-1.5">
//                             <div className="mt-3">
//                                 <h3 className="text-white text-2xl font-medium">
//                                     {item.title}
//                                 </h3>
//                                 <p className="mt-2 text-gray-300">
//                                     {item.description}
//                                 </p>
//                                 <p className="mt-3 text-gray-400">
//                                     {item.suggeste_price}
//                                 </p>
//                                 <p className="mt-2 text-orange-400 text-xl font-medium">
//                                     {item.price}
//                                 </p>
//                             </div>

//                             <button className="w-14 h-14 flex items-center justify-center">
//                                 <Icons icon={"bag"} />
//                             </button>
//                         </div>

//                     </div>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

// export default Slider;



 

































// "use client";

// import React, { useRef } from "react";
// import dynamic from "next/dynamic";
// import Icons from "./Icons";
// import { SLIDER_DATA } from "@/utils/helper";

// const Slider = dynamic(() => import("react-slick"), { ssr: false });

// function MySlider() {
//     const sliderRef = useRef(null);

//     const settings = {
//         dots: true,
//         arrows: false, // custom arrows
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         speed: 600,
//         slidesToShow: 3.2, // slight cut on right for effect
//         slidesToScroll: 1,
//         responsive: [
//             { breakpoint: 1024, settings: { slidesToShow: 2.2 } },
//             { breakpoint: 640, settings: { slidesToShow: 1.1 } },
//         ],
//     };

//     return (
//         <div className="bg-[url('/assets/images/png/slider-bg.png')] bg-cover bg-center w-full min-h-[930px] pt-[105px] overflow-x-visible">

//             {/* HEADER */}
//             <div className="max-w-[1148px] mx-auto px-4 md:px-6 lg:px-8">
//                 <div className="flex items-center justify-between">
//                     <h2 className="text-white text-[48px] font-medium">Category Name</h2>

//                     {/* ARROWS */}
//                     <div className="flex gap-3">
//                         <button
//                             onClick={() => sliderRef.current?.slickPrev()}
//                             className="w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover rotate-180"
//                         >
//                             <Icons icon={"SLIDER_ARROW"} />
//                         </button>

//                         <button
//                             onClick={() => sliderRef.current?.slickNext()}
//                             className="w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover"
//                         >
//                             <Icons icon={"SLIDER_ARROW"} />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* SLIDER */}
//             <div className="mt-[40px]">
//                 <div
//                     className="relative"
//                     style={{
//                         paddingLeft: "calc((100% - 1148px)/2)", // left gap = container padding
//                         paddingRight: 0, // right full
//                         overflow: "visible",
//                     }}
//                 >
//                     <Slider ref={sliderRef} {...settings}>
//                         {SLIDER_DATA.map((item, i) => (
//                             <div key={i} className="pr-5">
//                                 <div className="p-3 backdrop-blur-[50px] bg-white/5 border border-white/20 rounded-[24px]">
//                                     <div className="bg-[#1C0829] rounded-[20px] flex items-center justify-center h-[221px]">
//                                         <img src={item.img} alt="product" />
//                                     </div>

//                                     <h5 className="pt-3 text-white text-[24px]">
//                                         Product Name
//                                     </h5>

//                                     <p className="text-white/70 text-sm pt-1">
//                                         Lorem ipsum dolor sit
//                                     </p>

//                                     <div className="flex justify-between items-center pt-3">
//                                         <div>
//                                             <p className="text-white/30 text-sm">Suggested Price $687.58</p>
//                                             <div className="flex gap-2 text-xl font-medium bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent">
//                                                 $528.69
//                                                 <span className="text-red-400 text-sm">-20%</span>
//                                             </div>
//                                         </div>

//                                         <div className="w-12 h-12 flex items-center justify-center bg-[url('/assets/images/png/buy-icon-bg.png')] bg-cover">
//                                             <Icons icon={"BUY"} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MySlider;







// "use client";

// import React from "react";
// import dynamic from "next/dynamic";
// import Icons from "./Icons";
// import { SLIDER_DATA } from "@/utils/helper";

// const Slider = dynamic(() => import("react-slick"), { ssr: false });

// function MySlider() {
//     const settings = {
//         dots: true,
//         arrows: false,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         speed: 600,
//         slidesToShow: 3.2, // 👈 slight cut on right (important)
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2.2,
//                 },
//             },
//             {
//                 breakpoint: 640,
//                 settings: {
//                     slidesToShow: 1.1,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="bg-[url('/assets/images/png/slider-bg.png')] bg-cover bg-center w-full min-h-[930px] pt-[105px] overflow-hidden">

//             {/* HEADER (Centered) */}
//             <div className="max-w-[1148px] mx-auto px-4 md:px-6 lg:px-8">
//                 <div className="flex items-center justify-between">

//                     <h2 className="text-white text-[48px] font-medium">
//                         Category Name
//                     </h2>

//                     <div className="flex gap-3">
//                         <button className="w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover rotate-180">
//                             <Icons icon={"SLIDER_ARROW"} />
//                         </button>

//                         <button className="w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover">
//                             <Icons icon={"SLIDER_ARROW"} />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* 🔥 SLIDER SECTION (KEY PART) */}
//             <div className="mt-[40px]">

//                 {/* LEFT SPACE SAME AS CONTAINER */}
//                 <div className="pl-4 md:pl-6  lg:pl-[calc((100%-1148px)/2+16px)]">

//                     {/* FULL WIDTH SLIDER */}
//                     <div className="w-full">
//                         <Slider {...settings}>

//                             {SLIDER_DATA.map((item, i) => (
//                                 <div key={i} className="pr-5">

//                                     <div className="p-3 backdrop-blur-[50px] bg-white/5 border border-white/20 rounded-[24px]">

//                                         <div className="bg-[#1C0829] rounded-[20px] flex items-center justify-center h-[221px]">
//                                             <img src={item.img} alt="product" />
//                                         </div>

//                                         <h5 className="pt-3 text-white text-[24px]">
//                                             Product Name
//                                         </h5>

//                                         <p className="text-white/70 text-sm pt-1">
//                                             Lorem ipsum dolor sit
//                                         </p>

//                                         <div className="flex justify-between items-center pt-3">
//                                             <div>
//                                                 <p className="text-white/30 text-sm">
//                                                     Suggested Price $687.58
//                                                 </p>

//                                                 <div className="flex gap-2 text-xl font-medium bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent">
//                                                     $528.69
//                                                     <span className="text-red-400 text-sm">
//                                                         -20%
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             <div className="w-12 h-12 flex items-center justify-center bg-[url('/assets/images/png/buy-icon-bg.png')] bg-cover">
//                                                 <Icons icon={"BUY"} />
//                                             </div>
//                                         </div>

//                                     </div>

//                                 </div>
//                             ))}

//                         </Slider>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MySlider;




// "use client";

// import React from "react";
// import dynamic from "next/dynamic";
// import Icons from "./Icons";
// import { SLIDER_DATA } from "@/utils/helper";

// const Slider = dynamic(() => import("react-slick"), { ssr: false });

// function MySlider() {
//     const settings = {
//         dots: true,
//         arrows: false,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         speed: 600,
//         slidesToShow: 3, // ✅ fixed (no 3.3 bug)
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 640,
//                 settings: {
//                     slidesToShow: 1.1, // ✅ mobile preview effect
//                     centerMode: true,
//                     centerPadding: "10px",
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="bg-[url('/assets/images/png/slider-bg.png')] bg-cover bg-center w-full min-h-[930px] pt-[105px] overflow-hidden">

//             {/* HEADER */}
//             <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
//                 <div className="flex items-center justify-between">

//                     <h2 className="font-medium text-[32px] md:text-[40px] lg:text-[48px] leading-[118%] tracking-[-6%] text-white font-poppins">
//                         Category Name
//                     </h2>

//                     <div className="flex items-center gap-3">
//                         <button className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover bg-center rotate-180">
//                             <Icons icon={"SLIDER_ARROW"} />
//                         </button>

//                         <button className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover bg-center">
//                             <Icons icon={"SLIDER_ARROW"} />
//                         </button>
//                     </div>

//                 </div>
//             </div>

//             {/* SLIDER */}
//             <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 mt-[30px]">
//                 <Slider {...settings}>

//                     {SLIDER_DATA.map((item, i) => (
//                         <div key={i} className="px-3">

//                             <div className="p-3 backdrop-blur-[50px] bg-white/5 border border-white/20 rounded-[24px]">

//                                 {/* IMAGE */}
//                                 <div className="bg-[#1C0829] rounded-[20px] flex items-center justify-center h-[221px] w-full shadow-[10px_10px_30px_rgba(0,0,0,0.6)]">
//                                     <img src={item.img} alt="product" className="object-contain h-full" />
//                                 </div>

//                                 {/* CONTENT */}
//                                 <div className="pl-1.5">

//                                     <h5 className="pt-3 font-medium text-[22px] md:text-[26px] lg:text-[32px] leading-[118%] text-white font-poppins">
//                                         Product Name
//                                     </h5>

//                                     <p className="pt-2 text-sm md:text-base text-[#F5F5F5] font-dm">
//                                         Lorem ipsum dolor sit
//                                     </p>

//                                     <div className="flex items-center justify-between pr-2">

//                                         <div className="pt-3 pb-2">
//                                             <span className="text-sm text-white/30">
//                                                 Suggested Price $687.58
//                                             </span>

//                                             <div className="pt-2 flex items-center gap-3 text-xl md:text-2xl font-medium bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent">
//                                                 $528.69
//                                                 <span className="text-sm text-[#FF6565]">
//                                                     -20%
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         <div className="bg-[url('/assets/images/png/buy-icon-bg.png')] bg-cover bg-center w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
//                                             <Icons icon={"BUY"} />
//                                         </div>

//                                     </div>

//                                 </div>

//                             </div>

//                         </div>
//                     ))}

//                 </Slider>
//             </div>
//         </div>
//     );
// }

// export default MySlider;



// "use client";

// import React from "react";
// import dynamic from "next/dynamic";
// import Icons from "./Icons";
// import { SLIDER_DATA } from "@/utils/helper";

// const Slider = dynamic(() => import("react-slick"), { ssr: false });

// function MySlider() {
//     const settings = {
//         dots: true,
//         arrows: false,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         speed: 600,
//         slidesToShow: 3.3,      // 🔥 3 cards on desktop
//         slidesToScroll: 1,
//         centerMode: false,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2, // tablet
//                 },
//             },
//             {
//                 breakpoint: 640,
//                 settings: {
//                     slidesToShow: 1, // mobile
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="bg-[url('/assets/images/png/slider-bg.png')] bg-cover bg-center w-full h-full min-h-[930px] pt-[105px]">

//             {/* Title + Arrows */}
//             <div className="max-w-287 mx-auto px-4">
//                 <div className="flex flex-row items-center justify-between">
//                     <h2 className="font-medium text-[48px] leading-[118%] tracking-[-6%] text-white font-poppins">
//                         Category Name
//                     </h2>

//                     <div className="flex flex-row items-center gap-2.75">
//                         <button className="w-15 h-15 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover bg-center rotate-180">
//                             <Icons icon={"SLIDER_ARROW"} />
//                         </button>

//                         <button className="w-15 h-15 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover bg-center">
//                             <Icons icon={"SLIDER_ARROW"} />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* SLIDER */}
//             <div className="  mx-auto    mt-[30px]">
//                 <Slider {...settings}>

//                     {SLIDER_DATA.map((item, i) => (
//                         <div key={i} className="px-[10.5px] ">
//                             {/* px-10.5 = 21px total → perfect gap */}

//                             <div className="p-3   backdrop-blur-[50px] bg-white/6 border-[1.5px] border-white/20 rounded-[24px]">

//                                 <div className="backdrop-blur-[50px] rounded-[14.63px] shadow-[10px_10px_30px_0px_rgba(0,0,0,0.6)] bg-[#1C0829] flex items-center justify-center h-[221px] w-full rounded-[24px]">
//                                     <img src={item.img} alt="gun-image" />
//                                 </div>

//                                 <div className="pl-1.5">
//                                     <h5 className="pt-3 font-medium text-[32px] leading-[118%] tracking-[-6%] text-white font-poppins">
//                                         Product Name
//                                     </h5>

//                                     <p className="pt-2 font-medium text-base leading-[125%] tracking-[-0.6%] text-[#F5F5F5] font-dm">
//                                         Lorem ipsum dolor sit
//                                     </p>

//                                     <div className="flex flex-row items-center justify-between pr-[18px]">
//                                         <div className="pt-3 pb-2.5">
//                                             <span className="font-medium text-base leading-[125%] tracking-[-0.6%] text-[#F5F5F5]/31">
//                                                 Suggested Price $687.58
//                                             </span>

//                                             <div className="pt-2 flex items-center gap-4 font-medium text-2xl leading-[118%] tracking-[-6%] bg-linear-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent w-fit">
//                                                 $528.69{" "}
//                                                 <span className="text-base leading-[125%] tracking-[-0.6%] text-[#FF6565]">
//                                                     -20%
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         <div className="bg-[url('/assets/images/png/buy-icon-bg.png')] bg-cover bg-center w-15.5 h-15.5 flex items-center justify-center">
//                                             <Icons icon={"BUY"} />
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     ))}

//                 </Slider>
//             </div>
//         </div>
//     );
// }

// export default MySlider;












// "use client";

// import React from "react";
// import dynamic from "next/dynamic";
// import Icons from "./Icons";
// import { SLIDER_DATA } from "@/utils/helper";

// // FIX: slick slider SSR off
// const Slider = dynamic(() => import("react-slick"), { ssr: false });


// function MySlider() {
//     const settings = {
//         dots: true,
//         arrows: false,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         speed: 600,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };


//     return (
//         <div className="bg-[url('/assets/images/png/slider-bg.png')] bg-cover bg-center w-full h-screen min-h-[930px] pt-[105px]">
//             <div className='max-w-287 mx-auto px-4'>
//                 <div className='flex flex-row items-center justify-between'>
//                     <h2 className='font-medium text-[48px] leading-[118%] tracking-[-6%] text-white font-poppins'>Category Name</h2>
//                     <div className='flex flex-row items-center gap-2.75  '>
//                         <button className="w-15 h-15 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover bg-center Category Namerotate-180"><Icons icon={"SLIDER_ARROW"} /></button>
//                         <button className="w-15 h-15 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover bg-center"><Icons icon={"SLIDER_ARROW"} /></button>
//                     </div>
//                 </div>
//             </div>
//             <div className='max-w-360 mx-auto px-3'>
//                 <Slider {...settings}>
//                 <div className='flex flex-row gap-5.25'>
                    
//                         {SLIDER_DATA.map((item, i) => {
//                             return <div key={i} className='p-3 max-w-[369px] backdrop-blur-[50px] bg-white/6 border-[1.5px] border-white/20 rounded-[24px]'>
//                                 <div className='backdrop-blur-[50px] rounded-[14.63px] shadow-[10px_10px_30px_0px_rgba(0,0,0,0.6)] bg-[#1C0829] w-[345px]  flex items-center justify-center  h-[221px] w-full rounded-[24px]'>
//                                     <img src={item.img} alt="gun-image" />
//                                 </div>
//                                 <div className='pl-1.5'>
//                                     <h5 className='pt-3 font-medium text-[32px] leading-[118%] tracking-[-6%] text-white font-poppins'>Product Name</h5>
//                                     <p className='pt-2 font-medium text-base leading-[125%] tracking-[-0.6%] text-[#F5F5F5] font-dm'>Lorem ipsum dolor sit</p>
//                                     <div className='flex flex-row items-center justify-between pr-[18px]'>
//                                         <div className='pt-3 pb-5.5'>
//                                             <span className='font-medium text-base leading-[125%] tracking-[-0.6%] text-[#F5F5F5]/31'>Suggested Price $687.58</span>
//                                             <div className='pt-2 flex items-center gap-4 font-medium text-2xl leading-[118%] tracking-[-6%] bg-linear-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent w-fit'>$528.69 <span className='text-base leading-[125%] tracking-[-0.6%] text-[#FF6565]'>-20%</span></div>
//                                         </div>
//                                         <div className="bg-[url('/assets/images/png/buy-icon-bg.png')] bg-cover bg-center w-15.5 h-15.5 flex items-center justify-center">
//                                             <Icons icon={"BUY"} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         })}
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MySlider