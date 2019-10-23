import { combineReducers } from 'redux';
import { successReducer } from './successReducer';
import { guessedWordsReducer } from './guessedWordsReducer';

export const rootReducer = combineReducers({
    success: successReducer,
    guessedWords: guessedWordsReducer
});

export default rootReducer;
