import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';


const testMockData = [
  `Yesterday, all my troubles seemed so far away`,
  `Now it look as though they're here to stay`,
  `Oh, I believe in yesterday`,
  `Suddenly, I'm not half the man I used to be`
];


it(`MainScreen is rendered correctly`, () => {
  const tree = renderer
    .create(<App
      titles={testMockData}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
