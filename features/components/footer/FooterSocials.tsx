import Image from "next/image";
import Link from "next/link";
import { footerSocialData } from "./footerSocialData";

const FooterSocials = () => {
  return (
    <div className="flex items-center gap-5">
      {footerSocialData.map((social) => (
        <Link
          key={social.id}
          href={social.href}
          aria-label={social.label}
          className="group flex h-10 w-10 items-center justify-center rounded-full"
        >
          <Image
            src={social.icons.default}
            alt=""
            width={42}
            height={42}
            className="block group-hover:hidden"
          />

          <Image
            src={social.icons.hover}
            alt=""
            width={42}
            height={42}
            className="hidden group-hover:block"
          />
        </Link>
      ))}
    </div>
  );
};

export default FooterSocials;
