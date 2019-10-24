import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { guessWord } from '../store/actions';

const Input = ({ success, guessWord }) => {
    let contents;
    contents = !success ? (
        <form className="form-inline">
            <input
                type="text"
                data-test="input-box"
                className="form-control mb-2 mx-sm-3"
                placeholder="enter guess"
            />
            <button
                type="submit"
                data-test="submit-button"
                className="btn btn-primary mb-2">
                Submit
            </button>
        </form>
    ) : null;

    return <div data-test="component-input">{contents}</div>;
};

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
