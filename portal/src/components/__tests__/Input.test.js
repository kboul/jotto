import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';
import { storeFactory, findByTestAttr } from '../../../test/testUtils';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />)
        .dive()
        .dive();
    // console.log(wrapper.debug());
    return wrapper;
};

setup();

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component).toHaveLength(1);
        });

        test('renders input box', () => {
            const component = findByTestAttr(wrapper, 'input-box');
            expect(component).toHaveLength(1);
        });

        test('renders submit button', () => {
            const component = findByTestAttr(wrapper, 'submit-button');
            expect(component).toHaveLength(1);
        });
    });

    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component).toHaveLength(1);
        });

        test('does not render input box', () => {
            const component = findByTestAttr(wrapper, 'input-box');
            expect(component).toHaveLength(0);
        });

        test('does not render submit button', () => {
            const component = findByTestAttr(wrapper, 'submit-button');
            expect(component).toHaveLength(0);
        });
    });
});

describe('update state', () => {});
