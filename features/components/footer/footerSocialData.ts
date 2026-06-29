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
