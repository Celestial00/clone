import React from "react";

export default function KnowSection() {
  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-bold dark:text-white text-black mt-20 mb-8">
        Get To Know Me
      </h1>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Card 1 */}
        <div className="dark:bg-[#151515] bg-[#F6F6F6] rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-4 items-center text-center mb-6">
            <h1 className="font-bold dark:text-white text-[#181818] text-4xl">
              About Me
            </h1>
            <p className="text-[var(--secondary)]">Who am I, what I do</p>
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              src="aboutme.png"
              className="w-[200px] h-auto"
              alt="About Me"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="dark:bg-[#151515] bg-[#F6F6F6] rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-4 items-center text-center mb-6">
            <h1 className="font-bold dark:text-white text-[#181818] text-4xl">
              Notebook
            </h1>
            <p className="text-[var(--secondary)]">
              My thoughts, insights, and reflections
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              src="Notebook.png"
              className="w-[500px] h-[300px]"
              alt="Notebook"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="dark:bg-[#151515] bg-[#F6F6F6] rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-4 items-center text-center mb-6">
            <h1 className="font-bold dark:text-white text-[#181818] text-4xl">
              Book Shelf
            </h1>
            <p className="text-[var(--secondary)]">
              Books and pieces of wisdom I’ve enjoyed reading
            </p>
          </div>
          <div className="w-full mt-5 flex justify-center items-center">
            <img src="books.png" className="w-full h-[300px]" alt="Hobbies" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="dark:bg-[#151515] bg-[#F6F6F6] rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-4 items-center text-center mb-6">
            <h1 className="font-bold dark:text-white text-[#181818] text-4xl">
              Tech Stack
            </h1>
            <p className="text-[var(--secondary)]">The dev tools, apps, devices, and games I use and play.</p>
          </div>
          <div className="w-full flex justify-center items-center">
            <img src="techstack.png" className="w-full h-[300px]" alt="Goals" />
          </div>
        </div>
      </div>
    </>
  );
}
