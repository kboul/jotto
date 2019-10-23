import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../src/store/reducers';

/**
 *
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {*} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
};

/**
 *
 * @param {object} initialState
 * @returns {Store} - Redux store
 */
export const storeFactory = initialState => {
    const createStoreWithMiddleware = applyMiddleware(...[thunk])(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};
