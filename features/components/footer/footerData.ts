export type FooterNavigation = {
  title: string;
  links: {
    id: number;
    label: string;
    href: string;
  }[];
};

export type FooterContactItem = {
  id: number;
  label: string;
  href: string;
  icons: {
    default: string;
    hover: string;
  };
};

export type FooterSocialItem = {
  id: number;
  label: string;
  href: string;
  icons: {
    label: string;
    default: string;
    hover: string;
  };
};

export const footerNavigation: FooterNavigation = {
  title: "სწრაფი ბმულები",
  links: [
    {
      id: 1,
      label: "ჩვენ შესახებ",
      href: "#",
    },
    {
      id: 2,
      label: "სიახლეები",
      href: "#",
    },
    {
      id: 3,
      label: "ევენთები",
      href: "#",
    },
    {
      id: 4,
      label: "სერვისები",
      href: "#",
    },
    {
      id: 5,
      label: "კონფიდენციალურობის პოლიტიკა",
      href: "#",
    },
  ],
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

export const footerSocialData: FooterSocialItem[] = [
  {
    id: 1,
    label: "Facebook",
    href: "#",
    icons: {
      default: "/images/footer/facebook.svg",
      hover: "/images/footer/facebook-hover.svg",
      label: "",
    },
  },
  {
    id: 2,
    label: "Instagram",
    href: "#",
    icons: {
      default: "/images/footer/instagram.svg",
      hover: "/images/footer/instagram-hover.svg",
      label: "",
    },
  },
  {
    id: 3,
    label: "Youtube",
    href: "#",
    icons: {
      default: "/images/footer/youtube.svg",
      hover: "/images/footer/youtube-hover.svg",
      label: "",
    },
  },
  {
    id: 4,
    label: "Tiktok",
    href: "#",
    icons: {
      default: "/images/footer/tiktok.svg",
      hover: "/images/footer/tiktok-hover.svg",
      label: "",
    },
  },
  {
    id: 5,
    label: "Linkedin",
    href: "#",
    icons: {
      default: "/images/footer/linkedin.svg",
      hover: "/images/footer/linkedin-hover.svg",
      label: "",
    },
  },
];
