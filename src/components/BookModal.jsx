import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function BookModal (props) {

const [book, setBook] = useState (props.book || {} );

function handleChange(event) {
let value = event.target.value;
let name = event.target.name;
setBook ({ ...book, [name]: value });
}

function handleSubmit(event) {
    event.preventDefault();
    props.updateBook(book);
}


return (
    <>
<Modal show={props.openUpdateBook} onClose={props.handleCloseModal}> 
    <Modal.Body>
<form onSubmit={handleSubmit}>
<div><input name="title" type="text" value={book.title} onChange={handleChange} /></div>
<div><input name="description" type="text" value={book.description} onChange={handleChange} /></div>
<div><input name="status" type="text" value={book.status} onChange={handleChange} /></div>
<button type='submit'>Submit</button>
</form>
</Modal.Body>
</Modal>
</>
)
}

export default BookModal;