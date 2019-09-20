import { LIST_MESSAGE_USER } from '../constants/TypeConstants';

const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_MESSAGE_USER:
            return action.payload;
        default: return state;
    }
}