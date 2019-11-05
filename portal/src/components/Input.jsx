import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
    // do not destructure state if you want to mock it
    const [currentGuess, setCurrentGuess] = React.useState('');

    return (
        <div data-test="component-input">
            <form className="form-inline">
                <input
                    type="text"
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    placeholder="Enter guess"
                    value={currentGuess}
                    onChange={e => setCurrentGuess(e.target.value)}
                />
                <button
                    type="button"
                    data-test="guess-button"
                    className="btn btn-primary mb-2">
                    Guess
                </button>
            </form>
        </div>
    );
};

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
};

export default Input;
