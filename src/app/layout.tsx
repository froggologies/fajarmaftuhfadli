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
    <html lang="en" className="bg-base text-text leading-snug">
      <body className="bg-mantle">
        <div className="mx-auto max-w-2xl">
          <Header />
          <Banner />
          <Hero />
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
