import React, { useLayoutEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksRequest, removeBookRequest } from '../redux/books/books';
import AddBook from './AddBook';

const BookList = ()=> {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => {
    const books = state.booksReducer;
    return { books }
  })
  useLayoutEffect(() => {
    dispatch(getBooksRequest())
  }, [])
  const handleDelete = (id) => {
    dispatch(removeBookRequest({ id }))
  }
  return (
    <div className="container">
      <div>
      {books.map(book => (
        <div className="card mt-3" key={book.item_id}>
          <div className="card-body d-flex justify-content-between">
            <div>
              <p className="book-category">{book.category}</p>
              <p className="book-title" >{book.title}</p> 
              <button className="book-links">Comments</button> |
             <button onClick={() =>handleDelete(book.item_id)} className="book-links">Remove</button>  |
             <button className="book-links">Edit</button>


            </div>
            <div className="d-flex">
            <div className="arc-wrapper">
      <div className="arc arc-start" />
      <div className="arc arc-end" />
    </div>
    <div>
    <p className="book-status">64%</p>
    <p className="completed">Completed</p>
    </div>
    </div>
    <div className="Line-2" />
    <div>
      <p>Current Chapter</p>
      <p>Chapter 17</p>
      <button className= "btn outline-none btn-primary">Update Progress</button>
</div>
          </div>
        </div>
      ))}
    </div>
    < AddBook />
    </div>
  )
}

export default BookList