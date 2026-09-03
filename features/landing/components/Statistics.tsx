import Image from "next/image";
import bgImage from "../../../public/assets/images/statistic/Group.svg";
const statistics = [
  { value: "10", label: "ეპიზოდი" },
  { value: "5", label: "პარტნიორი" },
  { value: "200K", label: "ნახვა" },
  { value: "700K", label: "მიმდევარი" },
];

const Statistics = () => {
  return (
    <section
      className="w-full relative bg-[#0F011D] py-12 sm:py-16 lg:py-20 bg-size-[1000px_300px]
  bg-center bg-no-repeat lg:min-h-[151px]"
    >
      <div className="mx-auto relative z-10 grid max-w-[1237px] grid-cols-2 gap-x-4 gap-y-12 px-4 sm:gap-x-8 sm:px-6 md:grid-cols-4 md:gap-y-0">
        {statistics.map((item) => (
          <div key={item.label} className="min-w-0 text-center">
            <div className="flex items-center justify-center">
              <span className="text-[40px] leading-none text-white sm:text-[52px] lg:text-[64px]">
                {item.value}
              </span>
              <span className="text-[40px] font-thin leading-none text-[#FFD600] sm:text-[52px] lg:text-[64px]">
                +
              </span>
            </div>

            <p className="mt-5 text-base leading-none text-white sm:mt-8 sm:text-xl lg:mt-[45px] lg:text-2xl">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
