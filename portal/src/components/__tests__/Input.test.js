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
        test('renders component without error', () => {});

        test('renders input box', () => {});

        test('renders submit button', () => {});
    });

    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component).toHaveLength(1);
        });

        test('does not render input box', () => {
            const component = findByTestAttr(wrapper, 'input-box');
            expect(component).toHaveLength(1);
        });

        test('does not render submit button', () => {
            const component = findByTestAttr(wrapper, 'submit-button');
            expect(component).toHaveLength(1);
        });
    });
});

describe('update state', () => {});
