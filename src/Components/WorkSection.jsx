import React from "react";
import WorkCard from "./WorkCard";

export default function WorkSection() {
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
  ];

  return (
    <div>
      <h1 className=" text-4xl lg:text-5xl font-bold dark:text-white text-black ">
        Selected Work
      </h1>

      {Projects.map((pro) => (
        <WorkCard
          title={pro.title}
          desc={pro.desc}
          img={pro.img}
          logo={pro.logo}
          type={pro.type}
        />
      ))}
    </div>
  );
}
