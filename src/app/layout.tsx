import type { Metadata } from "next";
import "./globals.css";
import { Quantico } from 'next/font/google'
import Navbar from "@/components/Navbar";

const quantico = Quantico({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "YWC20",
  description: "Young webmaster camp 20",
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
    <html lang="en" >
      <body data-theme="main" className={`${quantico.className} p-5`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
