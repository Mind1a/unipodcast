import Image from "next/image";

import aboutUs1 from "../../public/assets/images/aboutUs1.png";
import aboutUs2 from "../../public/assets/images/aboutUs2.png";

import Team from "./Team";

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center lg:my-[100px] md:my-12 my-8 lg:gap-[100px] md:gap-12 gap-10 px-4 md:px-6 md:py-12 lg:px-8 lg:py-0 bg-[#010101] text-[#FFFFFF]">
      {/* ---------- Fisrt section ---------- */}
      <section
        aria-labelledby="who-we-are-heading"
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1240px] gap-8 lg:gap-12 md:py-12"
      >
        <div className="w-full max-w-[492px]">
          <h2
            id="who-we-are-heading"
            className="mb-4 text-[40px] font-bold text-[#FED403] lg:mb-[18px]"
          >
            ვინ ვართ ჩვენ
          </h2>

          <p className="leading-[26px]">
            პლატფორმა, ცოდნის, ინსპირაციისა და სტუდენტური ცხოვრების გაერთიანება.
            ეს არის სივრცე, სადაც ილიაუნის (არა მარტო) სტუდენტები, პროფესორები
            და კურსდამთავრებულები აზრს ცვლიან, გამოცდილებას იზიარებენ და ახალ
            იდეებს ქმნიან.
          </p>
        </div>

        <Image
          src={aboutUs1}
          alt="გუნდის თანამშრომლობის ილუსტრაცია"
          width={700}
          height={345}
          className="rounded-[20px] w-[358px] h-[186px] md:w-[361px] md:h-[238px] lg:w-[700px] lg:h-[345px] object-cover"
        />
      </section>

      {/* ---------- Second section ---------- */}
      <section
        aria-labelledby="mission-heading"
        className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1240px] gap-8 lg:gap-12"
      >
        <div className="w-full lg:max-w-[596px]">
          <div className="mb-8 lg:pr-8">
            <h3 id="mission-heading" className="mb-2 text-2xl font-bold">
              ჩვენი მიზანია
            </h3>

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

        <Image
          src={aboutUs2}
          alt="უნიპოდკასტის გუნდი სტუდიაში"
          width={596}
          height={397}
          className="rounded-[20px] w-[358px] h-[239px] md:w-[720px] md:h-[440px] lg:w-[596px] lg:h-[397px] object-cover"
        />
      </section>

      <Team />
    </section>
  );
};

export default AboutUs;
