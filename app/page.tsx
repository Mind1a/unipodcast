
import Landing from "@/features/landing/components/Landing";
import Statistics from "@/feature/landing/components/Statistics";
import Marquee from "@/feature/landing/components/Marquee";

const page = () => {
  return (
    <div>
      <Landing />
      <Marquee/>
      <Statistics />
    </div>
  );
};

export default Page;