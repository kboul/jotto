import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import Input from '../Input';

const setup = (secretWord = 'party') => {
    return shallow(<Input secretWord={secretWord} />);
};

test('Input renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component).toHaveLength(1);
});

test('does not throw warning with expected props', () => {
    checkProps(Input, { secretWord: 'party' });
});

describe('state controlled input field', () => {
    let mockSetCurrentGuess = jest.fn();
    let wrapper;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
        wrapper = setup();
    });

    test('state updates with value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    test('state becomes empty after pressing Guess button', () => {
        const guessButton = findByTestAttr(wrapper, 'guess-button');
        guessButton.simulate('click', { preventDefault() {} });
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
});
