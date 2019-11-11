import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import App from '../App';
import * as actions from '../../actions/getSecretWord';

const mockGetSecretWord = jest.fn();

const setup = (secretWord = 'party') => {
    mockGetSecretWord.mockClear();
    actions.getSecretWord = mockGetSecretWord;

    const mockUseReducer = jest
        .fn()
        .mockReturnValue([{ secretWord }, jest.fn()]);

    React.useReducer = mockUseReducer;
    // use mount because useEffect not called on shallow
    return mount(<App />);
};

describe('getSecretWord calls', () => {
    test('getSecretWord gets called on App mount', () => {
        setup();

        // check to see if secret word was updated
        expect(mockGetSecretWord).toHaveBeenCalled();
    });

    test('secret word does not update on App update', () => {
        const wrapper = setup();
        mockGetSecretWord.mockClear(); // clear from before

        wrapper.setProps(); // force rerender - app updates
        expect(mockGetSecretWord).not.toHaveBeenCalled();
    });
});

describe('secret word is not null', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup('party');
    });

    test('renders App when secretWord is not null', () => {
        const appComponent = findByTestAttr(wrapper, 'component-app');
        expect(appComponent.exists()).toBeTruthy();
    });

    test('does not render Spinner when secretWord is not null', () => {
        const spinnerComponent = findByTestAttr(wrapper, 'spinner');
        expect(spinnerComponent.exists()).toBeFalsy();
    });
});

describe('secret word is null', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup(null);
    });

    test('does not render App when secretWord is null', () => {
        const appComponent = findByTestAttr(wrapper, 'component-app');
        expect(appComponent.exists()).toBeFalsy();
    });

    test('render Spinner when secretWord is null', () => {
        const spinnerComponent = findByTestAttr(wrapper, 'spinner');
        expect(spinnerComponent.exists()).toBeTruthy();
    });
});
