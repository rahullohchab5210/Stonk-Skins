
import Accordian from "@/components/Accordian";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LoginSteam from "@/components/LoginSteam";
import Testimonials from "@/components/Testimonials";



export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <HowItWorks />
      <Testimonials />
      <div className="relative w-full"> 
        <img src="/assets/images/png/shine-ellipses.png" alt="image" className="absolute top-[38%]"/>
      <Accordian />
        <LoginSteam />
      </div>
    </>
  );
}
