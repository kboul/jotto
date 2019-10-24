import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import { guessWord } from '../store/actions';

const App = ({ success, secretWord, guessedWords, guessWord }) => {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="my-4">Jotto</h1>
                <Congrats success={true} />
                <GuessedWords
                    guessedWords={[
                        { guessedWord: 'train', letterMatchCount: 3 }
                    ]}
                />
            </div>
        </div>
    );
};

App.propTypes = {
    success: PropTypes.bool.isRequired,
    secretWord: PropTypes.string,
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

const mapStateToProps = ({ success, secretWord, guessedWords }) => ({
    success,
    secretWord,
    guessedWords
});

const mapDispatchToProps = {
    guessWord
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
