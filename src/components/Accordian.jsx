"use client";
import { useState } from "react";
import { ACCORDIAN_DATA } from "@/utils/helper";
import Icons from "./common/Icons";
import Image from "next/image";

const Accordian = () => {
    const [isActive, setIsActive] = useState(0);

    const handleAccordian = (index) => {
        setIsActive(() => (isActive === index ? null : index));
    };

    return (
        <div className="w-full   relative px-4 md:pt-[173px] sm:pt-[100px] pt-[85px] bg-cover bg-center  ">
            <div className="max-w-287 w-full mx-auto flex flex-col gap-8 md:gap-0 md:flex-row text-white">

                {/* LEFT TEXT */}
                <div className="flex flex-col max-w-64.5 md:max-w-97.25 w-full space-y-3">
                    <h3 className="font-medium sm:text-5xl text-[40px] leading-[118%] tracking-[-6%]">
                        Any Questions? Look Here
                    </h3>
                    <span className="tracking-[-0.6%] leading-[125%] font-dm font-medium z-20 text-[#F5F5F5]">
                        Get answers to all your questions
                    </span>
                </div>

                {/* RIGHT ACCORDION */}
                <div className="w-full flex flex-col space-y-3.25 min-h-127 z-20">
                    {ACCORDIAN_DATA.map((acc, index) => (
                        <div
                            key={index}
                            className="p-[1.5px] rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[50px]"
                        >
                            <div
                                onClick={() => handleAccordian(index)}
                                className="bg-[#2C1638]/85 cursor-pointer py-4.75 pl-7.75 pr-4 rounded-3xl font-medium font-poppins leading-[118%]"
                            >
                                {/* TITLE + ARROW ROW */}
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl md:text-2xl lg:text-custom-3xl tracking-[-6%]">
                                        {acc.title}
                                    </h3>

                                    <div className="p-[1.5px] rounded-[19px] bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)]">
                                        <span
                                            className={`h-10 md:h-12.25 w-10 md:w-12.25 rounded-[19px] ${isActive === index
                                                    ? "bg-linear-to-r from-[#e9ad83] to-[#9b1fe8] backdrop-blur-2xl"
                                                    : "backdrop-blur-none"
                                                } flex justify-center items-center`}
                                        >
                                            <Icons icon={"ACCORDIAN_ARROW"}

                                                className={`${isActive === index
                                                        ? "-rotate-180"
                                                        : "rotate-0"
                                                    } duration-200 ease-in`}
                                            />
                                        </span>
                                    </div>
                                </div>

                                {/* DESCRIPTION */}
                                {isActive === index && (
                                    <p className="font-dm-sans opacity-80 md:opacity-100 mt-3 font-medium tracking-[-0.6%] max-w-169">
                                        {acc.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Accordian;










// "use client";
// import { useState } from "react";
 
// import { ACCORDIAN_DATA } from "@/utils/helper";
// import Icons from "./common/Icons";
// import Image from "next/image";

// const Accordian = () => {
//     const [isActive, setIsActive] = useState(0);
//     const handleAccordian = (index) => {
//         setIsActive(() => (isActive === index ? null : index));
//     };
//     return (
//         <div className="w-full relative px-4   bg-[#220933]/90">
//             <div className="max-w-287 w-full mx-auto  flex flex-col gap-8 md:gap-0 md:flex-row  text-white ">
//                 <div className="flex flex-col max-w-64.5 md:max-w-97.25 w-full space-y-3">
//                     <h3 className="font-medium text-5xl leading-[118%] tracking-[-6%]">Any Questions? Look Here</h3>
//                     <span className="tracking-[-0.6%] leading-[125%] font-dm font-medium z-20 text-[#F5F5F5]">
//                         Get answers to all your questions
//                     </span>
//                 </div>
//                 <div className="w-full flex flex-col space-y-3.25 min-h-127 z-20">
//                     {ACCORDIAN_DATA.map((acc, index) => (
//                         <div
//                             key={index}
//                             className="p-[1.5px] rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[50px]"
//                         >
//                             <div
//                                 onClick={() => handleAccordian(index)}
//                                 className="flex bg-[#2C1638]/85  items-center cursor-pointer py-4.75 pl-7.75 pr-4 rounded-3xl justify-between font-medium font-poppins leading-[118%] tracking[-6%]"
//                             >
//                                 <div className="flex flex-col space-y-2.75">
//                                     <h3 className="text-xl md:text-2xl lg:text-custom-3xl">
//                                         {acc.title}
//                                     </h3>
//                                     {isActive === index && (
//                                         <p className="font-dm-sans opacity-80 md:opacity-100  font-medium tracking-[-0.6%] max-w-169 w-full">
//                                             {acc.description}
//                                         </p>
//                                     )}
//                                 </div>
//                                 <div
//                                     key={index}
//                                     className="p-[1.5px] rounded-[19px] bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)]"
//                                 >
//                                     <span
//                                         className={`h-10 md:h-12.25 w-10 md:w-12.25 rounded-[19px] ${isActive === index ? "bg-linear-to-r from-[#e9ad83] to-[#9b1fe8] backdrop-blur-2xl " : "backdrop-blur-none"} flex justify-center items-center self-start`}
//                                     >
//                                         <Icons
//                                             icon={"accordianArrow"}
//                                             className={` ${isActive === index ? "rotate-180" : "rotate-0"} duration-200 ease-in`}
//                                         />
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Accordian;