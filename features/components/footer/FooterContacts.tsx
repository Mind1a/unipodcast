import Image from "next/image";
import Link from "next/link";
import { footerContactData } from "./footerContactData";

const FooterContacts = () => {
  return (
    <div className="mt-12 flex flex-col md:mt-0">
      <h3 className="font-bold text-white">კონტაქტი</h3>

      <ul className="mt-6 flex flex-col gap-4">
        {footerContactData.map((contact) => (
          <li key={contact.id}>
            <Link
              href={contact.href}
              className="group flex items-center gap-3 text-white hover:text-[#FED403]"
            >
              <span className="relative h-6 w-6 shrink-0">
                <Image
                  src={contact.icons.default}
                  alt=""
                  width={24}
                  height={24}
                  className="block group-hover:hidden"
                />

                <Image
                  src={contact.icons.hover}
                  alt=""
                  width={24}
                  height={24}
                  className="hidden group-hover:block"
                />
              </span>

              <span>{contact.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContacts;
