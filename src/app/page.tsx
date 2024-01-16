export default function Home() {
  return (
    <main className="bg-base text-white">
      <div className="bg-mantle flex flex-col px-4 py-2">
        <span className="text-lg font-semibold">Frog</span>
        <span className="text-blue text-sm">99 posts</span>
      </div>
      <div className="bg-crust h-32 w-full"></div>
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <div className="bg-mantle relative p-4">
      <DisplayPicture />
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-xl font-bold">Fajar Maftuh Fadli</h1>
          <p className="text-blue">@fajarmaftuhfadli</p>
        </div>
        <p className="text-subtext1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          mollitia.
        </p>
        <div>
          <ul className="text-blue">
            <li>Depok, Indonesia</li>
            <li>
              <a href="">Source Code</a>
            </li>
            <li>Last updated: January 2023</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DisplayPicture() {
  // The parent need to have display relative
  return (
    <>
      <div className="bg-base border-mantle absolute top-0 h-24 w-24 -translate-y-1/2 rounded-full border-2"></div>
      <div className="h-12 w-24"></div> {/** ghost component */}
    </>
  );
}
