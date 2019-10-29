import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const RevealSecretWord = ({ secretWord, giveUp }) => {
    return giveUp ? (
        <div
            data-test="component-secret-word-reveal"
            className="alert alert-danger my-4 col-md-6 offset-md-3">
            <span data-test="reveal-message">
                The secret word was <b>{secretWord}</b> <br />
                Better luck next time!
            </span>
        </div>
    ) : (
        <div data-test="component-secret-word-reveal" />
    );
};

RevealSecretWord.propTypes = {
    secretWord: PropTypes.string,
    giveUp: PropTypes.bool.isRequired
};

const mapStateToProps = ({ secretWord, giveUp }) => ({
    secretWord,
    giveUp
});

export default connect(mapStateToProps)(RevealSecretWord);
