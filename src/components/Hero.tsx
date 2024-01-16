import Image from "next/image";

export default function Hero() {
  const DisplayPicture = () => (
    // The parent need to have display relative
    <>
      <div className="bg-base border-mantle absolute top-0 h-24 w-24 -translate-y-1/2 overflow-hidden rounded-full border-2">
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
    <div className="bg-mantle relative p-4">
      <DisplayPicture />
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-xl font-bold">Fajar Maftuh Fadli</h1>
          <p className="text-overlay0">@fajarmaftuhfadli</p>
        </div>
        <p className="text-subtext1">
          Welcome, traveler. This one is a frog, hailing from the misty swamps
          of Black Marsh. 🐸 Croak! May the Hist guide your path!
        </p>
        <div>
          <ul className="text-overlay0">
            <li>Depok, Indonesia</li>
            <li>
              <a className="text-blue" href="">
                Source Code
              </a>
            </li>
            <li>Updated January 2023</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
