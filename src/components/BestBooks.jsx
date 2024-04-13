import Carousel from "react-bootstrap/Carousel";
import genZHistoryMakingTime from "../assets/genZ-history-making-time.jpg";
import BookModal from "./BookModal";
import { useState, useEffect } from "react";
import { When } from "react-if";
// import UpdateFormBook from "./UpdateFormBook";
import axios from "axios";
import AddBook from "./AddBook";

function BestBooks() {
  // const [openAddBook, setOpenAddBook] = useState(false);
  const [openUpdateBook, setOpenUpdateBook] = useState(false);
  // change openUpdateBook to false when its working
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [books, setBooks] = useState([]);
  const [booksData, setBooksData] = useState ({});
  const [openNewBookModal, setOpenNewBookModal] =useState(false);



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

  // function handleChange(event) {
  //   setBooksData({
  //     ...booksData,
  //     [event.target.name]: value
  //   });
  // }

  function handleSubmit(event) {
    console.log('event ', event);
    // event.preventDefault();
    // addBook(booksData)
    setOpenNewBookModal(true);
  }

  const handleEditBook = (bookId) => {
    setSelectedBookId(bookId);
    setOpenUpdateBook(true);
  //   setSelectedBookId(bookId === selectedBookId ? null : bookId);
  //   console.log('bookId ', bookId);
  //   handleOpenUpdateBook()
  };

  const handleCloseNewBookModal = () => {
    setOpenNewBookModal(false);
  }

  const handleCloseModal = () => {
    setOpenUpdateBook(false);
  }

  function deleteThisBook(event) {
    let id = event.target.id;
    deleteBook(id);
  }

  // const handleOpenUpdateBook = (book) => {
  //   setOpenUpdateBook(true);
  // }
  
  return (
    <>

      <h2>Books</h2>

      <AddBook
      handleAddBook={addBook}
      openSesame={openNewBookModal}
      closeSesame={handleCloseNewBookModal}

      />
      <button onClick={() => handleSubmit()}>Add a book!</button>

      {/* <BookFormModal show={openAddBook} onHide={() => {
        setOpenAddBook(false);
        setSelectedBook(null)
        }} handleAddBook={props.handleAddBook}></BookFormModal> */}

      <Carousel>
        {books.map((book) => (
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
            {/* <button onClick={() => updateBook(book)}>
              Update Book!
            </button> */}
            <button onClick={() => handleEditBook(book._id)}>Edit Me</button>
            {/* find a way to show and hide the updateformbook component. When show is = true, then show the edit me button */}
            <When condition={selectedBookId === book._id}>
              {/* <UpdateFormBook
                selectedBook={book}
                handleUpdateBook={props.handleUpdateBook}
                setSelectedBookId={setSelectedBookId}
              /> */}
              <BookModal 
              book={book}
              updateBook={updateBook}
              openUpdateBook={openUpdateBook}
              handleCloseModal={handleCloseModal}
              />
            </When>
          </Carousel.Item>
        ))}
      </Carousel>

    </>
  );
}

export default BestBooks;
