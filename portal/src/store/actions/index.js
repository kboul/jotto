import axios from 'axios';
import { types } from './types';
import { getLetterMatchCount } from '../../utils/getLetterMatchCount';

/**
 *
 * @param {string} guessedWord
 */

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

export const getSecretWord = () => {
    return async (dispatch, getState) => {
        const { data } = await axios.get('/api/word');
        dispatch({ type: types.SET_SECRET_WORD, payload: data });
    };
};

export const toggleGiveUp = () => ({
    type: types.GIVE_UP
});
