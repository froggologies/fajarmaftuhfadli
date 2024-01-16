export default function Home() {
  return (
    <main className="">
      <div className="mx-auto flex max-w-5xl flex-col gap-20 px-6 py-14 lg:flex-row lg:gap-10">
        <div className="lg:w-1/2">
          <Hero />
        </div>
        <div className="flex flex-col gap-20 lg:w-1/2">
          <About />
          <Experience />
        </div>
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="flex flex-col gap-10 text-slate-800">
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
    </section>
  );
}

function About() {
  return (
    <section>
      <h2 className="text-3xl font-semibold">About</h2>
      <p>
        Labore reiciendis, perferendis tempore earum explicabo porro voluptas
        eveniet accusantium?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum
        natus iure consectetur dolorum odio explicabo tenetur temporibus
        exercitationem optio! Nostrum aut numquam sint reiciendis laborum saepe
        maiores culpa pariatur?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        laboriosam nostrum corrupti beatae.
      </p>
    </section>
  );
}

function Experience() {
  return (
    <section>
      <h2 className="text-3xl font-semibold">Experience</h2>
      <ul>
        <li>
          <h3>Job 1</h3>
          <p>Sep 2022 - Present</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
      </ul>
    </section>
  );
}
