

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] pt-16 md:pt-24 pb-8 md:pb-10 px-2 bg-white dark:bg-[#0d0d0d]">
      <div className="w-full">
        <div className="pl-4 md:pl-8 lg:pl-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white text-left mb-2 mt-6 md:mt-8">Get in touch</h1>
          <p className="text-[#808080] text-base sm:text-lg md:text-xl text-left mb-6 md:mb-10">Let's build something awesome.</p>
        </div>
        <div className="bg-white dark:bg-[#232323] rounded-xl shadow-[0_2px_24px_0_rgba(0,0,0,0.08)] dark:shadow-[0_2px_24px_0_rgba(0,0,0,0.25)] p-4 sm:p-6 md:p-8 lg:p-12 border border-[#ededed] dark:border-[#353535] flex flex-col items-center transition-all w-full">
          <div className="flex items-center mb-6 md:mb-8 w-full">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="flex-1 text-center text-black dark:text-white text-xs sm:text-sm font-medium">New message</span>
          </div>
          <form className="flex flex-col gap-4 sm:gap-6 w-full">
            <label className="text-black dark:text-white text-sm sm:text-base font-bold flex flex-col">
              <span>Email:</span>
              <input type="email" placeholder="Enter your email address" className="bg-transparent dark:bg-transparent border-0 border-b border-[#ededed] dark:border-[#353535] focus:outline-none w-full text-black dark:text-white placeholder-[#bdbdbd] dark:placeholder-[#808080] py-2 font-normal" />
            </label>
            <label className="text-black dark:text-white text-sm sm:text-base font-bold flex flex-col">
              <span>Name:</span>
              <input type="text" placeholder="Enter your name" className="bg-transparent dark:bg-transparent border-0 border-b border-[#ededed] dark:border-[#353535] focus:outline-none w-full text-black dark:text-white placeholder-[#bdbdbd] dark:placeholder-[#808080] py-2 font-normal" />
            </label>
            <label className="text-black dark:text-white text-sm sm:text-base font-bold flex flex-col">
              <span>Subject:</span>
              <input type="text" placeholder="Enter subject" className="bg-transparent dark:bg-transparent border-0 border-b border-[#ededed] dark:border-[#353535] focus:outline-none w-full text-black dark:text-white placeholder-[#bdbdbd] dark:placeholder-[#808080] py-2 font-normal" />
            </label>
            <textarea placeholder="Write your message here" className="bg-[#fafafa] dark:bg-[#18181d] border border-[#ededed] dark:border-[#232323] rounded-lg text-black dark:text-white placeholder-[#bdbdbd] dark:placeholder-[#808080] p-4 sm:p-5 min-h-[120px] sm:min-h-[180px] mt-2 focus:outline-none resize-none text-sm sm:text-base" />
            <div className="flex justify-end mt-2">
              <button type="button" className="bg-black dark:bg-[#232323] border border-[#ededed] dark:border-[#353535] text-white w-full md:w-auto px-6 sm:px-8 py-2 rounded-lg shadow-md hover:bg-[#222] dark:hover:bg-[#282828] transition font-semibold text-sm sm:text-base mt-2">Send</button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-4 md:flex md:flex-row justify-center gap-y-6 gap-x-6 sm:gap-x-8 mt-8 sm:mt-12 w-full max-w-xl mx-auto">
          {/* Social Icons */}
          <a href="#" className="text-[#808080] dark:text-[#C5C5C5] hover:text-black dark:hover:text-white flex justify-center"><i className="fas fa-envelope text-2xl sm:text-3xl"></i></a>
          <a href="#" className="text-[#808080] dark:text-[#C5C5C5] hover:text-black dark:hover:text-white flex justify-center"><i className="fas fa-book text-2xl sm:text-3xl"></i></a>
          <a href="#" className="text-[#808080] dark:text-[#C5C5C5] hover:text-black dark:hover:text-white flex justify-center"><i className="fab fa-linkedin text-2xl sm:text-3xl"></i></a>
          <a href="#" className="text-[#808080] dark:text-[#C5C5C5] hover:text-black dark:hover:text-white flex justify-center"><i className="fab fa-twitter text-2xl sm:text-3xl"></i></a>
          <a href="#" className="text-[#808080] dark:text-[#C5C5C5] hover:text-black dark:hover:text-white flex justify-center"><i className="fab fa-github text-2xl sm:text-3xl"></i></a>
          <a href="#" className="text-[#808080] dark:text-[#C5C5C5] hover:text-black dark:hover:text-white flex justify-center"><i className="fab fa-discord text-2xl sm:text-3xl"></i></a>
          <a href="#" className="text-[#808080] dark:text-[#C5C5C5] hover:text-black dark:hover:text-white flex justify-center"><i className="fab fa-behance text-2xl sm:text-3xl"></i></a>
          <a href="#" className="text-[#808080] dark:text-[#C5C5C5] hover:text-black dark:hover:text-white flex justify-center"><i className="fab fa-dribbble text-2xl sm:text-3xl"></i></a>
        </div>
      </div>
    </div>
  );
}
