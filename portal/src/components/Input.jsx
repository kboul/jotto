import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { guessWord } from '../store/actions';

export class Input extends Component {
    state = {
        currentGuess: ''
    };

    handleClick = e => {
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
        const { success } = this.props;
        let contents;
        contents = !success ? (
            <form className="form-inline">
                <input
                    type="text"
                    data-test="input-box"
                    className="form-control mb-2 mx-sm-3"
                    placeholder="enter guess"
                    value={currentGuess}
                    onChange={e =>
                        this.setState({ currentGuess: e.target.value })
                    }
                />
                <button
                    type="submit"
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    onClick={this.handleClick}>
                    Submit
                </button>
            </form>
        ) : null;

        return (
            <div className="col-md-6 offset-md-4" data-test="component-input">
                {contents}
            </div>
        );
    }
}

Input.propTypes = {
    success: PropTypes.bool.isRequired,
    guessWord: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ success: state.success });

const mapDispatchToProps = {
    guessWord
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);
