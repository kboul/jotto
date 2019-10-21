import React from 'react';
import { shallow } from 'enzyme';
import GuessedWords from '../GuessedWords';
import { checkProps, findByTestAttr } from '../../../test/testUtils';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component).toHaveLength(1);
    });

    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text()).not.toHaveLength(0);
    });
});

describe('if there are words guessed', () => {
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 }
    ];

    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component).toHaveLength(1);
    });

    test('renders guessed words section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode).toHaveLength(1);
    });

    test('correct number of guessed words', () => {
        const guessedWord = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWord.length).toBe(guessedWords.length);
    });
});
