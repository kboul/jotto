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

            test('renders give up button', () => {
                const component = findByTestAttr(wrapper, 'give-up-button');
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
        test('has success piece of state as prop', () => {
            const success = true;
            const wrapper = setup({ success });
            const successProp = wrapper.instance().props.success;
            // this would apply if it was a functional component
            // const store = storeFactory({ success });
            // const wrapper = shallow(<ConnectedInput store={store} />).dive(); // note, single dive
            // const successProp = wrapper.props().success;
            expect(successProp).toBe(success);
        });

        test('`guessWord` action creator is a function prop', () => {
            const wrapper = setup();
            const guessWordProp = wrapper.instance().props.guessWord;
            // this would apply if it was a functional component
            // const store = storeFactory();
            // const wrapper = shallow(<ConnectedInput store={store} />).dive(); // note, single dive
            // const guessWordProp = wrapper.props().guessWord;
            expect(guessWordProp).toBeInstanceOf(Function);
        });

        test('`toggleGiveUp` action creator is a function prop', () => {
            const wrapper = setup();
            const toggleGiveUpProp = wrapper.instance().props.toggleGiveUp;
            expect(toggleGiveUpProp).toBeInstanceOf(Function);
        });
    });
});

describe('unconnected Input', () => {
    describe('`guessWord` action creator call', () => {
        let guessWordMock;
        let toggleGiveUpMock;
        let wrapper;
        const guessedWord = 'train';

        beforeEach(() => {
            guessWordMock = jest.fn();
            toggleGiveUpMock = jest.fn();

            const props = {
                guessWord: guessWordMock,
                toggleGiveUp: toggleGiveUpMock,
                success: false
            };

            // setup app component with getSecretWordMock as the getSecretWord prop
            wrapper = shallow(<Input {...props} />);
        });

        describe('Guess button is clicked', () => {
            test('local state changes after inserting a new value on input', () => {
                // here test the onChange event
                const input = findByTestAttr(wrapper, 'input-box');
                const event = {
                    preventDefault() {},
                    target: { value: guessedWord }
                };
                input.simulate('change', event);
                expect(wrapper.state().currentGuess).toBe(guessedWord);
            });

            beforeEach(() => {
                // add value to the input box
                wrapper.setState({ currentGuess: guessedWord });
                // console.log(wrapper.state());

                // simulate button click
                const submitButton = findByTestAttr(wrapper, 'submit-button');
                submitButton.simulate('click', { preventDefault() {} });
            });

            test('calls `guessWord` when button is clicked ', () => {
                // check to see if mock ran
                const guessWordCallCount = guessWordMock.mock.calls.length;
                expect(guessWordCallCount).toBe(1);
            });

            test('calls `guessWord` with input value as argument', () => {
                const guessWordArg = guessWordMock.mock.calls[0][0];
                expect(guessWordArg).toBe(guessedWord);
            });

            test('clears the input box when clicking submit', () => {
                expect(wrapper.state().currentGuess).toEqual('');
            });
        });

        describe('Give up button is clicked', () => {
            test('`toggleGiveUp` action creator call when button is clicked ', () => {
                const giveUpButton = findByTestAttr(wrapper, 'give-up-button');
                giveUpButton.simulate('click', { preventDefault() {} });
                // check to see if mock ran
                const toggleGiveUpCallCount =
                    toggleGiveUpMock.mock.calls.length;
                expect(toggleGiveUpCallCount).toBe(1);
            });
        });
    });
});
