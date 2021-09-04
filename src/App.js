import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BookCategory, BookList, NavBar } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <div  className="wrapper">
        <Router>
         < NavBar/>
        <Switch>
        <Route path="/books" component={BookList} />
        <Route path="/categories" component={BookCategory} />
        <Route path="/" component={BookList} />
        </Switch>
       </Router>
       </div>
      </React.Fragment>
      </Provider>

  );
}

export default App;
