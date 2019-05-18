import React from 'react';
import renderer from 'react-test-renderer';

import PlaceCard from './place-card.jsx';
import {testDataOffer} from '../../mocks/mocks-for-test.js';


it(`PlaceCard is rendered correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer={testDataOffer}
      onClick={jest.fn()}
      onMouseEnter={jest.fn()}
      onMouseLeave={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
