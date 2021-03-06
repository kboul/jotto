import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { guessWord } from '../store/actions';
import { toggleGiveUp } from '../store/actions';

export class Input extends Component {
    state = {
        currentGuess: '',
    };

    handleClick = (e) => {
        const { currentGuess } = this.state;
        if (e && currentGuess.length > 0) {
            e.preventDefault();
            const { guessWord } = this.props;
            guessWord(currentGuess);
            this.setState({ currentGuess: '' });
        }
    };

    render() {
        const { currentGuess } = this.state;
        const { success, toggleGiveUp } = this.props;
        let contents;
        contents = !success ? (
            <div className="row align-items-end">
                <div className="col-md-8">
                    <input
                        type="text"
                        data-test="input-box"
                        className="form-control"
                        placeholder="enter guess"
                        value={currentGuess}
                        onChange={(e) =>
                            this.setState({ currentGuess: e.target.value })
                        }
                    />
                </div>

                <div className="col-md-4 mt-2">
                    <div className="btn-group">
                        <button
                            type="submit"
                            data-test="submit-button"
                            className="btn btn-primary"
                            onClick={this.handleClick}>
                            Guess
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-test="give-up-button"
                            onClick={() => toggleGiveUp()}>
                            Give up
                        </button>
                    </div>
                </div>
            </div>
        ) : null;

        return (
            <div className="col-md-6 offset-md-3" data-test="component-input">
                {contents}
            </div>
        );
    }
}

Input.propTypes = {
    success: PropTypes.bool.isRequired,
    guessWord: PropTypes.func.isRequired,
    toggleGiveUp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ success: state.success });

const mapDispatchToProps = {
    guessWord,
    toggleGiveUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
