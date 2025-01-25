import localFont from "next/font/local";

export const lineSeedEN = localFont({
  src: [
    {
      path: "./fonts/EN/LINESeedSans_W_Th.woff2",
      weight: "100 300",
    },
    {
      path: "./fonts/EN/LINESeedSans_W_Rg.woff2",
      weight: "400 500",
    },
    {
      path: "./fonts/EN/LINESeedSans_W_Bd.woff2",
      weight: "600 700",
    },
  ],
  variable: "--font-line-seed-en",
});

export const lineSeedTH = localFont({
  src: [
    {
      path: "./fonts/TH/LINESeedSansTH_W_Th.woff2",
      weight: "100 300",
    },
    {
      path: "./fonts/TH/LINESeedSansTH_W_Rg.woff2",
      weight: "400 500",
    },
    {
      path: "./fonts/TH/LINESeedSansTH_W_Bd.woff2",
      weight: "600 700",
    },
  ],
  variable: "--font-line-seed-th",
});

export const lineSeedJP = localFont({
  src: [
    {
      path: "./fonts/JP/LINESeedJP_W_Th.woff2",
      weight: "100 300",
    },
    {
      path: "./fonts/JP/LINESeedJP_W_Rg.woff2",
      weight: "400 500",
    },
    {
      path: "./fonts/JP/LINESeedJP_W_Bd.woff2",
      weight: "600 700",
    },
  ],
  variable: "--font-line-seed-jp",
});
