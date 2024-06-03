import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const storedBookshelf = JSON.parse(localStorage.getItem("bookshelf"));
      if (storedBookshelf) {
        setBookshelf(storedBookshelf);
      }
      setLoading(false);
    } catch (error) {
      setError("Failed to load bookshelf data.");
      setLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center overflow-y-hidden h-full p-10">
      <h1 className="text-5xl font-semibold uppercase mb-10">My Bookshelf</h1>
      {loading && <p className="text-xl">Loading...</p>}
      {error && <p className="text-xl text-red-500">{error}</p>}
      <div className="flex flex-wrap w-full">
        {bookshelf.length > 0
          ? bookshelf.map((book) => (
              <div
                key={book.key}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-6"
              >
                <BookCard book={book} />
              </div>
            ))
          : !loading && <p className="text-xl">Your bookshelf is empty.</p>}
      </div>
    </div>
  );
};

export default BookshelfPage;
