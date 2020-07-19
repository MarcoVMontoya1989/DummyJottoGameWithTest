import React from "react";
import {shallow} from 'enzyme';
import PropTypes from 'prop-types';
import {
  findByAttributeTest,
  checkProps
} from "../../test/test.utils";
import CongratsComponent from "../Congrats.component";

const defaultProps = {success: false};

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<CongratsComponent {...setupProps}/>);
};

describe('Congrats message component', () => {
  test('should render the component', () => {
    const wrapper = shallow(<CongratsComponent {...defaultProps}/>);
    expect(wrapper).toMatchSnapshot(wrapper);
  });

  test('should renders without error', () => {
    var wrapper = setup({success: false});
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
    const component = findByAttributeTest(wrapper, 'congrats-message');
    // expect(component.text).toBe('Congratulations! You guessed the word!');
    expect(component.text().length).not.toBe(0);
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = {success: false};

    CongratsComponent.propTypes = {
      success: PropTypes.bool.isRequired,
    };

    checkProps(CongratsComponent, expectedProps);
  });
})
