import { letterMatchCount } from './letterMatchCount';

describe('letterMatchCount', () => {
    const secretWord = 'party';

    test('returns correct count when there are no matching letters', () => {
        const matchCount = letterMatchCount('bones', secretWord);
        expect(matchCount).toBe(0);
    });

    test('returns the correct count where there are 3 matching letters', () => {
        const matchCount = letterMatchCount('train', secretWord);
        expect(matchCount).toBe(3);
    });

    test('returns correct count when there are duplicate letters in the guess', () => {
        const matchCount = letterMatchCount('parka');
        expect(matchCount).toBe(3);
    });
});
