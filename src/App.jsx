import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BestBooks from './components/BestBooks';
// import './App.css'

function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);
    
    async function getBooks() {
        try{
            const response = await axios.get('https://can-of-books-backend-z3vl.onrender.com/books');
            setBooks(response.data);
           
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteBook(id) {
        console.log('bookToBeDeleted ', id);
        try {
            const response = await axios.delete(`https://can-of-books-backend-z3vl.onrender.com/books/${id}`);
            console.log('books._id', books._id);
            let deletedBook = response.data;
            console.log('deletedBook ', deletedBook);

            let newBookList = books.filter( function(bookObj) {
                return bookObj._id !== deletedBook._id;
    
            });
            setBooks(newBookList);
        } catch (error) {
            console.error(error);
        }
    }

    async function addBook(book){
        try {
            let response = await axios.post ('https://can-of-books-backend-z3vl.onrender.com/books', book);
            let newBookList = response.data;
            setBooks([...books, newBookList]);
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <>
        <BestBooks handleAddBook={addBook} handleDelete={deleteBook} books= {books} />
        </>
    )
}    


export default App
