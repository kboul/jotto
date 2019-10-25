import React from 'react';
import { shallow } from 'enzyme';
import ConnectedInput, { Input } from '../Input';
import { storeFactory, findByTestAttr } from '../../../test/testUtils';

describe('connected Input', () => {
    const setup = (initialState = {}) => {
        const store = storeFactory(initialState);
        const wrapper = shallow(<ConnectedInput store={store} />)
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
            const wrapper = shallow(<ConnectedInput store={store} />).dive(); // note, single dive
            const successProp = wrapper.props().success;
            expect(successProp).toBe(success);
        });

        test('`guessWord` action creator is a function prop', () => {
            const store = storeFactory();
            const wrapper = shallow(<ConnectedInput store={store} />).dive(); // note, single dive
            const guessWordProp = wrapper.props().guessWord;
            expect(guessWordProp).toBeInstanceOf(Function);
        });
    });
});

describe('unconnected Input', () => {
    describe('`guessWord` action creator call', () => {
        test('calls `guessWord` when button is clicked ', () => {
            const guessWordMock = jest.fn();

            const props = {
                guessWord: guessWordMock,
                success: false
            };

            // setup app component with getSecretWordMock as the getSecretWord prop
            const wrapper = shallow(<Input {...props} />);

            // simulate button click
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            submitButton.simulate('click');

            // check to see if mock ran
            const guessWordCallCount = guessWordMock.mock.calls.length;
            expect(guessWordCallCount).toBe(1);
        });
    });
});
