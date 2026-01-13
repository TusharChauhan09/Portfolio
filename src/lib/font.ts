import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";

export const neu = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMachina-Light.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/NeueMachina-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/NeueMachina-Ultrabold.otf",
      weight: "700",
    },
  ],
  variable: "--font-neu",
});
export const lombok = localFont({
  src: [
    {
      path: "../../public/fonts/Lombok Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-lombok",
});
export const cath = localFont({
  src: [
    {
      path: "../../public/fonts/CATHSGBR.ttf",
      weight: "400",
    },
  ],
  variable: "--font-cath",
});
export const jap = localFont({
  src: [
    {
      path: "../../public/fonts/Geishta.otf",
      weight: "400",
    },
  ],
  variable: "--font-jap",
});

// Elegant serif font for quotes
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});
