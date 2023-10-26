import React from "react";
import { FadeIn } from "./FadeIn";

const navlinkes = [
  {
    name: "home.",
    link: "#home",
  },
  {
    name: "work.",
    link: "#work",
  },
  {
    name: "contact.",
    link: "#contact",
  },
];
function Navbar() {
  return (
    <div>
      <FadeIn>
        <div className="flex max-w-[1240px] justify-between max-sm:justify-center items-center bg-[#131315] mx-auto px-8 py-4 max-lg:mx-2 rounded-[999px] mt-6">
          <span className="text-lg leading-6 -translate-x-[0.01em] ">
            sai pranay.
          </span>
          <div className="flex justify-end items-center gap-x-8 gap-y-8 max-md:gap-3 max-sm:hidden">
            {navlinkes.map((navlink) => (
              <a
                href={navlink.link}
                className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-[#8a8a93] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-white ${
                  navlink.link === "#home" ? "text-white" : ""
                }`}
              >
                {navlink.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center items-center sm:hidden">
          <div className="flex justify-around items-center gap-x-8 gap-y-8 max-w-[1240px]  bg-[#131315] px-8 py-4 rounded-full fixed bottom-5 mx-auto">
            {navlinkes.map((navlink) => (
              <a
                href={navlink.link}
                className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-[#8a8a93] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-white ${
                  navlink.link === "#home" ? "text-white" : ""
                }`}
              >
                {navlink.name}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Navbar;
