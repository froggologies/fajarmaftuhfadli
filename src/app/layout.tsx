import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Fajar Maftuh Fadli",
  description: "Fajar's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-base leading-snug text-text">
      <body className="mx-auto max-w-6xl lg:flex lg:gap-4 lg:px-10 lg:pt-20">
        <Header />
        <div className="lg:sticky lg:top-20 lg:h-full lg:max-w-md">
          <Banner />
          <Hero />
        </div>
        <div className="">
          <NavBar />
          {children}
          <div className="text-center">
            <span>º</span>
          </div>
        </div>
      </body>
    </html>
  );
}
