"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Products } from "@/utils/helper";
import Icons from "./Icons";

const Slider = ({ className, title, reverse }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="w-full pt-13.5 sm:pt-28.25 overflow-hidden">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="flex items-center max-w-287 mx-auto justify-between mb-7.75">
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl">
                        {title}
                    </h2>

                    <div className="hidden min-[450px]:block">
                        <div className="grid grid-cols-2 gap-3">

                            {/* LEFT BUTTON */}
                            <button
                                ref={prevRef}
                                className="cursor-pointer bg-[#220933]/95 rounded-[19px] w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover rotate-180"
                            >
                                <Icons icon={"SLIDER_ARROW"} />
                            </button>

                            {/* RIGHT BUTTON */}
                            <button
                                ref={nextRef}
                                className="cursor-pointer bg-[#220933]/95 rounded-[19px] w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover"
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

                    autoplay={{
                        delay: 2000,
                        reverseDirection: reverse, // autoplay direction
                    }}

                    // ✅ BUTTON LOGIC FIX
                    navigation={{
                        prevEl: reverse ? nextRef.current : prevRef.current,
                        nextEl: reverse ? prevRef.current : nextRef.current,
                    }}

                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = reverse
                            ? nextRef.current
                            : prevRef.current;

                        swiper.params.navigation.nextEl = reverse
                            ? prevRef.current
                            : nextRef.current;
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

                                    <div className="mt-3 mb-2.5 flex items-center justify-between">
                                        <div>
                                            <p className="pb-2 text-[#F5F5F54F] text-base font-medium">
                                                {item.suggeste_price}
                                            </p>

                                            <p className="text-2xl font-medium bg-linear-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent flex items-center gap-4">
                                                {item.price}
                                                <span className="text-base text-[#FF6565]">
                                                    {item.off}
                                                </span>
                                            </p>
                                        </div>

                                        <div className="bg-[url('/assets/images/png/buy-icon-bg.png')] w-15.5 h-15.5 bg-cover bg-center flex items-center justify-center cursor-pointer">
                                            <Icons icon={"BUY"} />
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
// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import Image from "next/image";
// import { Products } from "@/utils/helper";
// import Icons from "./Icons";

// const Slider = ({ className, title, reverse  }) => {
//     const prevRef = useRef(null);
//     const nextRef = useRef(null);

//     return (
//         <div className="w-full  pt-13.5  sm:pt-28.25 overflow-hidden ">
//             <div className="mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* HEADER */}
//                 <div className="flex items-center max-w-287 mx-auto justify-between mb-7.75">
//                     <h2 className="text-white text-3xl md:text-4xl lg:text-5xl">
//                         {title}
//                     </h2>
//                     <div className="hidden min-[450px]:block">
//                         <div className="grid grid-cols-2 gap-3">

//                             <button
//                                 ref={prevRef}
//                                 className="cursor-pointer bg-[#220933]/95 rounded-[19px] w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover rotate-180"
//                             >
//                                 <Icons icon={"SLIDER_ARROW"} />
//                             </button>

//                             <button
//                                 ref={nextRef}
//                                 className="cursor-pointer bg-[#220933]/95 rounded-[19px] w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover"
//                             >
//                                 <Icons icon={"SLIDER_ARROW"} />
//                             </button>

//                         </div>
//                     </div>
//                 </div>

//                 {/* SWIPER */}
//                 <Swiper
//                     className={className}
//                     modules={[Autoplay, Navigation]}
//                     spaceBetween={21}
//                     slidesPerView={1}
//                     loop={true}
//                     speed={800}
//                     autoplay={{
//                         delay: 2000,
//                         reverseDirection: reverse, // 🔥 MAGIC LINE
//                     }}

//                     navigation={{
//                         prevEl: prevRef.current,
//                         nextEl: nextRef.current,
//                     }}

//                     onBeforeInit={(swiper) => {
//                         swiper.params.navigation.prevEl = prevRef.current;
//                         swiper.params.navigation.nextEl = nextRef.current;
//                     }}

//                     breakpoints={{
//                         640: { slidesPerView: 2 },
//                         1024: { slidesPerView: 3 },
//                         1280: { slidesPerView: 4 },
//                     }}
//                 >
//                     {Products.map((item) => (
//                         <SwiperSlide key={item.id}>
//                             <div className="bg-white/6 rounded-3xl p-3 border border-white/10 relative">
//                                 <div className="bg-[#220933] h-55 rounded-3xl flex items-center justify-center">
//                                     <Image
//                                         src={item.image}
//                                         alt="product"
//                                         width={317}
//                                         height={91}
//                                     />
//                                 </div>
//                                 <div className="mt-3 pl-1.5">
//                                     <h3 className="text-white text-2xl sm:text-[32px] font-medium leading-[118%] tracking-[-6%] font-poppins">
//                                         {item.title}
//                                     </h3>
//                                     <p className="pt-2 text-[#F5F5F5] font-medium text-sm sm:text-base leading-[125%] tracking-[-0.6%] font-dm">
//                                         {item.description}
//                                     </p>
//                                     <div className="mt-3 mb-2.5 flex flex-row items-center justify-between">
//                                         <div>
//                                             <p className="pb-2 text-[#F5F5F54F] font-medium text-base leading-[125%] tracking-[-0.6%] font-dm">
//                                                 {item.suggeste_price}
//                                             </p>
//                                             <p className=" font-medium text-2xl leading-[118%] tracking-[-6%] bg-linear-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent font-poppins flex items-center gap-4">
//                                                 {item.price}
//                                                 <span className="text-base leading-[125%] tracking-[-0.6%] text-[#FF6565] font-dm">-20%</span>
//                                             </p>
//                                         </div>
//                                         <div className="bg-[url('/assets/images/png/buy-icon-bg.png')] w-15.5 h-15.5 bg-cover bg-center flex items-center justify-center cursor-pointer">
//                                             <Icons icon={"BUY"} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default Slider;
