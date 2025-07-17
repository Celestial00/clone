export default function TechCard({ name, iconSrc, label }) {
  return (
    <div
      className="
        /* sizing */
        w-full max-w-[320px]
        sm:w-52 sm:h-48
        md:w-56 md:h-52

        /* visual */
        bg-gray-100 dark:bg-neutral-900
        rounded-2xl
        p-4
        sm:pt-12 sm:px-5 sm:pb-6  
        shadow-md mx-auto

        /* hover */
        transition-transform transition-shadow duration-200
        hover:scale-105 hover:shadow-lg

        /* layout: mobile row, sm+ column */
        flex flex-row items-center gap-4
        sm:flex-col sm:items-center sm:justify-center sm:gap-0
      "
    >
      {/* Icon */}
      <div
        className="
          w-12 h-12
          sm:w-16 sm:h-16
          md:w-20 md:h-20
          flex items-center justify-center
          shrink-0
        "
      >
        {iconSrc && (
          <img
            src={iconSrc}
            alt={name}
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {/* Text block wrapper */}
      <div
        className="
          flex-1 w-full
          sm:w-full sm:mt-8   
          flex items-center justify-between gap-2
          sm:flex-row
        "
      >
        {/* Name */}
        <span
          className="
            font-semibold
            text-sm sm:text-base
            text-[#181818] dark:text-white
            text-left
            break-words leading-tight
            flex-1 min-w-0
          "
        >
          {name}
        </span>

        {/* Label */}
        {label && (
          <span
            className="
              px-2 py-0.5
              text-[9px] sm:text-[10px]
              text-gray-600 dark:text-gray-300
              bg-gray-100 dark:bg-gray-700
              rounded-full
              shrink-0 whitespace-nowrap
            "
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
