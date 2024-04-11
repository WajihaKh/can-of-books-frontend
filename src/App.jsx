import React, { useState, useEffect } from "react";
import axios from "axios";
import BestBooks from "./components/BestBooks";
import UpdateFormBook from "./components/UpdateFormBook";
import {When} from 'react-if';
// import './App.css'

function App() {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    try {
      const response = await axios.get(
        "https://can-of-books-backend-z3vl.onrender.com/books"
      );
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteBook(id) {
    console.log("bookToBeDeleted ", id);
    try {
      const response = await axios.delete(
        `https://can-of-books-backend-z3vl.onrender.com/books/${id}`
      );
      console.log("books._id", books._id);
      let deletedBook = response.data;
      console.log("deletedBook ", deletedBook);

      let newBookList = books.filter(function (bookObj) {
        return bookObj._id !== deletedBook._id;
      });
      setBooks(newBookList);
    } catch (error) {
      console.error(error);
    }
  }

  async function addBook(book) {
    try {
      let response = await axios.post(
        "https://can-of-books-backend-z3vl.onrender.com/books",
        book
      );
      let newBookList = response.data;
      setBooks([...books, newBookList]);
    } catch (error) {
      console.error(error);
    }
  }

  async function updateBook(updatedBook) {
    console.log('updatedBook ', updatedBook);
    // setSelectedBook(updatedBook);
    try {
      const response = await axios.put(
        `https://can-of-books-backend-z3vl.onrender.com/books/${updatedBook._id}`,
        updatedBook
      );
      const updateBook = response.data;
      const updatedBookList = books.map((b) =>
        b._id === updateBook._id ? updateBook : b
      );
      setBooks(updatedBookList);
    } catch (error) {
      console.error(error);
    }
  }
  console.log('books ', books);
  return (
    <>
      <BestBooks
        handleAddBook={addBook}
        handleUpdateBook={updateBook}
        handleDelete={deleteBook}
        books={books}
      />
      {/* <UpdateFormBook
      selectedBook={selectedBook}
      /> */}
      {/* <section>
        {books.map(book =>
        <div key={book._id}>
         {/* <h2>{book.title}</h2>
         <p>description: {book.description}</p>
         <p>status: {book.status}</p> */}
         {/* <button onClick={ () => setSelectedBook(book._id) }>Edit Me</button>
         <When condition={selectedBook === book._id}>
           <UpdateFormBook book={book} updateBook={updateBook} />
         </When>
         </div>
        )}
      </section> */} 
      {/* } */}
    </>
  );
}

export default App;
