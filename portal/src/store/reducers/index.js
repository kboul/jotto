import { combineReducers } from 'redux';
import { successReducer } from './successReducer';

export const rootReducer = combineReducers({
    success: successReducer
});

export default rootReducer;
