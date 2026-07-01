import localFont from "next/font/local";

export const notoSansGeorgian = localFont({
  src: "../public/assets/fonts/noto/NotoSansGeorgian-VariableFont_wdth,wght.ttf",
  variable: "--font-noto-sans-georgian",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const bebasNeue = localFont({
  src: [
    {
      path: "../public/assets/fonts/bebasNeue/LGVBebasNeueBook-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/bebasNeue/LGVBebasNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/bebasNeue/LGVBebasNeue-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bebas-neue",
  display: "swap",
});
