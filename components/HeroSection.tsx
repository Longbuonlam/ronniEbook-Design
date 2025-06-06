import React from "react";
import { SearchInput } from "./SearchInput";

interface FeaturedBook {
  id: number;
  title: string;
  author: string;
  cover: string;
}

interface HeroSectionProps {
  darkMode: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  featuredBooks: FeaturedBook[];
  currentBookIndex: number;
  nextFeatured: () => void;
  prevFeatured: () => void;
}

export function HeroSection({
  darkMode,
  searchQuery,
  setSearchQuery,
  featuredBooks,
  currentBookIndex,
  nextFeatured,
  prevFeatured,
}: HeroSectionProps) {
  return (
    <div
      className={`py-20 px-4 ${darkMode ? "bg-gradient-to-br from-[#1A1B3A] to-[#2D3748]" : "bg-gradient-to-br from-[#4318D1] to-[#7C3AED]"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Your Next Great Read
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore thousands of books and stories from authors around the
              world
            </p>
            <div className="max-w-md mx-auto lg:mx-0">
              <SearchInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search for books, authors, genres..."
                darkMode={false}
              />
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <div className="flex flex-row items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Featured Books
                </h2>
                <div className="flex flex-row space-x-2">
                  <button
                    onClick={prevFeatured}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <span className="text-white text-lg">‹</span>
                  </button>
                  <button
                    onClick={nextFeatured}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <span className="text-white text-lg">›</span>
                  </button>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex flex-row transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentBookIndex * 300}px)` }}
                >
                  {featuredBooks.map((book, index) => (
                    <div key={book.id} className="w-72 mr-4 flex-shrink-0">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="w-32 h-40 mx-auto mb-4 rounded-lg shadow-lg object-cover"
                        />
                        <h3 className="text-xl font-bold text-white mb-2">
                          {book.title}
                        </h3>
                        <p className="text-white/80">{book.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
