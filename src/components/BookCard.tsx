import React from "react";
interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
}
interface BookCardProps {
  book: Book;
  addToBookshelf: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, addToBookshelf }) => {
  const { title, author_name, cover_i } = book;

  return (
    <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden m-4">
      <img
        src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 truncate">{title}</h3>
        <p className="text-gray-700 mb-4 truncate">
          Author: {author_name ? author_name.join(", ") : "Unknown"}
        </p>
        <button
          onClick={() => addToBookshelf(book)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Bookshelf
        </button>
      </div>
    </div>
  );
};

export default BookCard;
