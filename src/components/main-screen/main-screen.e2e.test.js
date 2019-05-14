import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainScreen from './main-screen.jsx';


Enzyme.configure({adapter: new Adapter()});

const testMockData = [
  `Yesterday, all my troubles seemed so far away`
];

describe(`MainScreen component`, () => {
  it(`should call onClick on link`, () => {
    const clickHahdler = jest.fn();
    const welcomeScreen = shallow(<MainScreen
      titles={testMockData}
      onClick={clickHahdler}
    />);

    const playButton = welcomeScreen.find(`.place-card__name a`);

    playButton.simulate(`click`, {preventDefault() {}});

    expect(clickHahdler).toHaveBeenCalledTimes(1);
  });
});
