import React from 'react';
import { shallow } from 'enzyme';
import RevealSecretWord from '../RevealSecretWord';
import {
    findByTestAttr,
    storeFactory,
    checkProps
} from '../../../test/testUtils';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<RevealSecretWord store={store} />)
        .dive()
        .dive();
};

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-secret-word-reveal');
    expect(component.length).toBe(1);
});

test('renders no text when giveUp prop is false', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-secret-word-reveal');
    expect(component.text()).toBe('');
});

test('renders non-empty giveUp message when giveUp prop is true', () => {
    const wrapper = setup({ giveUp: true });
    const message = findByTestAttr(wrapper, 'reveal-message');
    expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
    const expectedProps = { giveUp: false, secretWord: '' };
    const propError = checkProps(RevealSecretWord, expectedProps);
    expect(propError).toBeUndefined();
});
