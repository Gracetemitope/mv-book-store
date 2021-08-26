import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BookCategory, NavBar } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from './components/redux/books/books';

function App() {
  return (
      <React.Fragment>
        <Router>
         < NavBar/>
        <Switch>
        <Route path="/books" component={Books} />
        <Route path="/categories" component={BookCategory} />
        <Route path="/" component={Books} />
        </Switch>
       </Router>
      </React.Fragment>

  );
}

export default App;
