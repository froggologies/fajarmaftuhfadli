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
    <html lang="en" className="scroll-smooth bg-mantle leading-snug text-text">
      <body className="mx-auto max-w-6xl lg:flex lg:gap-4 lg:px-10 lg:pt-20">
        <Header />
        <Banner />
        <div className="lg:sticky lg:top-20 lg:h-full lg:max-w-md">
          <Hero />
        </div>
        <div className="">
          <NavBar />
          {children}
          {/* <div className="text-center">
            <span>º</span>
          </div> */}
        </div>
        {/* <div className="flex flex-col gap-4 p-4 sm:px-10 md:px-16">
          {Array.from({ length: 10 }, (v, i) => (
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              ratione illo consequuntur dignissimos asperiores magnam deserunt
              necessitatibus quibusdam dicta aliquam, illum iste tempore
              doloremque? Quos esse illo provident dignissimos. Laudantium!
            </div>
          ))}
        </div> */}
      </body>
    </html>
  );
}
