import {useState} from 'react';


function UpdateFormBook( selectedBook, handleUpdateBook, setSelectedBookId) {
    const [bookData, setBookData] = useState( selectedBook ||{});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(bookData)
        handleUpdateBook(bookData);
    }
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setBookData(prevData => ({
        ...prevData,
        [name]: value
        }));
    };
        const handleCancel = () => {
            setSelectedBookId(null);
        };
      

    return (
        <div>
          <h1>Edit A Book</h1>
          <form onSubmit={handleSubmit}>
            <div><input name="title" type="text" value={selectedBook.title} placeholder="title" onChange={handleChange} required /></div>
            <div><input name="breed" type="text" value={selectedBook.description} placeholder="description" onChange={handleChange} /></div>
            <div><input name="color" type="text" value={selectedBook.status} placeholder="status" onChange={handleChange} /></div>
            <button type="submit">Update A Book!</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            
          </form>
        </div>
    );
}

export default UpdateFormBook;