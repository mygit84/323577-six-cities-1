import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PlaceCard from './place-card.jsx';
import {testDataOffer} from '../../mocks/mocks-for-test.js';


configure({adapter: new Adapter()});

it(`Click on photo calls callback`, () => {
  const clickHandler = jest.fn();
  const mouseEnterHandler = jest.fn();
  const mouseLeaveHandler = jest.fn();

  const placesList = mount(<PlaceCard
    offer={testDataOffer}
    onClick={clickHandler}
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    index={0}
  />);

  const photo = placesList.find(`.place-card__image`);
  photo.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});

it(`Mouseenter on card calls callback`, () => {
  const clickHandler = jest.fn();
  const mouseEnterHandler = jest.fn();
  const mouseLeaveHandler = jest.fn();

  const placesList = mount(<PlaceCard
    offer={testDataOffer}
    onClick={clickHandler}
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    index={0}
  />);

  const card = placesList.find(`.place-card`);
  card.simulate(`mouseenter`);
  expect(mouseEnterHandler).toHaveBeenCalledTimes(1);
});

it(`Mouseleave on card calls callback`, () => {
  const clickHandler = jest.fn();
  const mouseEnterHandler = jest.fn();
  const mouseLeaveHandler = jest.fn();

  const placesList = mount(<PlaceCard
    offer={testDataOffer}
    onClick={clickHandler}
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    index={0}
  />);

  const card = placesList.find(`.place-card`);
  card.simulate(`mouseleave`);
  expect(mouseLeaveHandler).toHaveBeenCalledTimes(1);
});
