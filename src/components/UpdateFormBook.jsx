import {useState} from 'react';


function UpdateFormBook(props) {
    const [bookData, setBookData] = useState( props.selectedBook ||{});

    function handleSubmit(event) {
        event.preventDefault();
        console.log(bookData)
        props.handleUpdateBook(bookData);
    }
    
    function handleChange(event) {
        const { name, value } = event.target;
        setBookData(prevData => ({
        ...prevData,
        [name]: value
        }));
      }

    return (
        <div>
          <h1>Edit A Book</h1>
          <form onSubmit={handleSubmit}>
            <div><input name="title" type="text" value={props.selectedBook.title} placeholder="title" onChange={handleChange} required /></div>
            <div><input name="breed" type="text" value={props.selectedBook.description} placeholder="description" onChange={handleChange} /></div>
            <div><input name="color" type="text" value={props.selectedBook.status} placeholder="status" onChange={handleChange} /></div>
            <button type="submit">Update A Book!</button>
            
          </form>
        </div>
    )
}

export default UpdateFormBook;