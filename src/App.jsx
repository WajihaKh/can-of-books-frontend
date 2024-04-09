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
            const response = await axios.get('http://localhost:3000/books');
            setBooks(response.data);
           
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
