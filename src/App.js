import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BookCategory, BookList, NavBar } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <React.Fragment>
        <Router>
         < NavBar/>
        <Switch>
        <Route path="/books" component={BookList} />
        <Route path="/categories" component={BookCategory} />
        <Route path="/" component={BookList} />
        </Switch>
       </Router>
      </React.Fragment>

  );
}

export default App;
