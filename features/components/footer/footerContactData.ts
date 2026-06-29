export type FooterContactItem = {
  id: number;
  label: string;
  href: string;
  icons: {
    default: string;
    hover: string;
  };
};

export const footerContactData: FooterContactItem[] = [
  {
    id: 1,
    label: "unipodcast@iliauni.edu.ge",
    href: "mailto:unipodcast@iliauni.edu.ge",
    icons: {
      default: "/images/footer/mail.svg",
      hover: "/images/footer/mail-hover.svg",
    },
  },
  {
    id: 2,
    label: "+995 568 933 776",
    href: "tel:+995568933776",
    icons: {
      default: "/images/footer/phone.svg",
      hover: "/images/footer/phone-hover.svg",
    },
  },
  {
    id: 3,
    label: "ილია ჭავჭავაძის გამზირი N45",
    href: "#",
    icons: {
      default: "/images/footer/location.svg",
      hover: "/images/footer/location-hover.svg",
    },
  },
];
