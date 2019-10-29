import { giveUpReducer } from './giveUpReducer';
import { types } from '../actions/types';

test('returns default initialState when no actions is passed', () => {
    const newState = giveUpReducer(undefined, {});
    expect(newState).toBeFalsy();
});

test('returns state of true upon receiving an action of type `GIVE_UP`', () => {
    const newState = giveUpReducer(undefined, { type: types.GIVE_UP });
    expect(newState).toBeTruthy();
});
