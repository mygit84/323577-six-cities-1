import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app.jsx';


const mainContainer = document.querySelector(`#root`);


const init = () => {

  ReactDOM.render(
      <App/>,
      mainContainer
  );
};

init();

