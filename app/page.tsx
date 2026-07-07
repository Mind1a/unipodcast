import NewsSection from "@/features/news/components/NewsSection";
import Landing from "@/features/landing/components/Landing";
import Statistics from "@/features/landing/components/Statistics";
import Marquee from "@/features/landing/components/Marquee";
import Service from "@/features/services/components/Service";

const page = () => {
  return (
    <div>
      <NewsSection />
      <Service />
      <Landing />
      <Marquee />
      <Statistics />
    </div>
  );
};

export default page;
