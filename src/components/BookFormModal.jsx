import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function BookFormModal (props) {

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