import Link from "next/link";
import { footerNavigation } from "./footerData";

const FooterLinks = () => {
  return (
    <nav>
      <h3>{footerNavigation.title}</h3>

      <ul>
        {footerNavigation.links.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinks;
