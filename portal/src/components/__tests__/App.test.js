import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { storeFactory, checkProps } from '../../../test/testUtils';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<App store={store} />).dive(); // note, single dive
    return wrapper;
};

describe('redux props', () => {
    test('has success piece of state as prop on a functional component', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.props().success;
        expect(successProp).toBe(success);
    });

    test('has secretWord piece of state as prop on a functional component', () => {
        const secretWord = 'party';
        const wrapper = setup({ secretWord });
        const secretWordProp = wrapper.props().secretWord;
        expect(secretWordProp).toBe(secretWord);
    });

    test('has access to `guessWords state', () => {
        const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
        const wrapper = setup({ guessedWords });
        const guessedWordProp = wrapper.props().guessedWords;
        expect(guessedWordProp).toEqual(guessedWords);
    });

    test('`guessWord` action creator is a function prop', () => {
        const store = storeFactory();
        const wrapper = shallow(<App store={store} />).dive(); // note, single dive
        const guessWordProp = wrapper.props().guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});
