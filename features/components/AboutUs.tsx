import Image, { StaticImageData } from "next/image";
import type { ReactNode } from "react";

import aboutUs1 from "../../public/assets/images/aboutUs1.png";
import aboutUs2 from "../../public/assets/images/aboutUs2.png";

const AboutUs = () => {
  return (
    <section className="flex flex-col justify-center items-center lg:m-[100px] md:gap-8 lg:gap-[100px]">
      <div className="flex flex-col md:flex-row max-w-[1240px] w-full gap-12 items-center md:px-6 md:py-12">
        <div className="max-w-[492px] w-full">
          <h2 className="mb-4 text-[40px] font-bold text-[#FED403] lg:mb-[18px]">
            ვინ ვართ ჩვენ
          </h2>
          <p className="leading-[26px]">
            პლატფორმა, ცოდნის, ინსპირაციისა და სტუდენტური ცხოვრების გაერთიანება.
            ეს არის სივრცე, სადაც ილიაუნის (არა მარტო) სტუდენტები, პროფესორები
            და კურსდამთავრებულები აზრს ცვლიან, გამოცდილებას იზიარებენ და ახალ
            იდეებს ქმნიან.
          </p>
        </div>
        <div>
          <Image
            src={aboutUs1}
            alt="ჩვენ შესახებ"
            width={700}
            height={365}
            className="w-full h-auto rounded-[20px]"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-[1240px] w-full md:px-6 md:py-12">
        <div className="w-full lg:max-w-[596px] lg:pr-8">
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-bold">ჩვენი მიზანია</h3>
            <p className="leading-[26px]">
              ჩვენი მიზანია, შევქმნათ ისეთი პლატფორმა, რომელიც განათლებას,
              კარიერულ განვითარებასა და სტუდენტურ გამოცდილებას საინტერესო და
              თანამედროვე ფორმატით გააცნობს ახალგაზრდებს.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-2xl font-bold">ჩვენი მისიაა</h3>
            <p className="leading-[26px]">
              უნიპოდკასტის მისიაა შექმნას ინსპირაციული, საინტერესო და ინოვაციური
              პლატფორმა, რომელიც მოსწავლეებს, სტუდენტებს, პროფესორებსა და
              კურსდამთავრებულებს განათლების, კარიერის, კულტურისა და
              ტექნოლოგიების სფეროში ღირებულ კონტენტს შესთავაზებს.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[596px] flex-shrink-0">
          <Image
            src={aboutUs2}
            alt="ჩვენ შესახებ"
            width={596}
            height={397}
            className="w-full h-auto rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
