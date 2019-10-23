import { types } from './types';
import { getLetterMatchCount } from '../../utils/getLetterMatchCount';

export const guessWord = guessedWord => {
    return (dispatch, getState) => {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: types.GUESS_WORD,
            payload: { guessedWord, letterMatchCount }
        });

        if (guessedWord === secretWord) {
            dispatch({ type: types.CORRECT_GUESS });
        }
    };
};
