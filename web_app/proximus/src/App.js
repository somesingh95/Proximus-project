import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Home from './screens/home';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
   <nav>
    <Home/>
  </nav>
  </Provider>
  
  );
}

export default App;
