import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { getSecretWord } from '../store/actions';

export class App extends Component {
    componentDidMount() {
        const { getSecretWord } = this.props;
        getSecretWord();
    }

    render() {
        const { success, guessedWords } = this.props;
        return (
            <div className="container">
                <div className="text-center">
                    <h1 className="my-4">Jotto</h1>
                    <Congrats success={success} />
                    <Input />
                    <GuessedWords guessedWords={guessedWords} />
                </div>
            </div>
        );
    }
}

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
    getSecretWord
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
