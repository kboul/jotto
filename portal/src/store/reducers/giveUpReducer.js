import { types } from '../actions/types';

export const giveUpReducer = (state = false, action) => {
    switch (action.type) {
        case types.GIVE_UP:
            return true;
        default:
            return state;
    }
};
