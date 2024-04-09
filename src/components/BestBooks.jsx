function BestBooks(props) {

return (
    <>
    <h2>Books</h2>
    <section>
        {props.books.map(book => 
            <div key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>Status: {book.status}</p>
            </div>
            )
            }
    </section>
    </>
)

}


export default BestBooks;