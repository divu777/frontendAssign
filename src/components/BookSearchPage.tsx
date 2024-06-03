import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const BookSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        if (searchQuery) {
          const response = await axios.get(
            `https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`
          );
          setSearchResults(response.data.docs);
        } else {
          setSearchResults([]);
        }
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchQuery]);

  const addToBookshelf = (book) => {
    setBookshelf([...bookshelf, book]);
    localStorage.setItem("bookshelf", JSON.stringify([...bookshelf, book]));
  };

  return (
    <div className="flex flex-col justify-center items-center overflow-y-hidden h-full">
      <h1 className="text-5xl font-semibold uppercase p-10">Book Search</h1>
      <input
        type="text"
        placeholder="Search for a book"
        className="border-gray-300 rounded-full py-4 px-6 text-gray-700 leading-tight focus:outline-none w-2/3 shadow-xl my-9 border-b-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="flex flex-wrap">
        {searchResults.map((book) => (
          <div
            key={book.key}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4"
          >
            <BookCard book={book} addToBookshelf={addToBookshelf} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
