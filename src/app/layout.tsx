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
      <body className="mx-auto max-w-6xl md:flex md:gap-4 md:px-10 md:pt-20">
        <Header />
        <div className="ring-1 md:sticky md:top-20 md:h-full md:max-w-md">
          <Banner />
          <Hero />
        </div>
        <div className="ring-1">
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
