import { types } from '../actions/types';

export const secretWordReducer = (state = null, action) => {
    switch (action.type) {
        case types.SET_SECRET_WORD:
            return action.payload;
        default:
            return state;
    }
};
