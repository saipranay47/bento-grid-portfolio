import React from "react";

const socialData = [
  {
    name: "linkedin",
    link: "#",
  },
  {
    name: "github",
    link: "#",
  },
  {
    name: "twitter",
    link: "#",
  },
  {
    name: "instagram",
    link: "#",
  },
  {
    name: "behance",
    link: "#",
  },
  {
    name: "dribbble",
    link: "#",
  },
];
function Socials() {
  return (
    <div className="flex overflow-hidden justify-around items-center gap-x-2 gap-y-2 my-2  max-md:grid max-md:auto-cols-[1fr] max-md:gap-x-2 max-md:gap-y-2 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto]">
      {socialData.map((social) => (
        <a
          href={social.link}
          className="flex w-full min-h-[56px] justify-center items-center bg-[#131315] transition-[background-color] duration-300 ease-[ease-out] text-white text-lg leading-6 text-center tracking-[-0.01em] px-6 py-4 rounded-[99px]"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
}

export default Socials;
