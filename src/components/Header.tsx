"use client";

import { useScroll, animated } from "@react-spring/web";

export default function Header() {
  const { scrollY } = useScroll();

  return (
    <animated.div
      style={{
        backgroundColor: scrollY.to(
          (y) => `rgba(30, 32, 48, ${Math.min(y / 80, 0.8)})`,
        ),
        backdropFilter: scrollY.to((y) => `blur(${Math.min(y / 80, 4)}px)`),
      }}
      className="fixed top-0 z-20 h-16 w-full px-4 py-2 duration-150 lg:hidden"
    >
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
    </animated.div>
  );
}
