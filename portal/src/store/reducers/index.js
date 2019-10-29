import { combineReducers } from 'redux';
import { successReducer } from './successReducer';
import { guessedWordsReducer } from './guessedWordsReducer';
import { secretWordReducer } from './secretWordReducer';
import { giveUpReducer } from './giveUpReducer';

export const rootReducer = combineReducers({
    success: successReducer,
    guessedWords: guessedWordsReducer,
    secretWord: secretWordReducer,
    giveUp: giveUpReducer
});

export default rootReducer;
