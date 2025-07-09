"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Hamburger } from "../Icones/Hamburger";
import JapaneseNameLogo from "../Logo/JapaneseNameLogo";
import { ThemeToggle } from "../ThemeToggle";
import { useMobileView } from "@/hooks/useMobileView";
import { useThemeMode } from "@/hooks/useThemeMode";

const navItems = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Playground",
    href: "/playground",
  },
];

const Navbar = () => {
  const path = usePathname();
  const isMobile = useMobileView();
  const theme = useThemeMode();
  return (
    <nav className="flex justify-between items-center py-4 px-4 min-md:px-50 w-full transition-colors bg-background text-foreground">
      <div className="flex items-center hover:cursor-pointer  ">
        <JapaneseNameLogo
          size={90}
          color={theme === "dark" ? "white" : "black"}
          glowOnHover
        />
      </div>
      <div className=" flex items-center gap-4 justify-center">
        {isMobile ? (
          <Hamburger isOpen={false} />
        ) : (
          <>
            <nav className="hidden gap-1 px-1 py-5 md:flex">
              {navItems.map(({ name, href }) => (
                <div key={name + href}>
                  <Link
                    className={`relative w-fit overflow-hidden rounded-full px-3 py-2 opacity-50 transition-all ${
                      path === href ? "" : "hover:opacity-100"
                    }`}
                    href={href}
                  >
                    <span className="relative z-10 font-semibold ">{name}</span>
                  </Link>
                </div>
              ))}
            </nav>
            <ThemeToggle />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
