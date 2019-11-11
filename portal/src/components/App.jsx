import React from 'react';
import Input from './Input';
import * as actions from '../actions/getSecretWord';
import Spinner from './Spinner';

function reducer(state, action) {
    switch (action.type) {
        case 'setSecretWord':
            return { ...state, secretWord: action.payload };
        default:
            throw new Error();
    }
}

const initialState = { secretWord: null };

const App = () => {
    const [{ secretWord }, dispatch] = React.useReducer(reducer, initialState);

    const setSecretWord = secretWord =>
        dispatch({
            type: 'setSecretWord',
            payload: secretWord
        });

    React.useEffect(() => {
        actions.getSecretWord(setSecretWord);
    }, []);

    return secretWord ? (
        <div data-test="component-app">
            <Input secretWord={secretWord} />
        </div>
    ) : (
        <div data-test="spinner">
            <Spinner />
        </div>
    );
};

export default App;
