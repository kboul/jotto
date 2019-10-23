export const getLetterMatchCount = (guessedWord, secretWord) => {
    const guessedLettersSet = new Set([...guessedWord]);
    const numberOfCorrectLetters = [...guessedLettersSet].filter(letter =>
        secretWord.includes(letter)
    );
    return numberOfCorrectLetters.length;
};
