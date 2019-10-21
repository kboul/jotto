import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
    let contents;

    !guessedWords.length
        ? (contents = (
              <span data-test="guess-instructions">
                  Try to guess the secret word
              </span>
          ))
        : null;

    return <div data-test="component-guessed-words">{contents}</div>;
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;
