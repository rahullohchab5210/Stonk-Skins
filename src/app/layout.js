import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DM_Sans, Poppins } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

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

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});


export const metadata = {
  title: "Stonk-Skins",
  description: "The Ultimate CS 2 Marketplace for Gamers Who Mean Business",
  openGraph: {
    title: "Stonk-Skins",
    description: "The Ultimate CS 2 Marketplace for Gamers Who Mean Business",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body style={{ backgroundImage: `url('/assets/images/png/lines.png')` }} className="min-h-full bg-[#220C30] flex flex-col bg-cover bg-center">
        <Navbar />
        <main role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
