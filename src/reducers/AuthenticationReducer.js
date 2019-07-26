const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    registerError: '',
    authenticateError: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modify_email': return { ...state, email: action.payload }
        case 'modify_password': return { ...state, password: action.payload }
        case 'modify_name': return { ...state, name: action.payload }
        case 'register_user_error': return { ...state, registerError: action.payload }
        case 'register_user_success': return { ...state, name: '', password: '' }
        case 'authenticate_error': return { ...state, authenticateError: action.payload }
        case 'authenticate_success': return { ...state, authenticateError: '' }
        default: return state;
    }
}