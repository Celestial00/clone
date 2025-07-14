import React from "react";

export default function HeroSection() {
  return (
    <div className="flex  my-20">
      <div className="">
        <h1 className="text-8xl font-bold text-[var(--secondary)]">
          {" "}
          I’m <span className="text-white"> Eihab Khan</span>
        </h1>
        <p className="text-[var(--secondary)] text-3xl mt-8">
          A front-end engineer and UI/UX designer helping startups turn
          <br />
          their visions into a digital reality. I specialize in designing and
          <br />
          building modern mobile and web-based apps.
        </p>
      </div>

      <div className="">
        <svg
          className="text-[#D9D9D91A]"
          width="288"
          height="344"
          viewBox="0 0 288 344"
          fill="#D9D9D9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M144 0C64.471 0 0 64.471 0 144V328C0 336.837 21.4903 344 48 344C74.5097 344 96 336.837 96 328H96.0007C96.0007 336.837 117.491 344 144.001 344C170.421 344 191.856 336.885 192 328.089C192.144 336.885 213.579 344 239.999 344C266.509 344 287.999 336.837 287.999 328H288V144C288 64.471 223.529 0 144 0Z"
            fill="currentColor"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </div>
  );
}
