import React from "react";

export default function contactSection() {
  return (
    <div className="w-full h-[300px] my-20 lg:flex-row flex-col flex justify-between items-center">
      <div className="">
        <h1 className="text-white text-5xl font-bold">Let’s work together</h1>

        <p className="text-[#80808080] text-2xl mt-4">
          Want to discuss an opportunity to create something <br /> great? I’m
          ready when you are.
        </p>
      </div>

      <div className=" flex justify-center items-center flex-row-reverse gap-2 w-full lg:w-40 h-15 bg-gradient-to-l from-[#1A1A1A] to-[#131313] rounded-xl ">
        <p className="text-white ">Get in touch</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.93367 12L3.08987 5.73239C2.60867 4.09667 4.14094 2.58539 5.75514 3.10362C10.2067 4.53274 14.4553 6.53713 18.3948 9.06662C19.5259 9.79292 21 10.4417 21 12C21 13.5583 19.5259 14.2071 18.3948 14.9334C14.4553 17.4629 10.2067 19.4673 5.75514 20.8964C4.14094 21.4146 2.60867 19.9033 3.08987 18.2676L4.93367 12ZM4.93367 12H9.83493"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
