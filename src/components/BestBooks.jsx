import Carousel from 'react-bootstrap/Carousel';
import genZHistoryMakingTime from '../assets/genZ-history-making-time.jpg';
import BookFormModal from './BookFormModal';
import React, { useState } from 'react';

function BestBooks(props) {

const [openAddBook, setOpenAddBook] = useState (false);

    async function deleteThisBook (event) {
        let id = event.target.id;
        props.handleDelete(id);
    }

    const handleOpenAddBook = () => {
        setOpenAddBook (true);
    }
return (
    <>
    <h2>Books</h2>
   
    <button onClick={() => setOpenAddBook(true)}>Add a book!</button>

    <BookFormModal show={openAddBook} onHide={() => setOpenAddBook(false)} handleAddBook={props.handleAddBook}></BookFormModal>

        <Carousel>
        {props.books.map(book => 
            <Carousel.Item key={book._id}>
                <img
                    className='d-block w-100'
                    src={genZHistoryMakingTime}
                    alt={book.title}
                    style={{height: '320px'}}
                    />
                    <Carousel.Caption>
                        <h2>{book.title}</h2>
                        <p>{book.description}</p>
                        <p>Status: {book.status}</p>
                    </Carousel.Caption>
            <button id={book._id}
            onClick={deleteThisBook}>
            Delete a book!
            </button>
            </Carousel.Item>

            )}
        </Carousel>
    </>
)

}


export default BestBooks;