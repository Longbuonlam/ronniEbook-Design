import React from "react";

interface GenreSectionProps {
  darkMode: boolean;
  genres: string[];
  filterByGenre: (genre: string) => void;
}

const genreColors = [
  "bg-[#4318D1]",
  "bg-[#7C3AED]",
  "bg-[#EC4899]",
  "bg-[#10B981]",
  "bg-[#F59E0B]",
  "bg-[#EF4444]",
  "bg-[#06B6D4]",
  "bg-[#8B5CF6]",
  "bg-[#F97316]",
];

export function GenreSection({
  darkMode,
  genres,
  filterByGenre,
}: GenreSectionProps) {
  return (
    <div
      className={`py-16 px-4 ${darkMode ? "bg-[#1A1B3A]" : "bg-[#F7FAFC]"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold mb-4 ${darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}`}
          >
            Browse by Genre
          </h2>
          <p
            className={`text-lg ${darkMode ? "text-[#A0AEC0]" : "text-[#718096]"}`}
          >
            Find your favorite type of story
          </p>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4">
          {genres.map((genre, index) => (
            <button
              key={genre}
              onClick={() => filterByGenre(genre)}
              className={`${genreColors[index % genreColors.length]} text-white p-6 rounded-lg hover:scale-105 transition-transform duration-300 min-w-[200px] flex-shrink-0`}
            >
              <div className="text-center">
                <span className="text-2xl mb-2 block">📚</span>
                <h3 className="text-xl font-bold text-white">{genre}</h3>
                <p className="text-white/80 text-sm mt-2">
                  Explore {genre.toLowerCase()} books
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
