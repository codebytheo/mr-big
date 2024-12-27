import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import LenisScroll from "@/components/lenis-scroll";

const dancingScript = localFont({
  src: './fonts/DancingScript.ttf',
  display: 'swap',
  variable: "--font-dancing-script",
})

const interMedium = localFont({
  src: './fonts/InterMedium.ttf',
  display: 'swap',
  variable: "--font-inter-medium",
});

const interSemibold = localFont({
  src: './fonts/InterSemiBold.ttf',
  display: 'swap',
  variable: "--font-inter-semibold",
});

const interExtrabold = localFont({
  src: './fonts/InterExtraBold.ttf',
  display: 'swap',
  variable: "--font-inter-extrabold",
});

export const metadata: Metadata = {
  title: "History of rock - MR.BIG",
  description: "this website is full history of rock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interMedium.variable} ${interSemibold.variable} ${interExtrabold.variable} ${dancingScript.variable} selection:bg-red-700`}>
        <LenisScroll>
          {children}
        </LenisScroll>
      </body>
    </html>
  );
}
