"use client";
import Slider from "./common/Slider";
import { Sections } from "@/utils/helper";

const CategorySection = () => {
    return (
        <div className="max-sm:relative overflow-hidden category-img flex flex-col gap-8 sm:gap-13.25 h-full max-sm:pb-15 sm:min-h-495">
            <div className="sm:hidden absolute right-[-10%] top-[55%]  "> <svg width="401" height="740" viewBox="0 0 401 740" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1_1358)">
                    <circle cx="370" cy="370" r="220" fill="url(#paint0_linear_1_1358)" />
                </g>
                <defs>
                    <filter id="filter0_f_1_1358" x="0" y="0" width="740" height="740" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_1_1358" />
                    </filter>
                    <linearGradient id="paint0_linear_1_1358" x1="150" y1="370" x2="590" y2="370" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E9AD83" />
                        <stop offset="1" stop-color="#9B1FE8" />
                    </linearGradient>
                </defs>
            </svg>

</div>
            {Sections.map((item, index) => (
                <Slider
                    key={index}
                    title={item.title}
                    className={item.className}
                    reverse={index % 2 !== 0} 
                />
            ))}
        </div>
    );
};

export default CategorySection;
