import { MODIFY_ADD_CONTACT_EMAIL } from '../constants/TypeConstants';

const INITIAL_STATE = {
    addContactEmail: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFY_ADD_CONTACT_EMAIL:
            return { ...state, addContactEmail: action.payload }
        default: return state;
    }
}