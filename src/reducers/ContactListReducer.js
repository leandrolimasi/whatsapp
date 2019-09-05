import { LIST_CONTACT_USER } from '../constants/TypeConstants';

const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_CONTACT_USER:
            return action.payload;
        default: return state;
    }
}