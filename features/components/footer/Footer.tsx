import Image from "next/image";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="flex h-auto w-full flex-col items-start border-t-[0.5px] border-t-[rgba(87,71,101,1)] bg-[rgba(32,12,51,1)] px-6 md:h-[666.86px] md:items-center md:px-0 lg:h-[489.86px]">
      <div className="mt-6 flex h-130.25 w-full max-w-73.5 flex-col items-start bg-red-500 md:mt-8 md:h-85.75 md:max-w-180 lg:mt-12 lg:h-55.5 lg:max-w-310 lg:flex-row">
        <Image
          src="/images/footer/podcast-logo.svg"
          alt="Footer Logo"
          width={131}
          height={65}
          className="h-auto w-32.75 md:h-20 md:w-41.25 lg:h-23 lg:w-41.25"
        />

        <div className="flex flex-col md:flex-row h-106 w-full bg-gray-500 md:h-57.75 lg:ml-auto lg:h-full lg:w-156.5">
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
