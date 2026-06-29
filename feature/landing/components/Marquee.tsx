"use client";
import { motion } from "framer-motion"; // motion/react-ის ნაცვლად, სტანდარტული იმპორტი

// ცალკე გამოვიტანოთ ერთი ერთეული (ტექსტი + მიკროფონი), რომ კოდი არ გადაიტვირთოს
const MarqueeItem = ({ textColor }: { textColor: string }) => (
  <div className="flex items-center gap-0.75 shrink-0 mx-4">
    <span className={`text-[13px] font-black uppercase tracking-wider`} style={{color: textColor}}>
      უნი პოდკასტი
    </span>
    <svg width="11" height="13" viewBox="0 0 12 16" fill={textColor} xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M11.2484 3.50017L11.3378 7.75878C11.3378 8.96703 10.8683 10.0894 10.0707 10.961C9.73522 11.3241 9.34756 11.6476 8.91522 11.9183C8.2667 12.3277 7.51385 12.6182 6.70134 12.7569C6.70134 12.7569 6.63425 12.7569 6.60443 12.7701C6.49262 12.8031 6.40323 12.8955 6.39578 13.0078C6.39578 13.021 6.39578 13.0276 6.39578 13.0408C6.39578 13.054 6.39578 13.0672 6.39578 13.0738L6.41061 13.7605C6.41061 13.7605 6.41061 13.7803 6.41061 13.7935C6.41061 13.8067 6.41061 13.8133 6.41061 13.8265C6.43297 13.9651 6.56719 14.0707 6.73118 14.0707L8.95999 14.0311L8.98237 15.147L2.5643 15.2592L2.54191 14.1434L4.77072 14.1038C4.92726 14.1038 5.06146 13.9915 5.07637 13.8529C5.07637 13.8397 5.07637 13.8264 5.07637 13.8132C5.07637 13.8 5.07637 13.7868 5.07637 13.7736L5.06144 13.0936C5.06144 13.0936 5.06144 13.0672 5.06144 13.054C5.06144 13.0408 5.06144 13.0276 5.06144 13.0144C5.04654 12.9087 4.95705 12.8163 4.83778 12.7833C4.80797 12.7767 4.77814 12.7701 4.74087 12.7701C3.92091 12.6578 3.16056 12.3937 2.48968 12.0108C1.32683 11.3439 0.454697 10.3073 0.0819855 9.09249C0.0521686 8.99345 0.0223627 8.89441 0 8.79537C0.00745422 8.47845 0.29818 8.22095 0.663437 8.21435C0.961605 8.21435 1.21505 8.37279 1.31195 8.60387C1.3194 8.65009 1.33435 8.68971 1.34926 8.72932C1.54307 9.38957 1.93067 9.98383 2.45247 10.4592C3.12335 11.0732 4.01782 11.4892 5.02414 11.608C5.24031 11.6344 5.46395 11.6476 5.68757 11.641C5.9112 11.6344 6.13484 11.6212 6.35101 11.5882C7.34242 11.4364 8.22202 10.9874 8.87054 10.3535C9.52651 9.71311 9.93649 8.87459 9.98867 7.96345C9.98867 7.87102 9.99613 7.77198 9.98867 7.67955C9.98122 7.58711 9.9812 7.48808 9.97375 7.39565L9.89177 3.55961C9.89177 3.22948 10.1825 2.95875 10.5477 2.95215C10.8981 2.95215 11.1888 3.17667 11.2261 3.48038L11.2484 3.50017Z"  />
      <path d="M8.7662 2.79409L8.87057 7.71956C8.90039 9.08627 7.83447 10.2483 6.38835 10.5454C6.17218 10.5916 5.94854 10.6115 5.72491 10.6181C5.50129 10.6247 5.2702 10.6048 5.06148 10.5652C3.60045 10.3209 2.48978 9.19849 2.45996 7.82518L2.35559 2.89975C2.32577 1.53304 3.39169 0.37098 4.83781 0.0738683C5.05399 0.0276509 5.27017 0.00785316 5.50125 0.00125067C5.73233 -0.00535181 5.95598 0.0144669 6.17215 0.0540818C7.63318 0.298374 8.74385 1.42077 8.77367 2.79409H8.7662Z"  />
    </svg>
  </div>
);

const RibbonLogos = () => {
  // მასივი უსასრულო ეფექტის შესაქმნელად (გავამრავლოთ იტემები)
  const items = Array(50).fill(null);

  return (
    <section className="relative w-full mt-10 text-[13px] overflow-hidden  py-20 flex flex-col justify-center items-center">
      <div className="w-[150%]  origin-left -rotate-3 md:-rotate-1 absolute bg-[#FED403] h-[22.28px] border-y-2 border-[#FED403] flex overflow-hidden whitespace-nowrap select-none z-10 shadow-lg">
        <TranslateWrapper reverse={true}>
          {items.map((_, i) => (
            <MarqueeItem key={`yellow-${i}`} textColor="#8A2BE2" />
          ))}
        </TranslateWrapper>
      </div>
      <div className="w-[120%]   origin-left rotate-1 top-18 absolute bg-[#8A2BE2]  h-[22.28px] border-y-2 border-[#8A2BE2] flex overflow-hidden whitespace-nowrap select-none z-20 shadow-lg">
        <TranslateWrapper reverse={false}>
          {items.map((_, i) => (
            <MarqueeItem key={`purple-${i}`} textColor="#FED403" />
          ))}
        </TranslateWrapper>
      </div>



    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ x: reverse ? "-50%" : "0%" }}
      animate={{ x: reverse ? "0%" : "-50%" }}
      transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      className="flex whitespace-nowrap"
    >
      <div className="flex ">{children}</div>
      <div className="flex ">{children}</div>
    </motion.div>
  );
};

export default RibbonLogos;
