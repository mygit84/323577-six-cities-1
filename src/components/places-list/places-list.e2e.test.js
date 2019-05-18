import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PlacesList from './places-list.jsx';
import {testDataOffers} from '../../mocks/mocks-for-test.js';


configure({adapter: new Adapter()});

it(`Check initial property value activeCard`, () => {
  const placesList = mount(<PlacesList
    offers={testDataOffers}
  />);

  expect(placesList.state(`activeCard`)).toEqual(-1);
});

it(`Clicking on the photo updates the status of the index`, () => {
  const placesList = mount(<PlacesList
    offers={testDataOffers}
  />);

  const photo = placesList.find(`.place-card__image`).at(3);
  photo.simulate(`click`);
  expect(placesList.state(`activeCard`)).toEqual(3);
});

it(`Hovering the mouse enter the card changes the state to index`, () => {
  const placesList = mount(<PlacesList
    offers={testDataOffers}
  />);

  const card = placesList.find(`.place-card`).at(3);
  card.simulate(`mouseenter`);
  expect(placesList.state(`activeCard`)).toEqual(3);
});

it(`When the mouse leaves the card the state is -1`, () => {
  const placesList = mount(<PlacesList
    offers={testDataOffers}
  />);

  const card = placesList.find(`.place-card`).at(3);
  card.simulate(`mouseleave`);
  expect(placesList.state(`activeCard`)).toEqual(-1);
});
