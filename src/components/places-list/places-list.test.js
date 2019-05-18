import React from 'react';
import renderer from 'react-test-renderer';

import PlacesList from './places-list.jsx';
import {testDataOffers} from '../../mocks/mocks-for-test.js';


it(`PlacesList is rendered correctly`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={testDataOffers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
