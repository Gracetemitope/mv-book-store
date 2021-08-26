import React from 'react'
import { useDispatch } from 'react-redux';
import {addBook, removeBook} from './redux/books/books';

const dispatch = useDispatch();

const submitBookToStore = () => {
  const newBook = {
      id, 
      title,
      author
  }

  dispatch(addBook(newBook));
}
const AddBook = () => {

  return (
    <div>
      <form>
        <h4 className="mt-3 text-secondary">ADD NEW BOOK</h4>
        <div className="d-flex">
      <input
        type="text"
        className="form-control ml-3"
        placeholder="Book Title"
        name="title"
      />
      <select name="category" className="form-control">
      <option value="volvo">category</option>
      <option value="saab">Biography</option>
    </select>
    <button 
    className="btn outline-none btn-primary w-25"
    onClick={submitBookToStore}>Add Book
    </button>
      </div>
      </form>
    </div>
  )
}

export default AddBook