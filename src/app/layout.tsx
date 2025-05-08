import type { Metadata } from "next";
import "./globals.css";
import { Quantico, Press_Start_2P } from "next/font/google";
import Navbar from "@/components/Navbar";

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const press_Start_2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-press-start-2p",
});

export const metadata: Metadata = {
  title: "Young Webmaster Camp 20",
  description: "Young webmaster camp 20 website made by Trin Chuainugoon",
  keywords: [
    "YWC20",
    "Young webmaster camp 20",
    "young webmaster camp 20",
    "ywc20 eligible",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${press_Start_2P.variable}`}>
      <body data-theme="main" className={`${quantico.className} p-5`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
