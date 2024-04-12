import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function AddBook (props) {

const [newBook, setNewBook] = useState ({
    title: '',
    description: '',
    status: ''
});

function handleChange(event) {

let value = event.target.value;
let name = event.target.name;

setNewBook ({ ...newBook, [name]: value });
}

function handleSubmit(event) {
    console.log('event ', event)
    event.preventDefault();
    props.handleAddBook(newBook);
    props.closeSesame();
    // props.handleAddBook(newBook);
}

return (
    <>
<Modal show={props.openSesame} onClose={props.closeSesame}> 
    <Modal.Body>
<form onSubmit={handleSubmit}>
<div><input name="title" type="text" value={newBook.title} onChange={handleChange} /></div>
<div><input name="description" type="text" value={newBook.description} onChange={handleChange} /></div>
<div><input name="status" type="text" value={newBook.status} onChange={handleChange} /></div>
<button onClick={props.closeSesame}>close</button>
</form>
</Modal.Body>
</Modal>
</>
)
}

export default AddBook;