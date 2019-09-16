import { MODIFY_ADD_CONTACT_EMAIL, ADD_CONTACT_ERROR, ADD_CONTACT_SUCCESS, MODIFY_MESSAGE } from '../constants/TypeConstants';

const INITIAL_STATE = {
    addContactEmail: '',
    addContactError: '',
    contactRegisterResult: false,
    message: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFY_ADD_CONTACT_EMAIL:
            return { ...state, addContactEmail: action.payload }
        case ADD_CONTACT_ERROR:
            return { ...state, addContactError: action.payload }
        case ADD_CONTACT_SUCCESS:
            return { ...state, contactRegisterResult: action.payload, addContactEmail: '' }
        case MODIFY_MESSAGE:
            return { ...state, message: action.payload}
        default: return state;
    }
}