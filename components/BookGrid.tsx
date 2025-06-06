import React from "react";
import { BookCard } from "./BookCard";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  cover: string;
  description: string;
}

interface BookGridProps {
  books: Book[];
  darkMode: boolean;
  selectBook: (book: Book) => void;
}

export function BookGrid({ books, darkMode, selectBook }: BookGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          darkMode={darkMode}
          onPress={() => selectBook(book)}
        />
      ))}
    </div>
  );
}
