import React from 'react';
import './App.css';
import Navbar from './Components/Layouts/Navbar'
import MyFooter from './Components/Layouts/MyFooter'
import Landing from './Components/Home/Landing'
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store = {store}>
      <Navbar item="my navbar" />
      <Landing />
      <MyFooter />
      </Provider>
  );
}

export default App;
