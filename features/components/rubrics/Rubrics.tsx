import Image from "next/image";
import type { StaticImageData } from "next/image";

import rubricsIntro from "../../../public/assets/images/rubrics/rubricsIntro.jpg";
import rubricsCard1 from "../../../public/assets/images/rubrics/rubricCard1.svg";
import rubricsCard2 from "../../../public/assets/images/rubrics/rubricCard2.svg";
import rubricsCard3 from "../../../public/assets/images/rubrics/rubricCard3.svg";
import rubricsCard4 from "../../../public/assets/images/rubrics/rubricCard4.svg";

import LgvBebasText from "@/features/news/components/LgvBebasText";
import Link from "next/link";

type RubricCard = {
  id: number;
  image: StaticImageData;
  title: string;
  alt: string;
};

const rubricCards: RubricCard[] = [
  {
    id: 1,
    image: rubricsCard1,
    title: "ტექნოლოგიები და კარიერა",
    alt: "ტექნოლოგიები და კარიერა",
  },
  {
    id: 2,
    image: rubricsCard2,
    title: "სტუდენტური ცხოვრება",
    alt: "სტუდენტური ცხოვრება",
  },
  {
    id: 3,
    image: rubricsCard3,
    title: "განათლება და კულტურა",
    alt: "განათლება და კულტურა",
  },
  {
    id: 4,
    image: rubricsCard4,
    title: "ზოგადი",
    alt: "ზოგადი",
  },
];

const Rubrics = () => {
  return (
    <section className="flex flex-col items-center font-sans lg:my-[100px] md:my-12 my-8 lg:gap-[110px] md:gap-12 gap-10 px-4 md:px-6 md:py-12 lg:px-8 lg:py-0 text-[#FFFFFF]">
      {/* ---------- First section ---------- */}
      <section
        aria-labelledby="unipodcast-rubrics-heading"
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1288px] gap-8 lg:gap-12 md:py-12"
      >
        <div className="w-full max-w-[548px]">
          <h2
            id="unipodcast-rubrics-heading"
            className="mb-4 text-[40px] font-bold text-[#FED403] lg:mb-6 font-display"
          >
            <LgvBebasText>უნიპოდკასტის რუბრიკები</LgvBebasText>
          </h2>

          <p className="leading-[26px]">
            უნიპოდკასტის კონტენტი სტრუქტურირებულია თემატური რუბრიკების მიხედვით,
            რაც უზრუნველყოფს ფორმატის თანმიმდევრულობასა და იდენტობას.
          </p>

          <Link
            href="/form"
            className="bg-black grid relative hover:bg-[#FED403] group duration-300 hover:text-black border border-[#FED403] py-5 px-[14px] text-[#FED403] font-bold text-[18px] rounded-full max-w-[326px] w-full mt-[48px] items-center justify-center"
          >
            <span className="col-start-1 col-end-3 text-center">
              შეავსე ფორმა
            </span>
            <span className="absolute right-3 p-2 border border-[#FED403] rounded-full group-hover:border-black duration-200">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#FED403] group-hover:fill-black group-hover:rotate-45 duration-300"
              >
                <path d="M4.02516 10.5833L3.2085 9.76667L8.8085 4.16667H3.79183V3H10.7918V10H9.62516V4.98333L4.02516 10.5833Z" />
              </svg>
            </span>
          </Link>
        </div>

        <Image
          src={rubricsIntro}
          alt="უნიპოდკასტის ვიდეო"
          width={629}
          height={431}
          className="rounded-[44px] w-[358px] h-[321px] md:w-[323px] lg:w-[629px] lg:h-[431px] object-cover"
        />
      </section>
      {/* ---------- Second section ---------- */}
      <section
        aria-labelledby="rubrics-heading"
        className="flex flex-col w-full max-w-[1288px] "
      >
        <h3
          id="rubrics-heading"
          className="font-bold text-[24px] mb-4 leading-[36px]"
        >
          რუბრიკები
        </h3>
        <p className="leading-[26px]">
          რუბრიკები ეფუძნება ილიაუნის სკოლა/ფაკულტეტებს, მათ საჭიროებებსა და
          თემატიკას. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-[32px] gap-4">
          {rubricCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center w-full max-w-[358px] md:max-w-[352px] lg:max-w-[612px] mx-auto p-6 lg:py-[56px] hover:bg-[#8413ED] duration-300 rounded-[10px]"
            >
              <Image
                src={card.image}
                alt={card.alt}
                width={143}
                height={88}
                className="w-[143px] h-[88px] object-contain"
              />

              <h4 className="font-display font-bold text-[24px] mt-4">
                <LgvBebasText>{card.title}</LgvBebasText>
              </h4>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Rubrics;
