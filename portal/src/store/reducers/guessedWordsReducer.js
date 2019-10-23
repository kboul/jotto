import { types } from '../actions/types';

export const guessedWordsReducer = (state = [], action) => {
    switch (action.type) {
        case types.GUESS_WORD:
            return [...state, action.payload];
        default:
            return state;
    }
};
