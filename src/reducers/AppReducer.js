import { MODIFY_ADD_CONTACT_EMAIL, ADD_CONTACT_ERROR } from '../constants/TypeConstants';

const INITIAL_STATE = {
    addContactEmail: '',
    addContactError: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFY_ADD_CONTACT_EMAIL:
            return { ...state, addContactEmail: action.payload }
        case ADD_CONTACT_ERROR:
            return { ...state, addContactError: action.payload }
        default: return state;
    }
}