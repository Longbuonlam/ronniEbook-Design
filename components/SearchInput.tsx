import React from "react";

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  darkMode: boolean;
}

export function SearchInput({
  value,
  onChangeText,
  placeholder,
  darkMode,
}: SearchInputProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder={placeholder}
        className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4318D1] focus:border-transparent outline-none transition-all ${
          darkMode
            ? "bg-[#2D3748] border-[#4A5568] text-[#E2E8F0] placeholder-[#A0AEC0]"
            : "bg-white border-[#E2E8F0] text-[#1A202C] placeholder-[#718096]"
        }`}
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <span
          className={`text-lg ${darkMode ? "text-[#A0AEC0]" : "text-[#718096]"}`}
        >
          🔍
        </span>
      </div>
    </div>
  );
}
