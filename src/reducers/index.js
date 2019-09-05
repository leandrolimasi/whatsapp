import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import AppReducer from './AppReducer';
import ContactListReducer from './ContactListReducer';

export default combineReducers({
    AuthenticationReducer,
    AppReducer,
    ContactListReducer
})