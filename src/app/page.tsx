export default function Home() {
  return (
    <main className="bg-base text-white">
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <>
      <div>
        <div className="bg-crust h-32 w-full"></div>
        <div className="relative px-4">
          <DisplayPicture />
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xl font-bold">Fajar Maftuh Fadli</p>
              <p>@fajarmaftuhfadli</p>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              mollitia.
            </p>
            <div>
              <ul>
                <li>Depok, Indonesia</li>
                <li>linkedin link</li>
                <li>Last updated: January 2023</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DisplayPicture() {
  // The parent need to have display relative
  return (
    <>
      <div className="bg-mantle border-base absolute top-0 h-24 w-24 -translate-y-1/2 rounded-full border-2"></div>
      <div className="mb-4 h-12 w-24"></div> {/** ghost component */}
    </>
  );
}
