export default function Header() {
  return (
    <div className="sticky top-0 z-20 bg-mantle/80 px-4 py-2 backdrop-blur-sm lg:hidden">
      <div className="mx-auto flex w-full max-w-lg items-center justify-between sm:max-w-xl md:max-w-2xl">
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Frog</span>
          <span className="text-sm text-blue">99 posts</span>
        </div>
        <div className="flex h-8 w-8 flex-col items-center justify-center gap-1 rounded-full hover:bg-base hover:shadow-md ">
          {Array.from({ length: 3 }, (v, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-text"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
