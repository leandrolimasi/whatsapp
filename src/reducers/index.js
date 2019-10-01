import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import AppReducer from './AppReducer';
import ListContactReducer from './ListContactReducer';
import ListMessageReducer from './ListMessageReducer';
import ListChatReducer from './ListChatReducer';

export default combineReducers({
    AuthenticationReducer,
    AppReducer,
    ListContactReducer,
    ListMessageReducer,
    ListChatReducer
})