import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function BooksPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
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

    if (isLoading) {
        return <p>Loading books...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
<section>
      <h1>Library Catalog</h1>

      <div>
        {books.map((book) => (
          <article key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </article>
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