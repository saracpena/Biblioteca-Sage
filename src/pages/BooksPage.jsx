import { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // run code after component renders
    const getBooks = async () => {
      try {
        const response = await axios.get(`${API_URL}/books`);

        setBooks(response.data.books);
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, []);

  return (
    <section>
      <h1>Library Catalog</h1>

      <div>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}

/*
 * Homepage/Main Page
 * Retrieve all books i.e. state
 * Store the books
 * Handle loading
 * Handle errors
 * Render a collection of BookCards
 */

/* BooksPage.jsx is responsible for displaying the library catalog. 
When the page first loads, it retrieves every book from the API using Axios. 
The returned array is stored in state with useState(), allowing React to automatically 
re-render once the data arrives. BooksPage owns the catalog but delegates the display 
of each individual book to the BookCard component. */

//! REMINDER:
/*| React Concept | Simple Definition                    | Biblioteca Sage Example                |
  | ------------- | ------------------------------------ | -------------------------------------- |
  | `useState()`  | Stores information that can change.  | Store the array of books.              |
  | `useEffect()` | Runs code after a component renders. | Retrieve books when `BooksPage` loads. | */
