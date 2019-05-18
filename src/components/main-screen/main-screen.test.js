import React from 'react';
import renderer from 'react-test-renderer';

import MainScreen from './main-screen.jsx';
import {testDataOffers} from '../../mocks/mocks-for-test.js';


it(`MainScreen is rendered correctly`, () => {
  const tree = renderer
    .create(<MainScreen
      offers={testDataOffers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
