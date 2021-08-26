import React, { Component} from 'react';
import AddBook from '../../AddBook';

class Books extends Component {
  state = {
    books: [
      {
        id: 1,
        title: "Power of the Mind",
        categories: "Power"
      },
      {
        id: 2,
        title: "Creativity",
        categories: "Inspirational"
      },
      {
        id: 3,
        title: "Becoming",
        categories: "Biography"
      }
    ]
   };
   render() {
  return (
    <div className="container">
      <div>
      {this.state.books.map(books => (
        <div className="card mt-3" key={books.id}>
        <div className="card-body">
        <p className="text-primary">{books.categories}</p>
         <li >{books.title}</li> 
        </div>
        </div>
      ))}
    </div>
    < AddBook />
    </div>
  )
      }
}

export default Books