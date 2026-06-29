import Image from "next/image";
import FooterLinks from "./FooterLinks";
import FooterContacts from "./FooterContacts";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer className="flex h-auto w-full flex-col items-start border-t-[0.5px] border-t-[rgba(87,71,101,1)] bg-[rgba(32,12,51,1)] px-6 md:h-[666.86px] md:items-center md:px-0 lg:h-[489.86px]">
      <div className="mt-6 flex h-auto w-full max-w-73-5 flex-col items-start bg-red-500 px-6 md:mt-8 md:h-auto md:max-w-180 md:px-0 lg:mt-12 lg:h-auto lg:max-w-310 lg:flex-row">
        <Image
          src="/images/footer/podcast-logo.svg"
          alt="Footer Logo"
          width={131}
          height={65}
          className="h-auto w-32.75 md:h-20 md:w-41.25 lg:h-23 lg:w-41.25"
        />

        <div className="flex flex-col justify-between md:flex-row h-auto w-full bg-gray-500 md:h-full lg:ml-auto lg:h-full lg:w-156-5 md:mt-8 lg:mt-0">
          <FooterLinks />
          <FooterContacts />
        </div>
      </div>

      <div className="h-auto w-full flex flex-col md:flex-row justify-between max-w-73-5 bg-black mt-6 md:mt-8 md:max-w-180 lg:mt-12 lg:max-w-310">
        <div className="flex flex-row gap-5.5">
          <Image
            src="images/footer/unilabLogo.svg"
            alt="uniLab Logo"
            width={42}
            height={54.79}
            className="md:w-[57.19px] md:h-[74.61px]"
          />
          <Image
            src="images/footer/iliauniLogo.svg"
            alt="uniLab Logo"
            width={53}
            height={53.96}
            className="md:w-[77.33px] md:h-[77.86px]"
          />
        </div>
        <div className="flex items-center mt-8 md:mt-0">
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
