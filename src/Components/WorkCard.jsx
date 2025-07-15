export default function WorkCard({ title, desc, img, logo, type }) {
  return (
    <div className="lg:px-10  px-7 py-4 lg:py-6 flex border border-[#EBEBEB] dark:border-[#383737] mt-10 bg-[#F6F6F6] dark:bg-[#181818] w-full h-[665px] rounded-4xl">
      <div className="flex-1 p-8 flex  flex-col justify-between">
        <div className=" flex flex-col gap-3">
          <img src={logo} alt="Logo" className="w-20 h-20 mb-4" />

          <h1 className="text-4xl text-[#181818] dark:text-white font-bold mb-3">
            {title}
          </h1>

          <p className="text-[#808080]  text-base">{desc}</p>
        </div>

        <div className="flex items-center  gap-3 text-xl text-[#181818] dark:text-white cursor-pointer ">
          <p>{type}</p>
          <svg
            className=" text-[#181818] dark:text-white "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1696 5C17.273 6.55556 19.1622 8.37278 20.7905 10.4057C20.9302 10.5801 21 10.79 21 11M15.1696 17C17.273 15.4444 19.1622 13.6272 20.7905 11.5943C20.9302 11.4199 21 11.21 21 11M21 11L3 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className=" hidden  flex-1 md:flex items-center justify-center">
        <div className="w-[500px] h-[650px] overflow-hidden flex items-center justify-center">
          <img
            src={img}
            alt="Phone"
            className="object-contain max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
}
