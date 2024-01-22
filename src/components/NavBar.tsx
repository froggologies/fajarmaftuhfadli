"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";

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
  ];

  return (
    <nav className="sticky top-16 overflow-hidden border-b-[1px] border-b-overlay0 bg-mantle px-4">
      <ul className="hide-scroll flex w-full overflow-x-scroll text-lg font-semibold text-overlay0">
        {/** TODO: add icon for each item bellow */}
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
    </nav>
  );
}
