import TechCard from "../Components/TechCard.jsx";
import { devAndDesign, apps, hardware, games } from "../data/TechStackData";

const Section = ({ title, data }) => (
  <div className="mb-10">
    <h2
      className="
        text-xl sm:text-2xl font-bold mb-4
        text-gray-500 dark:text-gray-400
      "
    >
      {title}
    </h2>
    <div
      className="
        grid
        grid-cols-1                 
        sm:grid-cols-2              
        md:grid-cols-3              
        lg:grid-cols-4              
        xl:grid-cols-4              
        gap-4 sm:gap-6 md:gap-6
        justify-items-center
      "
    >
      {data.map((item, index) => (
        <TechCard
          key={`${title}-${index}`}
          name={item.name}
          iconSrc={item.iconSrc}
          label={item.label}
        />
      ))}
    </div>
  </div>
);

export default function TechStack() {
  return (
    <div
      className="
        min-h-screen
        px-4 sm:px-10 py-10
        bg-white dark:bg-[#0f0f0f]
      "
    >
      <div className="max-w-5xl mx-auto">
        {/* Main Heading & Subheading */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#181818] dark:text-white">
            Tech Stack
          </h1>
          <p className="text-sm sm:text-base mt-1 text-gray-400">
            The dev tools, apps, devices, and games I use and play.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200 dark:border-gray-800 mb-8" />

        {/* Sections */}
        <Section title="Dev & Design" data={devAndDesign} />
        <Section title="Apps" data={apps} />
        <Section title="Hardware" data={hardware} />
        <Section title="Games" data={games} />
      </div>
    </div>
  );
}
