const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'modify_email') {
        return { ...state, email: action.payload }
    }
    if (action.type === 'modify_password') {
        return { ...state, password: action.payload }
    }
    return state;
}