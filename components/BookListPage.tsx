import React from "react";
import { BookGrid } from "./BookGrid";
import { FilterSection } from "./FilterSection";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  cover: string;
  description: string;
}

interface BookListPageProps {
  darkMode: boolean;
  selectedGenre: string;
  genres: string[];
  books: Book[];
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  selectBook: (book: Book) => void;
  setSelectedGenre: (genre: string) => void;
}

export function BookListPage({
  darkMode,
  selectedGenre,
  genres,
  books,
  showFilters,
  setShowFilters,
  selectBook,
  setSelectedGenre,
}: BookListPageProps) {
  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSection
              darkMode={darkMode}
              genres={genres}
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
            />
          </div>

          <div className="lg:w-3/4">
            <div className="flex flex-row items-center justify-between mb-8">
              <h2
                className={`text-2xl font-bold ${darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}`}
              >
                {selectedGenre === "" || selectedGenre === "All"
                  ? "All Books"
                  : `${selectedGenre} Books`}
              </h2>
              <div className="flex flex-row items-center space-x-4">
                <div className="relative">
                  <button
                    className={`px-4 py-2 border rounded-lg flex flex-row items-center ${
                      darkMode
                        ? "bg-[#2D3748] border-[#4A5568] text-[#E2E8F0]"
                        : "bg-white border-[#E2E8F0] text-[#1A202C]"
                    }`}
                  >
                    <span
                      className={darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}
                    >
                      Sort by Popularity
                    </span>
                    <span
                      className={`ml-2 ${darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}`}
                    >
                      ▼
                    </span>
                  </button>
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`lg:hidden px-4 py-2 border rounded-lg ${
                    darkMode
                      ? "bg-[#2D3748] border-[#4A5568] text-[#E2E8F0]"
                      : "bg-white border-[#E2E8F0] text-[#1A202C]"
                  }`}
                >
                  <span
                    className={darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}
                  >
                    Filters
                  </span>
                </button>
              </div>
            </div>

            <BookGrid
              books={books}
              darkMode={darkMode}
              selectBook={selectBook}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
