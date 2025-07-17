import { bookImages } from "../data/BookShelfData";

export default function BookShelf() {
  return (
    <div className="min-h-screen px-4 sm:px-10 py-10 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-6 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#181818] dark:text-white">
            Bookshelf
          </h1>
          <p className="text-sm sm:text-base mt-1 text-gray-400">
            Books and pieces of wisdom I’ve enjoyed reading.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200 dark:border-gray-800 mb-8" />

        {/* Books Grid */}
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
          {bookImages.map((src, i) => (
            <div
              key={`book-${i}`}
              className="w-24 sm:w-28 md:w-32 lg:w-36 flex flex-col items-center group"
            >
              <div
                className="
                  w-full overflow-hidden rounded-xl shadow-lg
                  border border-black/10 dark:border-white/20
                  bg-black/5 dark:bg-white/10
                  transition-transform duration-200
                  group-hover:scale-105
                "
              >
                <img
                  src={src}
                  alt={`Book ${i + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
