import React from 'react';
import * as actions from '../actions/getSecretWord';

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
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const setSecretWord = secretWord =>
        dispatch({
            type: 'setSecretWord',
            payload: secretWord
        });

    React.useEffect(() => {
        actions.getSecretWord(setSecretWord);
    }, []);

    return <div data-test="component-app">hello world</div>;
};

export default App;
