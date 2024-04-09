import Carousel from 'react-bootstrap/Carousel';
import genZHistoryMakingTime from '../assets/genZ-history-making-time.jpg';

function BestBooks(props) {
    // async function deleteTheBook (event) {

    // }

return (
    <>
    <h2>Books</h2>
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
            <button id={book._id}>
            Delete a book!
            </button>
            </Carousel.Item>

            )}
        </Carousel>
    </>
)

}


export default BestBooks;