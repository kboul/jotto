import { types } from '../actions/types';

export const successReducer = (state = false, action) => {
    switch (action.type) {
        case types.CORRECT_GUESS:
            return true;
        default:
            return state;
    }
};
