import Carousel from "react-bootstrap/Carousel";
import genZHistoryMakingTime from "../assets/genZ-history-making-time.jpg";
import BookFormModal from "./BookFormModal";
import React, { useState } from "react";
import { When } from "react-if";
import UpdateFormBook from "./UpdateFormBook";

function BestBooks(props) {
  const [openAddBook, setOpenAddBook] = useState(false);
  const [openUpdateBook, setOpenUpdateBook] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleEditBook = (bookId) => {
    setSelectedBookId(bookId === selectedBookId ? null : bookId);
  };

  async function deleteThisBook(event) {
    let id = event.target.id;
    props.handleDelete(id);
  }

  const handleOpenUpdateBook = (book) => {
    setOpenUpdateBook(true);
    // setSelectedBook(book);
  }
  
  return (
    <>
      <h2>Books</h2>

      <button onClick={() => props.handleAddBook({})}>Add a book!</button>

      {/* <BookFormModal show={openAddBook} onHide={() => {
        setOpenAddBook(false);
        setSelectedBook(null)
        }} handleAddBook={props.handleAddBook}></BookFormModal> */}

      <Carousel>
        {props.books.map((book) => (
          <Carousel.Item key={book._id}>
            <img
              className="d-block w-100"
              src={genZHistoryMakingTime}
              alt={book.title}
              style={{ height: "320px" }}
            />
            <Carousel.Caption>
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              <p>Status: {book.status}</p>
            </Carousel.Caption>
            <button id={book._id} onClick={deleteThisBook}>
              Delete a book!
            </button>
            <button onClick={() => props.handleUpdateBook(book)}>
              Update Book!
            </button>
            <button onClick={() => handleEditBook(book._id)}>Edit Me</button>
            {/* find a way to show and hide the updateformbook component. When show is = true, then show the edit me button */}
            <When condition={selectedBookId === book._id}>
              <UpdateFormBook
                selectedBook={book}
                handleUpdateBook={props.handleUpdateBook}
                setSelectedBookId={setSelectedBookId}
              />
            </When>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default BestBooks;
