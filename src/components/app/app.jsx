import React from 'react';
import MainScreen from '../main-screen/main-screen.jsx';
import {titles} from './app-mock-data.js';

const App = () => {
  return <MainScreen
    titles = {titles}
  />;
};


export default App;
