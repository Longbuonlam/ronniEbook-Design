import React from "react";
import { SearchInput } from "./SearchInput";

interface MobileMenuProps {
  showMobileMenu: boolean;
  darkMode: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleDarkMode: () => void;
  changePage: (page: string) => void;
}

export function MobileMenu({
  showMobileMenu,
  darkMode,
  searchQuery,
  setSearchQuery,
  toggleDarkMode,
  changePage,
}: MobileMenuProps) {
  if (!showMobileMenu) return null;

  return (
    <div
      className={`md:hidden border-t ${darkMode ? "border-[#2D3748]" : "border-[#E2E8F0]"}`}
    >
      <div className="px-4 py-4 space-y-4">
        <SearchInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search books, authors..."
          darkMode={darkMode}
        />
        <div className="space-y-2">
          <button
            onClick={toggleDarkMode}
            className={`flex flex-row items-center p-3 rounded-lg ${
              darkMode ? "bg-[#2D3748]" : "bg-[#F7FAFC]"
            }`}
          >
            <span
              className={`mr-3 ${darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}`}
            >
              {darkMode ? "☀️" : "🌙"}
            </span>
            <span className={darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
          <div className="space-y-1">
            <button
              className={`block px-3 py-2 rounded-lg transition-colors ${
                darkMode
                  ? "text-[#E2E8F0] hover:bg-[#2D3748]"
                  : "text-[#1A202C] hover:bg-[#F7FAFC]"
              }`}
              onClick={() => changePage("dashboard")}
            >
              <span className={darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}>
                Dashboard
              </span>
            </button>
            <button className="bg-[#4318D1] text-white px-3 py-2 rounded-lg hover:bg-[#3311B8] transition-colors">
              <span className="text-white font-medium">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
