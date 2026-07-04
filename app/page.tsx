import NewsSection from "@/feature/news/components/NewsSection";
import Landing from "@/features/landing/components/Landing";
import Statistics from "@/feature/landing/components/Statistics";
import Marquee from "@/feature/landing/components/Marquee";
import HeroSection from "@/feature/landing/hero-section/HeroSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <NewsSection />
      <Landing />
      <Marquee />
      <Statistics />
    </div>
  );
};

export default page;
