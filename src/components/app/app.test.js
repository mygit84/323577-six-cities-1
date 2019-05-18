import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';
import {testDataOffers} from '../../mocks/mocks-for-test.js';


it(`App is rendered correctly`, () => {
  const tree = renderer
    .create(<App
      offers={testDataOffers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
