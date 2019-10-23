import { combineReducers } from 'redux';
import { successReducer } from './successReducer';
import { guessedWordsReducer } from './guessedWordsReducer';
import { secretWordReducer } from './secretWordReducer';

export const rootReducer = combineReducers({
    success: successReducer,
    guessedWords: guessedWordsReducer,
    secretWord: secretWordReducer
});

export default rootReducer;
