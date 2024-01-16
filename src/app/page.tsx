export default function Home() {
  return (
    <main className="flex flex-col gap-20 px-6 py-14">
      <section>
        <Hero />
      </section>
    </main>
  );
}

function Hero() {
  return (
    <div className="flex flex-col gap-10 text-slate-800">
      <div>
        <p className="text-2xl font-semibold">Hello, I'm</p>
        <h1 className="text-5xl font-bold">Fajar Fadli</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <ul className="font-semibold">
        <li>
          <a href="" className="group flex items-center gap-2 text-[#FF4F00]">
            <div className="h-1 w-10 bg-slate-800 group-hover:w-10"></div>About
          </a>
        </li>
        <li>
          <a href="" className="group flex items-center gap-2">
            <div className="h-1 w-5 bg-slate-800 group-hover:w-10"></div>
            Experience
          </a>
        </li>
        <li>
          <a href="" className="group flex items-center gap-2">
            <div className="h-1 w-5 bg-slate-800 group-hover:w-10"></div>Project
          </a>
        </li>
      </ul>
    </div>
  );
}
