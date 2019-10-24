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

describe('redux props', () => {
    test('has success piece of state as prop on a functional component', () => {
        const success = true;
        const store = storeFactory({ success });
        const wrapper = shallow(<Input store={store} />).dive(); // note, single dive
        const successProp = wrapper.props().success;
        expect(successProp).toBe(success);
    });

    test('`guessWord` action creator is a function prop', () => {
        const store = storeFactory();
        const wrapper = shallow(<Input store={store} />).dive(); // note, single dive
        const guessWordProp = wrapper.props().guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});
