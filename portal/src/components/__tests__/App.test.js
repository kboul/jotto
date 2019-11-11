import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import App from '../App';
import * as actions from '../../actions/getSecretWord';

const mockGetSecretWord = jest.fn();

const setup = () => {
    mockGetSecretWord.mockClear();
    actions.getSecretWord = mockGetSecretWord;
    // use mount because useEffect not called on shallow
    return mount(<App />);
};

test('App renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component).toHaveLength(1);
});

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
