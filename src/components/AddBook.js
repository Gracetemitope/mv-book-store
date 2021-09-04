import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBookRequest} from '../redux/books/books';
import { v4 as uuid } from 'uuid';

const AddBook = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    category: '',
  })
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const refs = {
    title: titleRef,
    category: categoryRef,
  }
  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuid(), 
      ...state,
    }
    dispatch(addBookRequest(newBook));
    setState({ title: '' });
    titleRef.current.value = '';
  }

  const handleOnChange = (e) => {
    setState((prev) => {
      prev[e.target.name] = e.target.value;
      return prev;
    });
  }
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
            ref={titleRef}
            onChange={handleOnChange}
          />
          <select name="category" ref={categoryRef} onChange={handleOnChange} className="form-control">
          <option value="Category">Category</option>
            <option value="Inspirational">Inspirational</option>
            <option value="Career">Career</option>
            <option value="Power">Power</option>
            <option value="Leadership">Leadership</option>
            <option value="Tech">Tech</option>



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