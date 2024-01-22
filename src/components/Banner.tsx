import Image from "next/image";

export default function Banner() {
  return (
    <>
      {/* <div className="relative aspect-[100/33] w-full bg-crust lg:overflow-hidden lg:rounded-sm">
        <Image
          src="/evening-sky.png"
          alt="banner"
          className="object-cover object-center"
          fill
          priority
        />
      </div> */}
      <div className="sticky -top-20 z-10 h-36 w-full bg-crust sm:-top-36 sm:h-52 md:-top-48 md:h-64 lg:hidden lg:h-40 lg:overflow-hidden lg:rounded-sm">
        <Image
          src="/evening-sky.png"
          alt="banner"
          className="object-cover object-center"
          fill
          priority
        />
      </div>
    </>
  );
}
