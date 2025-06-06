import React from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  cover: string;
  description: string;
}

interface BookCardProps {
  book: Book;
  darkMode: boolean;
  onPress: () => void;
}

export function BookCard({ book, darkMode, onPress }: BookCardProps) {
  return (
    <div
      onClick={onPress}
      className={`group cursor-pointer transform hover:scale-105 transition-all duration-300 ${
        darkMode ? "bg-[#1A1B3A]" : "bg-white"
      } rounded-lg shadow-lg hover:shadow-xl overflow-hidden`}
    >
      <div className="relative overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
          <div className="flex flex-row items-center">
            <span className="text-yellow-400 mr-1">⭐</span>
            <span className="text-white text-sm font-medium">
              {book.rating}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3
          className={`font-bold text-lg mb-2 line-clamp-2 ${darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}`}
        >
          {book.title}
        </h3>
        <p
          className={`text-sm mb-2 ${darkMode ? "text-[#A0AEC0]" : "text-[#718096]"}`}
        >
          by {book.author}
        </p>
        <div className="flex flex-row items-center justify-between">
          <span className="text-xs bg-[#4318D1] text-white px-2 py-1 rounded-full">
            {book.genre}
          </span>
          <span
            className={`text-xs ${darkMode ? "text-[#A0AEC0]" : "text-[#718096]"}`}
          >
            Read More →
          </span>
        </div>
      </div>
    </div>
  );
}
