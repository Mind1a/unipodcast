const statistics = [
  { value: "10", label: "ეპიზოდი" },
  { value: "5", label: "პარტნიორი" },
  { value: "200K", label: "ნახვა" },
  { value: "700K", label: "მიმდევარი" },
];

const Statistics = () => {
  return (
    <section className="w-full bg-black py-[80px]">
      <div className="mx-auto flex max-w-[1237px] items-center justify-between px-6">
        {statistics.map((item) => (
          <div key={item.label} className="w-[165px] text-center">
            <div className="flex items-center justify-center">
              <span className="text-[64px] leading-none text-white">
                {item.value}
              </span>
              <span className="text-[64px] font-thin leading-none text-[#FFD600]">
                +
              </span>
            </div>

            <p className="mt-[45px] text-[24px] leading-none text-white">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;