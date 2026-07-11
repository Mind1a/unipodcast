import Link from "next/link";
import { footerNavigation } from "./footerData";

const FooterLinks = () => {
  return (
    <nav className="font-sans mt-8 md:mt-0">
      <h3 className="text-[rgba(255,255,255,1)] font-bold">
        {footerNavigation.title}
      </h3>

      <ul className="mt-6 flex flex-col gap-2 text-[rgba(244,234,253,1)]">
        {footerNavigation.links.map((link) => (
          <li key={link.id}>
            <Link
              className="transition-colors duration-300 hover:text-[#FED403]"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinks;
