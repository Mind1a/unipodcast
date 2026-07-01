import NewsSection from "@/feature/news/components/NewsSection";
import Landing from "@/features/landing/components/Landing";
import Statistics from "@/feature/landing/components/Statistics";
import Marquee from "@/feature/landing/components/Marquee";
import LatestPodcasts from "@/feature/landing/components/LatestPodcasts";


const Page = () => {
  return (
    <div>
      <NewsSection />
      <Landing />
      <Marquee />
      <LatestPodcasts/>
      <Statistics />
    </div>
  );
};

export default Page;
