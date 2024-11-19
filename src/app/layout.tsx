import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

import { LandingLayout } from "@/layouts/LandingLayout";
import BGTexture from "@/assets/images/BGTexture.svg";
const iranSans = localFont({
  src: [
    {
      path: "../fonts/IranSans/iran-sans-mobile-fa-num-light.ttf",
      weight: "300",
    },
    {
      path: "../fonts/IranSans/iran-sans-mobile-fa-num.ttf",
      weight: "400",
    },
    {
      path: "../fonts/IranSans/iran-sans-mobile-fa-num-medium.ttf",
      weight: "500",
    },
    {
      path: "../fonts/IranSans/iran-sans-mobile-fa-num-bold.ttf",
      weight: "700",
    },
    {
      path: "../fonts/IranSans/iran-sans-mobile-fa-num-black.ttf",
      weight: "900",
    },
  ],
  display: "fallback",
  variable: "--font-iran-sans",
});

export const metadata: Metadata = {
  title: "Sina Fadavi",
  description: "Adilar's addon for employer and candidate",
  icons: {
    icon: [
      {
        type: "image/png",
        sizes: "32x32",
        url: "/images/manifest/favicon-32x32.png",
      },
      {
        type: "image/png",
        sizes: "16x16",
        url: "/images/manifest/favicon-16x16.png",
      },
    ],
    apple: {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/images/manifest/apple-touch-icon.png",
    },
    other: [
      {
        rel: "mask-icon",
        url: "/images/manifest/safari-pinned-tab.svg",
        color: "#5352ED",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranSans.className} relative antialiased bg-fadoo_background-main`}
      >
        <LandingLayout>{children}</LandingLayout>
        <Image
          src={BGTexture}
          alt="background"
          fill
          className="movable object-fill opacity-10   brightness-0 w-full h-full absolute top-0 left-0 -z-[1]"
        />
      </body>
    </html>
  );
}
