import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { App } from '../App';
import { storeFactory } from '../../../test/testUtils';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<ConnectedApp store={store} />).dive(); // note, single dive
    return wrapper;
};

describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.props().success;
        expect(successProp).toBe(success);
    });

    test('has secretWord piece of state as prop', () => {
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
        const wrapper = shallow(<ConnectedApp store={store} />).dive(); // note, single dive
        const getSecretWordProp = wrapper.props().getSecretWord;
        expect(getSecretWordProp).toBeInstanceOf(Function);
    });
});

test('`getSecretWord` runs on unconnected App', () => {
    const getSecretWordMock = jest.fn();

    const props = {
        getSecretWord: getSecretWordMock,
        success: false,
        guessedWords: []
    };

    // setup app component with getSecretWordMock as the getSecretWord prop
    const wrapper = shallow(<App {...props} />);

    // run lifecycle method
    wrapper.instance().componentDidMount();

    // check to see if mock ran
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

    expect(getSecretWordCallCount).toBe(1);
});
