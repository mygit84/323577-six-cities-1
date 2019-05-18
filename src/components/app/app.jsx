import React from 'react';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen.jsx';


const App = (props) => {
  const {offers} = props;

  return <MainScreen
    offers = {offers}
  />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    header: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired
};


export default App;
