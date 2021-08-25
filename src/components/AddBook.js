import React from 'react'

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
      </div>
      </form>
    </div>
  )
}

export default AddBook