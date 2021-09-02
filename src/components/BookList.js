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
              <p className="text-primary">{book.category}</p>
              <li >{book.title}</li> 
            </div>
            <button onClick={() =>handleDelete(book.item_id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
    < AddBook />
    </div>
  )
}

export default BookList