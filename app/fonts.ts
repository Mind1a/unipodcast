import localFont from "next/font/local";

export const notoSansGeorgian = localFont({
  src: "../public/assets/fonts/noto/NotoSansGeorgian-VariableFont_wdth,wght.ttf",
  variable: "--font-noto-sans-georgian",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const bebasNeue = localFont({
  src: "../public/assets/fonts/bebasNeue/BebasNeue-Regular.ttf",
  variable: "--font-bebas-neue",
  weight: "400",
  style: "normal",
  display: "swap",
});
