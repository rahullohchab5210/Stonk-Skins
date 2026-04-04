 
import CategorySection from "@/components/CategorySection";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategorySection />
      <HowItWorks />
      <Testimonials/>
    </div>
  );
}
