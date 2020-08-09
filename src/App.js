import React from 'react';
import './App.css';
import Navbar from './Components/Layouts/Navbar'
import MyFooter from './Components/Layouts/MyFooter'
import Landing from './Components/Home/Landing'
import Movie from './Components/Home/Movie'
import { HashRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <Navbar item="my navbar" />
      <Router>
        <div>
          <Route path="/" component={Landing} exact />
          <Route path="/movie/:id" component={Movie} exact />
          <MyFooter />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
