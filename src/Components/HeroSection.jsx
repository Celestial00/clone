import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [dark, setDark] = useState(localStorage.getItem("theme"));

  return (
    <div className="   flex lg:flex-row  md:flex-col-reverse my-50">
      <div className="z-10">
        <h1 className="text-5xl font-bold  text-[var(--secondary)] lg:hidden">
          Hi 👋
        </h1>
        <h1 className=" text-5xl my-4 lg:my-0 lg:text-8xl  font-bold  text-[var(--secondary)]">
          I’m{" "}
          <span className="dark:text-white text-[#181818]"> Eihab Khan</span>
        </h1>
        <p className="text-[var(--secondary)] text-sm  lg:text-3xl  lg:my-15">
          A front-end engineer and UI/UX designer helping startups turn
          <br className=" hidden md:block " />
          their visions into a digital reality. I specialize in designing and
          <br className=" hidden md:block " />
          building modern mobile and web-based apps.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <div className=" bg-[#1A1A1A]  w-full h-15  lg:w-40 lg:h-13 rounded-lg flex justify-center items-center ">
            <p className="text-[var(--primary)]">See my resume</p>
          </div>

          <div className=" dark:bg-[#131313] bg-[#F3F3F3]  w-full h-15  lg:w-40 lg:h-13 rounded-lg flex justify-center items-center ">
            <p className="dark:text-[var(--secondary)] text-[#181818]">
              Get in touch
            </p>
          </div>
        </div>
      </div>

      <div className=" hidden lg:block -ml-40   ">
        <img
          src={` ${dark === "dark" ? "dark.png" : "light.png"} `}
          className="w-150 h-150"
        />
      </div>
    </div>
  );
}
