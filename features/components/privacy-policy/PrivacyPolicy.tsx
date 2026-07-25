import LgvBebasText from "@/features/news/components/LgvBebasText";
import Image from "next/image";
const privacySections = [
  {
    title: "1. ინფორმაციის შეგროვება",
    description:
      "ჩვენი ვებსაიტი არის საინფორმაციო ტიპის და არ მოითხოვს მომხმარებლის რეგისტრაციას. თუმცა, შესაძლებელია ავტომატურად შეგროვდეს გარკვეული ტექნიკური ინფორმაცია, როგორიცაა:",
    list: [
      "IP მისამართი",
      "ბრაუზერის ტიპი",
      "მოწყობილობის ტიპი",
      "საიტზე ვიზიტის დრო და ხანგრძლივობა",
    ],
  },
  {
    title: "2. Cookies (ქუქი ფაილები)",
    description:
      "ჩვენი ვებსაიტი შეიძლება იყენებდეს cookies-ს მომხმარებლის გამოცდილების გაუმჯობესების მიზნით. თქვენ შეგიძლიათ თქვენს ბრაუზერში გამორთოთ cookies, თუმცა ამან შესაძლოა გავლენა მოახდინოს საიტის ფუნქციონირებაზე.",
  },
  {
    title: "3. ინფორმაციის გამოყენება",
    description: "შეგროვებული ინფორმაცია გამოიყენება მხოლოდ:",
    list: [
      "ვებსაიტის გაუმჯობესებისთვის",
      "მომხმარებლის გამოცდილების გასაუმჯობესებლად",
      "ტექნიკური პრობლემების გამოსასწორებლად",
    ],
  },
  {
    title: "4. მესამე მხარის სერვისები",
    description:
      "შესაძლოა ვიყენებდეთ მესამე მხარის სერვისებს (მაგალითად, ანალიტიკის ინსტრუმენტებს), რომლებიც აგროვებენ ანონიმურ მონაცემებს ვებსაიტის გამოყენების შესახებ.",
  },
  {
    title: "5. ინფორმაციის გაზიარება",
    description:
      "ჩვენ არ ვყიდით, არ ვაქირავებთ და არ ვუზიარებთ თქვენს პერსონალურ ინფორმაციას მესამე პირებს, გარდა იმ შემთხვევებისა, როცა ამას კანონი მოითხოვს.",
  },
  {
    title: "6. მონაცემების უსაფრთხოება",
    description:
      "ვიღებთ შესაბამის ტექნიკურ და ორგანიზაციულ ზომებს თქვენი ინფორმაციის დასაცავად.",
  },
  {
    title: "7. გარე ბმულები",
    description:
      "ჩვენი ვებგვერდი შეიძლება შეიცავდეს ბმულებს სხვა ვებსაიტებზე. ჩვენ არ ვართ პასუხისმგებელი ამ ვებსაიტების კონფიდენციალურობის პოლიტიკაზე.",
  },
  {
    title: "8. ცვლილებები",
    description:
      "ვიტოვებთ უფლებას, ნებისმიერ დროს განვაახლოთ ეს პოლიტიკა. ცვლილებები გამოქვეყნდება ამ გვერდზე.",
  },
  {
    title: "9. კონტაქტი",
    description:
      "თუ გაქვთ შეკითხვები კონფიდენციალურობის პოლიტიკასთან დაკავშირებით, დაგვიკავშირდით:",
    email: "unipodcast@iliauni.edu.ge",
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="relative  min-h-screen bg-black text-white">
      <Image
        src="/assets/images/EllipseTablet.png"
        alt=""
        width={661}
        height={356}
        aria-hidden="true"
        priority
        className="pointer-events-none absolute left-[-132px] xl:left-[1019] top-[28px] xl:top-[200] z-0 hidden h-[356px] w-[661px]  md:block "
      />

      <section className="relative z-10 mx-auto w-full max-w-[390px] px-4 pt-[104px] pb-12 md:max-w-[768px] md:px-6 xl:max-w-[1240px] xl:px-0 xl:pt-[132px] xl:pb-[68px]">
        <h1 className=" font-display text-[30px] font-bold leading-normal text-[#FED403] md:text-center xl:text-[40px]">
          <LgvBebasText>კონფიდენციალურობის პოლიტიკა</LgvBebasText>
        </h1>

        <p className="mt-6 text-[16px] leading-[26px] md:mt-8 xl:mt-[68px] xl:max-w-[1120px]">
          ჩვენთვის მნიშვნელოვანია თქვენი კონფიდენციალობა. ეს კონფიდენციალობის
          პოლიტიკა აღწერს, თუ როგორ ვაგროვებთ, ვიყენებთ და ვიცავთ ინფორმაციას
          ჩვენი ვებსაიტის გამოყენებისას.
        </p>

        <div className="mt-[50px] space-y-8 md:mt-8 xl:mt-[68px]">
          {privacySections.map((section) => (
            <article key={section.title}>
              <h2 className="text-[24px] font-bold leading-[40px]">
                {section.title}
              </h2>

              <p className="mt-2 text-[16px] leading-[26px]">
                {section.description}
              </p>

              {section.list && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[16px] leading-[26px]">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.email && (
                <div className="mt-2 flex items-center gap-2 text-[16px] leading-[26px]">
                  <span>📧</span>
                  <a
                    href={`mailto:${section.email}`}
                    className="break-all hover:underline"
                  >
                    {section.email}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
