import {combineReducers} from 'redux';
import authReducer from './auth';
import notesReducer from './notes';

export default combineReducers({
    notes: notesReducer,
    auth: authReducer
})
