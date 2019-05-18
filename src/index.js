import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/app/app.jsx';
import {dataOffers} from './mocks/offers.js';


const mainContainer = document.querySelector(`#root`);


const init = (offers) => {

  ReactDOM.render(
      <App
        offers={offers}
      />,
      mainContainer
  );
};

init(dataOffers);
