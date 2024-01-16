import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-crust relative aspect-[100/33] w-full">
      <Image
        src="/cat-waves.png"
        alt="banner"
        className="object-cover object-center"
        fill
        priority
      />
    </div>
  );
}
