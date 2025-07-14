import React from "react";

export default function HeroSection() {
  return (
    <div className=" relative flex  my-50">
      <div className="z-10">
        <h1 className="text-8xl font-[800]  text-[var(--secondary)]">
          I’m <span className="text-white"> Eihab Khan</span>
        </h1>
        <p className="text-[var(--secondary)] text-3xl my-15">
          A front-end engineer and UI/UX designer helping startups turn
          <br />
          their visions into a digital reality. I specialize in designing and
          <br />
          building modern mobile and web-based apps.
        </p>

        <div className="mt-8 flex gap-4">
          <div className=" bg-[#1A1A1A]  w-40 h-13 rounded-lg flex justify-center items-center ">
            <p className="text-[var(--primary)]">See My Resume</p>
          </div>

          <div className=" bg-[#131313]  w-40 h-13 rounded-lg flex justify-center items-center ">
            <p className="text-[var(--secondary)]">See My Resume</p>
          </div>
        </div>
      </div>

      <div className=" absolute left-170  ">
        <img src="circle.png" className="w-150 h-150" />
      </div>
    </div>
  );
}
