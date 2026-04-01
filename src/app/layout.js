import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});


export const metadata = {
  title: "Stonk-Kins",
  description: "The Ultimate CS 2 Marketplace for Gamers Who Mean Business",
  openGraph: {
    title: "Stonk-Kins",
    description: "The Ultimate CS 2 Marketplace for Gamers Who Mean Business",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
