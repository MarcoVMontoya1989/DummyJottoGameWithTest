import React from "react";
import {shallow} from 'enzyme';
import PropTypes from 'prop-types';
import {
  findByAttributeTest,
  checkProps
} from "../../test/test.utils";
import GuessedWordComponent from "./GuessedWord.component";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3
    },
  ],
};

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<GuessedWordComponent {...setupProps}/>);
};

describe('GuessedWord Component test', () => {
  // test('Should not throwing warning with expected props', () => {
  //   const wrapper = setup(defaultProps);
  //   const component = findByAttributeTest(wrapper, 'component-foobar');
  //   expect(component.length).toBe(1);
  // });

  test('does not throw warning with expected props', () => {
    const expectedProps = {
      guessedWords: [
        {
          guessedWord: 'train',
          letterMatchCount: 3
        },
      ],
    }

    GuessedWordComponent.propTypes = {
      guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
          guessedWord: PropTypes.string.isRequired,
          letterMatchCount: PropTypes.number.isRequired,
        })
      ).isRequired,
    };

    checkProps(GuessedWordComponent, expectedProps);
  });

  // test('', () => {
  //
  // });
});