export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Page Heading */}
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white">
          A little bit about me
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Who I am and what I do.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Text Content */}
        <div className="md:col-span-2 space-y-10">
          <div>
            <h2 className="text-sm text-black font-bold tracking-wider mb-2">
              WHO I AM
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I'm Eihab (Pronounced “Ee-hab”) a multi-disciplinary front-end engineer and UI/UX designer based in Rabat, Morocco 🇲🇦.
            </p>
          </div>

          <div>
            <h2 className="text-sm text-black font-bold tracking-wider mb-2">
              WHAT I DO
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              With two years of invaluable experience in my role at Harmony Technology — a tech company based here in Rabat, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at Harmony Technology, I had the privilege of collaborating on projects for esteemed clients such as the Ministry of Health, Ministry of Education, and Ministry of Justice. It was an incredibly rewarding experience to develop applications that directly impact the lives of Moroccan citizens.
            </p>
          </div>

          <div>
            <h2 className="text-sm text-black font-bold tracking-wider mb-2">
              WHAT I DID
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Before delving into the realm of front end engineering, I spent five years as a graphic designer. This background has equipped me with a keen eye for aesthetics and a deep understanding of user-centered design principles. It enables me to seamlessly blend functionality and visual appeal in every project I undertake.
            </p>
          </div>

          <div className="text-gray-600 dark:text-gray-400 text-sm">
            Feel free to reach out via <a href="#" className="underline">e-mail</a>, or follow me on <a href="#" className="underline">Twitter</a>. Want to see where I’ve worked? Check out my <a href="#" className="underline">Resume</a>, or Connect with me on <a href="#" className="underline">LinkedIn</a>.
          </div>
        </div>

        {/* Right Profile Card */}
        {/* Right section with image and button */}
<div className="flex flex-col items-center justify-center gap-6 mt-6">
  {/* Profile Image */}
  <img
    src="/dark.png" // Make sure this image is in your public folder
    alt="Profile"
    className="rounded-xl w-64 h-80 object-cover bg-black"
  />

  {/* Get in Touch Button */}
  <button className="bg-black text-white px-6 py-2 rounded-md flex items-center gap-2 hover:opacity-80 transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.362 5.214l5.572 5.572a1.5 1.5 0 010 2.121l-5.572 5.572M4.5 12h16.379"
      />
    </svg>
    Get in touch
  </button>
</div>

      </div>

      {/* Signature */}
      <div className="mt-20 text-left">
        <img
          src="/Signature.png"
          alt="Eihab Khan Signature"
          className="h-24 inline-block"
        />
      </div>

    </div>
  );
}
