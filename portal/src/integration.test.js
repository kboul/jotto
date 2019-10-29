import { storeFactory } from '../test/testUtils';
import { guessWord, toggleGiveUp } from './store/actions';

describe('toggleGiveUp action dispatcher', () => {
    const secretWord = 'party';
    const initialState = { secretWord };

    let store;
    beforeEach(() => {
        store = storeFactory(initialState);
    });

    test('updates state correctly when clicking give up button', () => {
        store.dispatch(toggleGiveUp());
        const expectedState = {
            ...initialState,
            success: false,
            giveUp: true,
            guessedWords: []
        };
        const newState = store.getState();
        expect(newState).toEqual(expectedState);
    });
});

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';

    describe('no guessed words', () => {
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const expectedState = {
                ...initialState,
                success: false,
                giveUp: false,
                guessedWords: [
                    {
                        guessedWord: unsuccessfulGuess,
                        letterMatchCount: 3
                    }
                ]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });

        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const expectedState = {
                ...initialState,
                success: true,
                giveUp: false,
                guessedWords: [
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });
    });

    describe('some guessed words', () => {
        const guessedWords = [
            {
                guessedWords: 'agile',
                letterMatchCount: 1
            }
        ];
        const initialState = { guessedWords, secretWord };
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                giveUp: false,
                guessedWords: [
                    ...guessedWords,
                    {
                        guessedWord: unsuccessfulGuess,
                        letterMatchCount: 3
                    }
                ]
            };
            expect(newState).toEqual(expectedState);
        });

        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                giveUp: false,
                guessedWords: [
                    ...guessedWords,
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            };
            expect(newState).toEqual(expectedState);
        });
    });
});
