import NewsSection from "@/features/news/components/NewsSection";
import Landing from "@/features/landing/components/Landing";
import Statistics from "@/features/landing/components/Statistics";
import Marquee from "@/features/landing/components/Marquee";
import HeroSection from "@/features/landing/components/hero-section/HeroSection";

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
