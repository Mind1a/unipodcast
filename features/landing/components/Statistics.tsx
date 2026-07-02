const statistics = [
  { value: "10", label: "ეპიზოდი" },
  { value: "5", label: "პარტნიორი" },
  { value: "200K", label: "ნახვა" },
  { value: "700K", label: "მიმდევარი" },
];

const Statistics = () => {
  return (
    <section className="w-full bg-black py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1237px] grid-cols-2 gap-x-4 gap-y-12 px-4 sm:gap-x-8 sm:px-6 md:grid-cols-4 md:gap-y-0">
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
