import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BestBooks from './components/BestBooks';
// import './App.css'

function App() {

    const [books, setBooks] = useState([]);
    // const [booksData, setBooksData] useState({});

    // function handleSubmit(event) {
    //     event.preventDefault,type === 'checkbox' ? event.target.checked : event.target.
    // }

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
        try {
            const response = await axios.delete(`http://localhost:3000/books/${id}`);
            let deletedBook = response.data;
            let newBooks = books.filter( function(book) {
                return book._id !== deletedBook._id;
            });
            setBooks(newBooks);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <BestBooks books={books} />
        </>
    )
}    


export default App
