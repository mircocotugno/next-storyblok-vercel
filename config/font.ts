import { Roboto, Roboto_Slab } from "next/font/google";

export const fontSans = Roboto({
  variable: "--font-sans",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const fontSerif = Roboto_Slab({
  variable: "--font-serif",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});
