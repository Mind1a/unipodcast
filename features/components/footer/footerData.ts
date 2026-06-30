export type FooterNavigation = {
  title: string;
  links: {
    id: number;
    label: string;
    href: string;
  }[];
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
