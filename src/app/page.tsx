import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <Hero />
      <NavBar />
    </main>
  );
}

function Header() {
  return (
    <div className="bg-mantle flex flex-col px-4 py-2">
      <span className="text-lg font-semibold">Frog</span>
      <span className="text-blue text-sm">99 posts</span>
      {/** TODO: add 3 dots option here */}
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-crust relative h-32 w-full">
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

function Hero() {
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

function NavBar() {
  const Li = ({ children }: { children: React.ReactNode }) => (
    <li className="hover:bg-base w-full cursor-pointer p-4 text-center">
      {children}
    </li>
  );

  return (
    <nav className="bg-mantle border-overlay0 border-b-[1px]">
      <ul className="text-overlay0 flex w-full text-lg font-semibold">
        {/** TODO: add icon for each item bellow */}
        <Li>Posts</Li>
        <Li>Experience</Li>
        <Li>Projects</Li>
        <Li>Certificates</Li>
      </ul>
    </nav>
  );
}
