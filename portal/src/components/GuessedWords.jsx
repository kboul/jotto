import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
    let contents;

    !guessedWords.length
        ? (contents = (
              <div data-test="guess-instructions">
                  Try to guess the secret word
              </div>
          ))
        : (contents = (
              <div data-test="guessed-words">
                  <h3>Guessed Words</h3>
                  <table>
                      <thead>
                          <tr>
                              <th>Guess</th>
                              <th>Matching Letters</th>
                          </tr>
                      </thead>
                      <tbody>
                          {guessedWords.map(
                              ({ guessedWord, letterMatchCount }, index) => (
                                  <tr data-test="guessed-word" key={index}>
                                      <td>{guessedWord}</td>
                                      <td>{letterMatchCount}</td>
                                  </tr>
                              )
                          )}
                      </tbody>
                  </table>
              </div>
          ));

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
