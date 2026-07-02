import NewsSection from "@/features/news/components/NewsSection";
import Landing from "@/features/landing/components/Landing";
import Statistics from "@/features/landing/components/Statistics";
import Marquee from "@/features/landing/components/Marquee";

const page = () => {
  return (
    <div>
      <NewsSection />
      <Landing />
      <Marquee />
      <Statistics />
    </div>
  );
};

export default page;
