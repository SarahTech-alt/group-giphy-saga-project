import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Category from '../Category/Category.jsx';
import Favorite from '../Favorite/Favorite.jsx';

function App() {

  return (
    <div>
      <h1>Giphy Search!</h1>
      
      <Router>

        <Route exact path='/' component={Category} />

        <Route exact path='/favorites' component={Favorite} />

      </Router>

    </div>
  );
}

export default App;
