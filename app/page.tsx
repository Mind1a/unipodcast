import NewsSection from "@/features/news/components/NewsSection";
import Landing from "@/features/landing/components/Landing";
import Statistics from "@/features/landing/components/Statistics";
import Marquee from "@/features/landing/components/Marquee";
import LatestPodcasts from "@/features/landing/components/LatestPodcasts";

const page = () => {
  return (
    <div>
      <NewsSection />
      <Landing />
      <Marquee />
      <Statistics />
      <LatestPodcasts/>
    </div>
  );
};

export default page;
