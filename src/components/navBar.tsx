"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import navigations from "@/data/navigation";

const navBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <nav className="bg-iesc-lightYellow-50 text-iesc-darkBrown-100 fixed z-50 w-full shadow-md">
      <div className="relative flex items-center justify-end px-6 py-4 md:px-9">
        <div className="font-iesc-beVietnam hidden gap-6 text-xl md:flex">
          {navigations.map(({ name, link }, index) => (
            <Link
              key={index}
              href={link}
              className={`${
                path === link ? "text-iesc-red-100" : "hover:text-iesc-red-100"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-2 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`bg-iesc-darkBrown-100 block h-1 w-6 transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`bg-iesc-darkBrown-100 block h-1 w-6 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`bg-iesc-darkBrown-100 block h-1 w-6 transition-transform duration-300 ${isOpen ? "-translate-y-4 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0, y: -6 }}
        animate={
          isOpen
            ? { height: "auto", opacity: 1, y: 0 }
            : { height: 0, opacity: 0, y: -6 }
        }
        className="border-iesc-lightGray-50 bg-iesc-lightYellow-50 absolute top-full left-0 w-full overflow-hidden border-t shadow-lg md:hidden"
      >
        <div className="font-iesc-beVietnam flex flex-col">
          {navigations.map(({ name, link }, index) => (
            <Link
              key={index}
              href={link}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-center text-lg transition-colors ${
                index > 0 ? "border-iesc-lightGray-50 border-t" : ""
              } ${path === link ? "text-iesc-red-100" : "hover:text-iesc-red-100"}`}
            >
              {name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default navBar;
