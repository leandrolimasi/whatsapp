import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import AppReducer from './AppReducer';
import ContactListReducer from './ContactListReducer';
import ListMessageReducer from './ListMessageReducer';

export default combineReducers({
    AuthenticationReducer,
    AppReducer,
    ContactListReducer,
    ListMessageReducer
})