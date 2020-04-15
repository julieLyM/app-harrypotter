import React from 'react';
import { shallow, simulate } from 'enzyme';
import Home from './Home';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

test('My Page renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Component should contain title', () => {
  const home = shallow(<Home />);
  expect(home.text()).toMatch(/houses/);
});

// test('simulates click events', () => {
//   const onButtonClick = jest.fn();
//   const button = shallow(<Home onClicked={onButtonClick} />);
//   button.find('button').simulate('click');
//   expect(onButtonClick).toHaveBeenCalledTimes(1);
// });
