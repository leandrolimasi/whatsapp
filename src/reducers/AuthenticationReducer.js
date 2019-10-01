import {
    MODIFY_EMAIL,
    MODIFY_PASSWORD,
    MODIFY_NAME,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    REGISTER_LOADING,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_ERROR,
    AUTHENTICATE_LOADING
} from '../constants/TypeConstants';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    registerError: '',
    authenticateError: '',
    loadingLogin: false,
    loadingRegister: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFY_EMAIL: return { ...state, email: action.payload }
        case MODIFY_PASSWORD: return { ...state, password: action.payload }
        case MODIFY_NAME: return { ...state, name: action.payload }
        case REGISTER_USER_ERROR: return { ...state, registerError: action.payload, loadingRegister: false }
        case REGISTER_USER_SUCCESS: return { ...state, name: '', password: '', loadingRegister: false }
        case AUTHENTICATE_ERROR: return { ...state, authenticateError: action.payload, loadingLogin: false }
        case AUTHENTICATE_SUCCESS: return { ...state, ...INITIAL_STATE }
        case AUTHENTICATE_LOADING: return { ...state, loadingLogin: true }
        case REGISTER_LOADING: return { ...state, loadingRegister: true }
        default: return state;
    }
}