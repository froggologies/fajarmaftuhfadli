import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative aspect-[100/33] w-full bg-crust md:overflow-hidden md:rounded-sm">
      <Image
        src="/evening-sky.png"
        alt="banner"
        className="object-cover object-center"
        fill
        priority
      />
    </div>
  );
}
