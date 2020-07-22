import React from 'react';
import PropTypes from 'prop-types';

const GuessedWordComponent = (props) => {
  let content = null;

  if (props.guessedWords.length === 0) {
    content = (
      <span data-test={'guess-instructions'}>
        Try to guess the secret word!!
      </span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => {
      return (
        <tr key={index} data-test={'guessed-word'}>
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      );
    })
    content = (
      <div data-test={'guessed-words '}>
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
          <tr>
            <th>Guess</th>
            <th>Matching Letters</th>
          </tr>
          <tbody>
          {guessedWordsRows}
          </tbody>
          </thead>
        </table>
      </div>
    )
  }

  return (
    <div data-test={'component-guessed-words'}>
      {content}
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