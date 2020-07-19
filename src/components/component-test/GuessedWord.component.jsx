import React from 'react';
import PropTypes from 'prop-types';

const GuessedWordComponent = () => {
  return (
    <div>

    </div>
  );
};

GuessedWordComponent.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWordComponent;