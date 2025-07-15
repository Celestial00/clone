import React from "react";
import WorkCard from "./WorkCard";

export default function WorkSection({ page }) {
  var Projects = [
    {
      logo: "logo.png",
      title: "Subbi –– The free subscriptions manager",
      desc: "Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.",
      img: "Phone.png",
      type: "Download App",
    },

    {
      logo: "react.png",
      title: "React Documentation",
      desc: "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
      img: "tablet.png",
      type: "Visit Site",
    },

    {
      logo: "story.png",
      title: "Storybook Documentation",
      desc: "This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process.",
      img: "broswer.png",
      type: "Visite Site",
    },

    {
      logo: "parrot.png",
      title: "Parrotxt",
      desc: "Lorem Ipsum Is Not Professional, use Parrotxt to generate real text for your designThis was my first product I launched on Product Hunt",
      img: "messenger.png",
      type: "Visite Site",
    },
  ];

  return (
    <div>
      {page === true ? (
        ""
      ) : (
        <h1 className=" text-4xl lg:text-5xl font-bold dark:text-white text-black ">
          Selected Work
        </h1>
      )}

      {page === true
        ? Projects.map((pro) => (
            <WorkCard
              title={pro.title}
              desc={pro.desc}
              img={pro.img}
              logo={pro.logo}
              type={pro.type}
            />
          ))
        : Projects.slice(0, 3).map((pro) => (
            <WorkCard
              title={pro.title}
              desc={pro.desc}
              img={pro.img}
              logo={pro.logo}
              type={pro.type}
            />
          ))}

      {page === true ? (
        <div className="lg:px-10 px-7 py-4 lg:py-6 flex border border-[#EBEBEB] dark:border-[#383737] border-dashed mt-10 bg-[#F6F6F6] dark:bg-[#181818] justify-center items-center w-full h-[665px] rounded-[32px]">
          <div className="p-8 flex flex-col items-center justify-center text-center max-w-xl">
            {/* Icon placeholder */}
            <div className="mb-4">
              <svg
                width="106"
                height="106"
                viewBox="0 0 106 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.1437 65.3667V69.0104M30.1437 69.0104V72.6542M30.1437 69.0104H33.7875M30.1437 69.0104H26.5M53.2208 26.5L54.0852 33.3009C55.1758 41.8814 61.8061 48.7083 70.351 50.0491L75.0833 50.7917L70.351 51.5342C61.8061 52.875 55.1758 59.7019 54.0852 68.2824L53.2208 75.0833L52.3565 68.2824C51.2659 59.7019 44.6356 52.875 36.0906 51.5342L31.3583 50.7917L36.0906 50.0491C44.6356 48.7083 51.2659 41.8814 52.3565 33.3009L53.2208 26.5ZM33.7875 26.5L33.9687 27.6001C34.4764 30.6826 36.8924 33.0986 39.9749 33.6063L41.075 33.7875L39.9749 33.9687C36.8924 34.4764 34.4764 36.8924 33.9687 39.9749L33.7875 41.075L33.6063 39.9749C33.0986 36.8924 30.6826 34.4764 27.6001 33.9687L26.5 33.7875L27.6001 33.6063C30.6826 33.0986 33.0986 30.6826 33.6063 27.6001L33.7875 26.5Z"
                  stroke="#808080"
                  stroke-width="5.39815"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-[#181818] dark:text-white mb-2">
              YOUR PROJECT GOES HERE
            </h1>

            <p className="text-[#808080] dark:text-gray-400 text-base mb-6">
              Let’s turn your idea into a visual reality
            </p>

            <button className="bg-black text-white px-6 py-3 mt-30 rounded-md hover:bg-gray-900 transition">
              Get in touch
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
