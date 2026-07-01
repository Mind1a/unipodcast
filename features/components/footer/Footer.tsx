import Image from "next/image";
import FooterLinks from "./FooterLinks";
import FooterContacts from "./FooterContacts";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer className="flex h-auto w-full flex-col items-start border-t-[0.5px] border-t-[rgba(87,71,101,1)] bg-[rgba(32,12,51,1)] px-6 md:h-[666.86px] md:items-center md:px-0 lg:h-[489.86px]">
      <div className="mt-6 flex h-auto w-full max-w-73-5 flex-col items-start md:mt-8 md:h-auto md:max-w-180 lg:mt-12 lg:h-auto lg:max-w-310 lg:flex-row">
        <Image
          src="/images/footer/podcast-logo.svg"
          alt="Footer Logo"
          width={131}
          height={65}
          className="h-auto w-32.75 md:ml-0 md:h-20 md:w-41.25 lg:h-23 lg:w-41.25"
        />

        <div className="mt-6 flex h-auto w-full flex-col justify-between md:mt-8 md:h-full md:flex-row lg:mt-0 lg:ml-auto lg:h-full lg:w-156-5">
          <FooterLinks />
          <FooterContacts />
        </div>
      </div>

      <div className="mt-6 flex h-auto w-full max-w-73-5 flex-col justify-between md:mt-8 md:max-w-180 md:flex-row lg:mt-12 lg:max-w-310">
        <div className="flex flex-row gap-5.5">
          <Image
            src="/images/footer/unilabLogo.svg"
            alt="uniLab Logo"
            width={42}
            height={54.79}
            className="md:h-[74.61px] md:w-[57.19px]"
          />

          <Image
            src="/images/footer/iliauniLogo.svg"
            alt="Iliauni Logo"
            width={53}
            height={53.96}
            className="md:h-[77.86px] md:w-[77.33px]"
          />
        </div>

        <div className="mt-8 flex items-center md:mt-0">
          <FooterSocials />
        </div>
      </div>

      <div
        className="mt-8 h-0.5 w-full max-w-85.5 md:max-w-180 lg:mt-6 lg:max-w-310"
        style={{
          borderBottom: "0.5px solid",
          borderImageSource:
            "linear-gradient(90deg, #8A2BE2 0%, #C37E75 49.04%)",
          borderImageSlice: 1,
        }}
      />

      <div className="mt-8 mb-6 h-11 w-full max-w-81.5 text-white md:mb-8 md:h-5.5 md:max-w-180 lg:mt-6 lg:max-w-310 text-[16px] font-sans">
        <p>
          Copyright <span className="text-[#4F5448] font-bold"> ©</span> 2026
          UniPodcast. ყველა უფლება დაცულია
        </p>
      </div>
    </footer>
  );
};

export default Footer;
