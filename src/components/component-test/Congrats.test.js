import React from "react";
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {findByAttributeTest} from "../../test/test.utils";
import CongratsComponent from "../Congrats.component";

Enzyme.configure({adapter: new EnzymeAdapter()});
/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  return shallow(<CongratsComponent {...props}/>);
};

describe('Congrats message component', () => {
  test('should render the component', () => {
    const wrapper = shallow(<CongratsComponent />);
    expect(wrapper).toMatchSnapshot(wrapper);
  });

  test('should renders without error', () => {
    var wrapper = setup();
    const component = findByAttributeTest(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
  });

  test('should not render text when the props success is false', () => {
    const wrapper = setup({success: false});
    const component = findByAttributeTest(wrapper, 'component-congrats');
    expect(component.text()).toBe('')
  });

  test('should render non empty congrats message when the prop success is true', () => {
    const wrapper = setup({success: true});
    const component = findByAttributeTest(wrapper, 'component-message');
    expect(component.text).toBe('Congratulations! You guessed the word!');
    expect(component.text().length).not.toBe(0);
  });
})
