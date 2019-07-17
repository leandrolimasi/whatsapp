const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    registerError: ''
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'modify_email') {
        return { ...state, email: action.payload }
    }
    if (action.type === 'modify_password') {
        return { ...state, password: action.payload }
    }
    if (action.type === 'modify_name') {
        return { ...state, name: action.payload }
    }
    if (action.type === 'register_user_error') {
        return { ...state, registerError: action.payload }
    }
    return state;
}