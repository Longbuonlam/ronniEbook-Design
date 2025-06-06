import React from "react";
import { SearchInput } from "./SearchInput";

interface HeaderProps {
  darkMode: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleDarkMode: () => void;
  changePage: (page: string) => void;
  setShowMobileMenu: (show: boolean) => void;
  showMobileMenu: boolean;
}

export function Header({
  darkMode,
  searchQuery,
  setSearchQuery,
  toggleDarkMode,
  changePage,
  setShowMobileMenu,
  showMobileMenu,
}: HeaderProps) {
  return (
    <div
      className={`border-b ${darkMode ? "bg-[#1A1B3A] border-[#2D3748]" : "bg-white border-[#E2E8F0]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center h-16">
          <div className="flex flex-row items-center">
            <button
              onClick={() => changePage("home")}
              className="flex flex-row items-center hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#4318D1] to-[#7C3AED] rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span
                className={`text-xl font-bold ${darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}`}
              >
                BookVerse
              </span>
            </button>
            <div className="hidden md:block ml-8">
              <SearchInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search books, authors..."
                darkMode={darkMode}
              />
            </div>
          </div>

          <div className="flex flex-row items-center space-x-4">
            <div className="hidden md:flex flex-row items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode
                    ? "bg-[#2D3748] hover:bg-[#4A5568]"
                    : "bg-[#F7FAFC] hover:bg-[#EDF2F7]"
                }`}
              >
                <span
                  className={darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}
                >
                  {darkMode ? "☀️" : "🌙"}
                </span>
              </button>
              <button
                className={`px-4 py-2 rounded-lg transition-colors ${
                  darkMode
                    ? "text-[#E2E8F0] hover:bg-[#2D3748]"
                    : "text-[#1A202C] hover:bg-[#F7FAFC]"
                }`}
                onClick={() => changePage("dashboard")}
              >
                <span
                  className={darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}
                >
                  Dashboard
                </span>
              </button>
              <button className="bg-[#4318D1] text-white px-4 py-2 rounded-lg hover:bg-[#3311B8] transition-colors">
                <span className="text-white font-medium">Sign In</span>
              </button>
            </div>
            <button
              className={`md:hidden p-2 rounded-lg ${
                darkMode ? "bg-[#2D3748]" : "bg-[#F7FAFC]"
              }`}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <span className={darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}>
                ☰
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
