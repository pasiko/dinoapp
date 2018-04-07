import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CreateWarrantyReducer from './createWarrantyReducer.js';

const rootReducer = combineReducers({
    form: formReducer,
    createWarranty: CreateWarrantyReducer
});

export default rootReducer;