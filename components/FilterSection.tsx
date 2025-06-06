import React from "react";

interface FilterSectionProps {
  darkMode: boolean;
  genres: string[];
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
}

export function FilterSection({
  darkMode,
  genres,
  selectedGenre,
  setSelectedGenre,
}: FilterSectionProps) {
  return (
    <div
      className={`p-6 rounded-lg ${darkMode ? "bg-[#2D3748]" : "bg-white"} shadow-lg`}
    >
      <h3
        className={`text-xl font-bold mb-6 ${darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}`}
      >
        Filters
      </h3>

      <div className="mb-6">
        <h4
          className={`text-lg font-semibold mb-3 ${darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}`}
        >
          Genre
        </h4>
        <div className="space-y-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`flex flex-row items-center p-2 rounded-lg transition-colors w-full text-left ${
                selectedGenre === genre
                  ? "bg-[#4318D1] text-white"
                  : darkMode
                    ? "hover:bg-[#4A5568] text-[#E2E8F0]"
                    : "hover:bg-[#F7FAFC] text-[#1A202C]"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  selectedGenre === genre
                    ? "bg-white border-white"
                    : darkMode
                      ? "border-[#A0AEC0]"
                      : "border-[#718096]"
                }`}
              />
              <span
                className={
                  selectedGenre === genre
                    ? "text-white"
                    : darkMode
                      ? "text-[#E2E8F0]"
                      : "text-[#1A202C]"
                }
              >
                {genre}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4
          className={`text-lg font-semibold mb-3 ${darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}`}
        >
          Rating
        </h4>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              className={`flex flex-row items-center p-2 rounded-lg transition-colors w-full text-left ${
                darkMode ? "hover:bg-[#4A5568]" : "hover:bg-[#F7FAFC]"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  darkMode ? "border-[#A0AEC0]" : "border-[#718096]"
                }`}
              />
              <div className="flex flex-row items-center">
                {[...Array(rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 mr-1">
                    ⭐
                  </span>
                ))}
                <span
                  className={`ml-2 ${darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}`}
                >
                  {rating} & up
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
