import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Animals from '../Animals/Animals.jsx';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import Search from '../Search/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>SPAs!</h1>

        {/* Nav bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link to="/plants">Plants</Link>
            </li>
            <li>
              <Link to="/bears">Bears</Link>
            </li>
            <li>
              <Link to="/animals/details/47">Details for animal with id of 47</Link>
            </li>
            <li>
              <Link to="/search?legs=1000&type=insect">Search for an insect with 1000 legs</Link>
            </li>
          </ul>
        </nav>



        <Route path="/animals" exact>
          <Animals />
        </Route>
        <Route path="/plants">
          <Plants />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* Route parameters */}
        <Route path="/animals/details/:id">
          <AnimalDetails />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </div>
    </Router>
  );
}

export default App;
