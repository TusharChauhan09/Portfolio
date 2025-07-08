"use client";
import Link from "next/link";

import { Hamburger } from "../Icones/Hamburger";
import { ThemeToggle } from "../ThemeToggle";
import { useMobileView } from "@/hooks/useMobileView";

const navItems = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Playground",
    href: "/playground",
  },
  {
    name: "blog",
    href: "/blog",
  },
];

const Navbar = () => {
  const isMobile = useMobileView();
  return (
    <div className="flex justify-between items-center p-4 w-full">
      <div className="flex items-center gap-4">Logo</div>
      <div className=" flex items-center gap-2 justify-center">
        {isMobile ? (
          <Hamburger isOpen={false} />
        ) : (
          <>
            {navItems.map((item) => (
              <Link href={item.href} key={item.name}>
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
