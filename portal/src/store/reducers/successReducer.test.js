import { successReducer } from './successReducer';
import { types } from '../actions/types';

test('returns default initialState when no actions is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBeFalsy();
});

test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: types.CORRECT_GUESS });
    expect(newState).toBeTruthy();
});
