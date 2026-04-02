"use client";
import Slider from "./common/Slider";
import { Sections } from "@/utils/helper";

const CategorySection = () => {
    return (
        <div className=" category-img flex flex-col gap-[32px] sm:gap-[53px] min-h-[2000px]">
            {Sections.map((item, index) => (
                <Slider
                    key={index}
                    title={item.title}
                    className={item.className}
                />
            ))}
        </div>
    );
};

export default CategorySection;


















// "use client";
// import { useRef } from "react";
// import Slider from "./common/Slider";
// import Icons from "./common/Icons";
// import { Sections } from "@/utils/helper";

// const CategorySection = () => {
//     return (
//         <div>
//             {Sections.map((item, index) => {
//                 const prevRef = useRef(null);
//                 const nextRef = useRef(null);

//                 return (
//                     <div
//                         key={index}
//                         className="w-full pt-14 sm:pt-18 md:pt-22 lg:pt-26 -mt-0.5 min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[850px] overflow-hidden category-img"
//                     >
//                         <div className="mx-auto px-4 sm:px-6 lg:px-8">

//                             {/* Header */}
//                             <div className="flex items-center max-w-287 mx-auto justify-between mb-4 sm:mb-5 md:mb-6">
                                
//                                 <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//                                     Category Name
//                                 </h2>

//                                 <div className="hidden min-[450px]:block">
//                                     <div className="grid grid-cols-2 gap-2 sm:gap-3">

//                                         {/* PREV BUTTON */}
//                                         <button
//                                             ref={prevRef}
//                                             className="cursor-pointer hover:scale-105 transition-all duration-300 w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover rotate-180"
//                                         >
//                                             <Icons icon={"SLIDER_ARROW"} />
//                                         </button>

//                                         {/* NEXT BUTTON */}
//                                         <button
//                                             ref={nextRef}
//                                             className="cursor-pointer hover:scale-105 transition-all duration-300 w-14 h-14 flex items-center justify-center bg-[url('/assets/images/png/slider-arrow-bg.png')] bg-cover"
//                                         >
//                                             <Icons icon={"SLIDER_ARROW"} />
//                                         </button>

//                                     </div>
//                                 </div>
//                             </div>

//                             {/* SLIDER */}
//                             <Slider
//                                 className={item.className}
//                                 prevRef={prevRef}
//                                 nextRef={nextRef}
//                             />

//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default CategorySection;

