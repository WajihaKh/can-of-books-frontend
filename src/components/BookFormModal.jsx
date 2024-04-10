import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function BookFormModal (props) {
const [bookData, setBookData] = useState({});

function handleSubmit(event) {
    event.preventDefault();
    console.log(bookData)
    props.handleAddBook(bookData);
}

function handleChange(event) {
    let value = event.target.value;
    setBookData({
      ...bookData,
      [event.target.name]: value
    });
    console.log('bookData ', bookData);
  }
return (
    <>
<Modal show={props.show} onHide={props.onHide}> 
    <Modal.Body>
<form onSubmit={handleSubmit}>
<div><input name="title" type="text" onChange={handleChange} /></div>
<div><input name="description" type="text" onChange={handleChange} /></div>
<div><input name="status" type="text" onChange={handleChange} /></div>
<button type='submit'>Add A Book</button>
</form>
</Modal.Body>
</Modal>
</>
)
}

export default BookFormModal;