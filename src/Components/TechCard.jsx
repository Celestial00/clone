// src/Components/TechCard.jsx
export default function TechCard({ name, iconSrc, label }) {
  return (
    <div
      className="
        w-28 h-28 sm:w-32 sm:h-32
        bg-white/70 dark:bg-white/10
        backdrop-blur-md
        border border-black/10 dark:border-white/20
        rounded-2xl
        flex flex-col items-center justify-center
        p-3 shadow-lg
        hover:scale-105 transition-transform duration-200
      "
    >
      <div
        className="
          w-12 h-12 sm:w-14 sm:h-14
          bg-black/5 dark:bg-white/20
          rounded-xl flex items-center justify-center mb-2 overflow-hidden
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
      <div className="text-center text-[#181818] dark:text-white text-xs sm:text-sm">
        <div className="font-semibold leading-tight">{name}</div>
        {label && (
          <div className="text-[10px] text-[#5C5C5C] dark:text-gray-300 leading-tight">
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
