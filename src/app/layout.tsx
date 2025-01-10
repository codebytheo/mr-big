import type { Metadata } from "next";
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

const interExtrabold = localFont({
  src: './fonts/InterExtraBold.ttf',
  display: 'swap',
  variable: "--font-inter-extrabold",
});
const clashGrotesk = localFont({
  src: './fonts/ClashGrotesk-Medium.woff',
  display: 'swap',
  variable: "--font-clashgrotesk-medium",
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
      <body className={`${interMedium.variable} ${interExtrabold.variable} ${dancingScript.variable} ${clashGrotesk.variable} selection:bg-red-700`}>
        <LenisScroll>
          {children}
        </LenisScroll>
      </body>
    </html>
  );
}
