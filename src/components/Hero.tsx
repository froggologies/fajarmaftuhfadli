import Image from "next/image";
import IconMapPin from "./icons/map-pin";
import IconCodeBracket from "./icons/code-bracket";
import IconArrowPath from "./icons/arrow-path";

export default function Hero() {
  const DisplayPicture = () => (
    // The parent need to have display relative
    <>
      <div className="absolute top-0 z-10 h-24 w-24 -translate-y-1/2 overflow-hidden rounded-full border-4 border-mantle bg-crust">
        <Image
          src="/profile.png"
          alt="profile"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="h-12 w-24"></div> {/** ghost component */}
    </>
  );

  return (
    <div className="relative p-4 sm:px-10 md:px-16 lg:p-0 lg:pt-4">
      <div className="mx-auto max-w-lg sm:max-w-xl md:max-w-2xl">
        <DisplayPicture />
        <h1 className="mb-2 text-xl font-bold">Fajar Maftuh Fadli</h1>
        <div className="flex flex-col gap-4">
          <p className="text-overlay0">@fajarmaftuhfadli</p>
          <p className="text-subtext1">
            Welcome, traveler. This one is a frog, hailing from the misty swamps
            of Black Marsh. 🐸 Croak! May the Hist guide your path!
          </p>
          <ul className="text-overlay0">
            <li className="flex items-center gap-2">
              <IconMapPin className="h-4 w-4" />
              Depok, Indonesia
            </li>
            <li className="flex items-center gap-2">
              <IconCodeBracket className="h-4 w-4" />
              <a className="text-blue" href="">
                Source Code
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IconArrowPath className="h-4 w-4" />
              Updated January 2023
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
