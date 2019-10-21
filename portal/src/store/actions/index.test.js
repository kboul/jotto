import { correctGuess } from './';
import { types } from './types';

describe('correct guess', () => {
    test('returns an action with type "CORRECT_GUESS"', () => {
        const action = correctGuess();
        // toBe does not work because {} are mutable not immutable
        expect(action).toEqual({ type: types.CORRECT_GUESS });
    });
});
