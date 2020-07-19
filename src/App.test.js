import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import App from './App';
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot(wrapper);
});
