import {
    MODIFY_EMAIL,
    MODIFY_PASSWORD,
    MODIFY_NAME,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_ERROR,
} from '../constants/TypeConstants';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    registerError: '',
    authenticateError: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFY_EMAIL: return { ...state, email: action.payload }
        case MODIFY_PASSWORD: return { ...state, password: action.payload }
        case MODIFY_NAME: return { ...state, name: action.payload }
        case REGISTER_USER_ERROR: return { ...state, registerError: action.payload }
        case REGISTER_USER_SUCCESS: return { ...state, name: '', password: '' }
        case AUTHENTICATE_ERROR: return { ...state, authenticateError: action.payload }
        case AUTHENTICATE_SUCCESS: return { ...state, authenticateError: '' }
        default: return state;
    }
}