"use client"
import React, { useEffect, useState } from 'react'
import Icons from './Icons';
import Category from '../Category';
import GunsSection from '../GunsSection';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(null);
    const [showGuns, setShowGuns] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    
    useEffect(() => {
        if (menuOpen) {
            document.body.style.height = "100vh";
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.height = "auto";
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.height = "auto";
            document.body.style.overflow = "auto";
        };
    }, [menuOpen])


    return (
        <div className='  border-b border-[#FFFFFF]/[0.15] backdrop-blur-[10px] bg-[#432755]/80 fixed z-999 top-0 w-full'>
            <div className='max-w-287 mx-auto max-lg:px-3 w-full '>
                <div className='flex flex-rowe items-center justify-between pb-4 pt-3 w-full '>
                    <div className='flex flex-row items-center gap-7.75 w-full '>
                        <a href="#"> <img src="/assets/images/png/logo.png" alt="logo" className='max-w-29 max-h-13.7 z-999 flex' /></a>
                        <div className="flex items-center backgroung-img max-w-[320px] w-full h-13 max-lg:hidden">
                            <input
                                type="text"
                                placeholder="Search Skins..."
                                className="focus:outline-none  w-full   pl-8 font-medium text-base leading-[125%] text-[#F5F5F56E]/43   rounded-[68px]"
                            />
                            <button className="flex items-center justify-center bg-[#FFFFFF0F]/6 h-13 w-13 rounded-[500px]">
                                <svg class=" custom-class" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21L16.657 16.657M16.657 16.657C17.3999 15.9141 17.9892 15.0322 18.3912 14.0616C18.7933 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.94942 18.7933 8.90911 18.3912 7.93848C17.9892 6.96785 17.3999 6.08591 16.657 5.34302C15.9141 4.60014 15.0322 4.01084 14.0615 3.6088C13.0909 3.20675 12.0506 2.99982 11 2.99982C9.94939 2.99982 8.90908 3.20675 7.93845 3.6088C6.96782 4.01084 6.08588 4.60014 5.34299 5.34302C3.84266 6.84335 2.99979 8.87824 2.99979 11C2.99979 13.1218 3.84266 15.1567 5.34299 16.657C6.84332 18.1574 8.87821 19.0002 11 19.0002C13.1218 19.0002 15.1567 18.1574 16.657 16.657Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className={`z-999 flex  flex-row items-center max-lg:flex-col max-lg:gap-4 gap-16 max-lg:flex-col  max-lg:pt-20 max-[1024px]:fixed max-[1024px]:bg-[#432755]    max-[1024px]:h-screen max-[1024px]:w-1/2 max-sm:w-full max-sm:justify-center max-[1024px]:top-0 max-[1024px]:transition-all max-[1024px]:duration-300 max-[1024px]:ease-linear ${menuOpen === "show" ? "max-[1024px]:right-0" : "max-[1024px]:-right-full"}`}>
                        <span className='font-medium text-[16px] leading-[125%] tracking-[0.6%] text-[#F5F5F5]'>Market</span>
                        <div>
                            <div className='flex items-center max-lg:flex-col max-lg:gap-4 gap-8'>
                                <div className='flex flex-row items-center gap-2'>
                                       <Icons icon={'WALLET'}/>
                                    <span className='text-[#F5F5F5] font-bold text-[16px] leading-[150%] tracking-[0%]'>$0</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <div className='flex items-center gap-2'>
                                        <h6 className='font-normal text-[16px] leading-[150%] tracking-[0%] text-[#F5F5F5] text-nowrap'>John Doe</h6>
                                        <div className="h-11 w-11 bg-img flex items-center justify-center text-[#FFFFFF]">
                                            <Icons icon={"PROFILE"} />
                                        </div>
                                    </div>
                                    <Icons icon={"ARROW"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'> 
                        <button className="flex items-center lg:hidden z-999 bg-[#FFFFFF0F]/6  rounded-[500px]">
 <Icons icon={"SEARCH"}/>
                    </button>
                    <button onClick={() => setMenuOpen(menuOpen === "show" ? null : "show")} className="lg:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center z-999 cursor-pointer">
                        <span className={`block w-7 h-0.5 rounded-[30px] bg-white transition-all duration-300 ${menuOpen === "show" ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`block w-7 h-0.5 rounded-[30px] bg-white transition-all duration-300 ${menuOpen === "show" ? "opacity-0" : ""}`} />
                            <span className={`block w-7 h-0.5 rounded-[30px] bg-white transition-all duration-300 ${menuOpen === "show" ? "-rotate-45 -translate-y-2" : ""}`} />
                        </button>
                    </div>
                </div>

                <div className='border border-[#43344C8C] w-full'></div>
            </div>

            {/* ✅ UPDATED LOGIC */}
            <Category
                activeIndex={activeIndex}
                onSelectCategory={(index) => {
                    if (activeIndex === index) {
                        setShowGuns(prev => !prev); // toggle show/hide
                        setActiveIndex(prev => prev === index ? null : index); // ✅ reset activeIndex if same
                    } else {
                        setShowGuns(true); // new category → open
                        setActiveIndex(index); // set new active category
                    }
                }}
            />
            
            {/* ✅ GunsSection */}
            {showGuns && (
                <GunsSection />
            )}
        </div>
    )
}

export default Navbar
