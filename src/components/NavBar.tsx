"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState, useRef } from "react";

import IconArrowRight from "./icons/arrow-right";
import IconArrowLeft from "./icons/arrow-left";

export default function NavBar() {
  const pathname = usePathname();

  const pathlist = [
    {
      path: "/",
      name: "Posts",
    },
    {
      path: "/experience",
      name: "Experience",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/certificates",
      name: "Certificates",
    },
    {
      path: "/links",
      name: "Links",
    },
  ];

  const scrollX = useRef<HTMLUListElement>(null);
  const [disableLeftButton, setDisableLeftButton] = useState(true);
  const [disableRightButton, setDisableRightButton] = useState(false);

  const handleHorizantalScroll = (
    element: HTMLUListElement,
    speed: number,
    distance: number,
    step: number,
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);

      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }

      if (element.scrollLeft === 0) setDisableLeftButton(true);
      else setDisableLeftButton(false);

      const isAtMaxRight =
        element.scrollLeft + element.clientWidth === element.scrollWidth;

      if (isAtMaxRight) setDisableRightButton(true);
      else setDisableRightButton(false);
    }, speed);
  };

  const ArrowButton = ({
    children,
    disabled,
    direction = "left",
  }: {
    children: React.ReactNode;
    disabled: boolean;
    direction: "left" | "right";
  }) => (
    <button
      onClick={() => {
        handleHorizantalScroll(
          scrollX.current!,
          25,
          50,
          direction === "left" ? -10 : 10,
        );
      }}
      disabled={disabled}
      className={clsx(
        "absolute top-1/2 h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-mantle leading-none tracking-tighter opacity-0 shadow-md transition-opacity hover:cursor-pointer hover:bg-base disabled:bg-slate-500 group-hover:opacity-100",
        {
          "right-0": direction == "right",
          "left-0": direction == "left",
          hidden: disabled,
          flex: !disabled,
        },
      )}
    >
      {children}
    </button>
  );

  return (
    <nav className="#pt-4 #top-12 group sticky top-16 z-10 w-full overflow-hidden border-b-[1px] border-b-overlay0/50 bg-mantle sm:px-10 md:px-16 lg:px-0">
      <ul
        ref={scrollX}
        className="hide-scroll mx-auto flex w-full max-w-lg overflow-x-scroll font-semibold text-overlay0 sm:max-w-xl md:max-w-2xl"
      >
        {pathlist.map((item) => (
          <li
            key={item.path}
            className={clsx(
              "w-full cursor-pointer rounded-sm p-4 text-center transition-colors hover:bg-base",
              {
                "text-text": pathname === item.path,
                "text-overlay0 hover:text-text": pathname !== item.path,
              },
            )}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <ArrowButton disabled={disableLeftButton} direction="left">
        <IconArrowLeft className="h-5 w-5" />
      </ArrowButton>
      <ArrowButton disabled={disableRightButton} direction="right">
        <IconArrowRight className="h-5 w-5" />
      </ArrowButton>
    </nav>
  );
}
