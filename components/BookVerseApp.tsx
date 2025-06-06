import React, { useState } from "react";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";
import { HeroSection } from "./HeroSection";
import { BookGrid } from "./BookGrid";
import { GenreSection } from "./GenreSection";
import { BookListPage } from "./BookListPage";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  cover: string;
  description: string;
}

interface FeaturedBook {
  id: number;
  title: string;
  author: string;
  cover: string;
}

export default function BookVerseApp() {
  const [currentPage, setCurrentPage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [totalChapters] = useState(12);
  const [showFilters, setShowFilters] = useState(false);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [userBooks, setUserBooks] = useState<Book[]>([]);
  const [readingHistory, setReadingHistory] = useState<Book[]>([]);

  const books: Book[] = [
    {
      id: 1,
      title: "The Digital Frontier",
      author: "Sarah Chen",
      genre: "Sci-Fi",
      rating: 4.8,
      cover: "https://placehold.co/300x400/4318D1/white?text=Book+1",
      description:
        "A thrilling journey through the digital landscape of tomorrow, where reality and virtual worlds collide in unexpected ways.",
    },
    {
      id: 2,
      title: "Midnight Chronicles",
      author: "James Morrison",
      genre: "Mystery",
      rating: 4.6,
      cover: "https://placehold.co/300x400/7C3AED/white?text=Book+2",
      description:
        "Dark secrets unfold in this gripping mystery that will keep you guessing until the very last page.",
    },
    {
      id: 3,
      title: "Ocean's Heart",
      author: "Maria Rodriguez",
      genre: "Romance",
      rating: 4.9,
      cover: "https://placehold.co/300x400/EC4899/white?text=Book+3",
      description:
        "A passionate love story set against the backdrop of the Mediterranean coast.",
    },
    {
      id: 4,
      title: "The Last Kingdom",
      author: "Robert Taylor",
      genre: "Fantasy",
      rating: 4.7,
      cover: "https://placehold.co/300x400/10B981/white?text=Book+4",
      description:
        "Epic fantasy adventure in a world where magic and politics intertwine.",
    },
    {
      id: 5,
      title: "Code Breakers",
      author: "Lisa Wang",
      genre: "Thriller",
      rating: 4.5,
      cover: "https://placehold.co/300x400/F59E0B/white?text=Book+5",
      description:
        "High-stakes cyber thriller that explores the dark side of technology.",
    },
    {
      id: 6,
      title: "Silent Echoes",
      author: "David Kim",
      genre: "Drama",
      rating: 4.4,
      cover: "https://placehold.co/300x400/EF4444/white?text=Book+6",
      description: "A powerful story of family, loss, and redemption.",
    },
  ];

  const genres = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Fantasy",
    "Thriller",
    "Biography",
    "History",
  ];

  const featuredBooks: FeaturedBook[] = [
    {
      id: 1,
      title: "The Digital Frontier",
      author: "Sarah Chen",
      cover: "https://placehold.co/400x500/4318D1/white?text=Featured+1",
    },
    {
      id: 2,
      title: "Midnight Chronicles",
      author: "James Morrison",
      cover: "https://placehold.co/400x500/7C3AED/white?text=Featured+2",
    },
    {
      id: 3,
      title: "Ocean's Heart",
      author: "Maria Rodriguez",
      cover: "https://placehold.co/400x500/EC4899/white?text=Featured+3",
    },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changePage = (page: string) => {
    setCurrentPage(page);
    setShowMobileMenu(false);
  };

  const nextFeatured = () => {
    setCurrentBookIndex((currentBookIndex + 1) % featuredBooks.length);
  };

  const prevFeatured = () => {
    setCurrentBookIndex(
      currentBookIndex === 0 ? featuredBooks.length - 1 : currentBookIndex - 1,
    );
  };

  const selectBook = (book: Book) => {
    setSelectedBook(book);
    setCurrentPage("bookDetail");
  };

  const startReading = (book: Book) => {
    setSelectedBook(book);
    setCurrentPage("reader");
  };

  const addToFavorites = (book: Book) => {
    if (!userBooks.find((b) => b.id === book.id)) {
      setUserBooks([...userBooks, book]);
    }
  };

  const increaseFontSize = () => {
    if (fontSize < 24) setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) setFontSize(fontSize - 2);
  };

  const nextChapter = () => {
    if (currentChapter < totalChapters) setCurrentChapter(currentChapter + 1);
  };

  const prevChapter = () => {
    if (currentChapter > 1) setCurrentChapter(currentChapter - 1);
  };

  const filterByGenre = (genre: string) => {
    setSelectedGenre(genre);
    setCurrentPage("bookList");
  };

  const getFilteredBooks = () => {
    if (selectedGenre === "" || selectedGenre === "All") return books;
    return books.filter((book) => book.genre === selectedGenre);
  };

  return (
    <div className={`flex-1 min-h-screen ${darkMode ? "bg-[#0F0F23]" : "bg-[#FAFAFA]"}`}>
      <Header
        darkMode={darkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleDarkMode={toggleDarkMode}
        changePage={changePage}
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />

      <MobileMenu
        showMobileMenu={showMobileMenu}
        darkMode={darkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleDarkMode={toggleDarkMode}
        changePage={changePage}
      />

      <div className="flex-1">
        {currentPage === "home" && (
          <div>
            <HeroSection
              darkMode={darkMode}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              featuredBooks={featuredBooks}
              currentBookIndex={currentBookIndex}
              nextFeatured={nextFeatured}
              prevFeatured={prevFeatured}
            />

            <div className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2
                    className={`text-3xl font-bold mb-4 ${darkMode ? "text-[#E2E8F0]" : "text-[#1A202C]"}`}
                  >
                    Top Picks for You
                  </h2>
                  <p
                    className={`text-lg ${darkMode ? "text-[#A0AEC0]" : "text-[#718096]"}`}
                  >
                    Curated selection of the most popular books
                  </p>
                </div>
                <BookGrid
                  books={books}
                  darkMode={darkMode}
                  selectBook={selectBook}
                />
              </div>
            </div>

            <GenreSection
              darkMode={darkMode}
              genres={genres.slice(1)}
              filterByGenre={filterByGenre}
            />
          </div>
        )}

        {currentPage === "bookList" && (
          <BookListPage
            darkMode={darkMode}
            selectedGenre={selectedGenre}
            genres={genres}
            books={getFilteredBooks()}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            selectBook={selectBook}
            setSelectedGenre={setSelectedGenre}
          />
        )}
      </div>
    </div>
  );
}
