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
        <div
          className="
            grid
            grid-cols-3
            sm:grid-cols-4
            md:grid-cols-5
            lg:grid-cols-6
            gap-4 sm:gap-6
            justify-items-center
          "
        >
          {bookImages.map((src, i) => (
            <div
              key={`book-${i}`}
              className="w-full max-w-[6rem] sm:max-w-[7rem] md:max-w-[8rem] lg:max-w-[9rem] group"
            >
              <div
                className="
                  relative
                  w-full
                  aspect-[2/3]
                  overflow-hidden rounded-xl shadow-lg
                  border border-black/10 dark:border-white/20
                  bg-black/5 dark:bg-white/10
                  transition-transform duration-200
                  group-hover:scale-105
                  flex items-center justify-center
                "
              >
                <img
                  src={src}
                  alt={`Book ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
