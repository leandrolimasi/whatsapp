import firebase from 'firebase';

export const modifyEmail = (text) => {
    return {
        type: 'modify_email',
        payload: text
    }
};

export const modifyPassword = (text) => {
    return {
        type: 'modify_password',
        payload: text
    }
}

export const modifyName = (text) => {
    return {
        type: 'modify_name',
        payload: text
    }
}

export const registerUser = ({ name, email, password }) => {
    return dispatch => {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => registerUserSuccess(dispatch))
            .catch(error => registerUserError(error, dispatch));
    }
}

const registerUserSuccess = (dispatch) => {
    dispatch(
        {
            type: 'register_user_success'
        }
    )
}

const registerUserError = (error, dispatch) => {
    dispatch(
        {
            type: 'register_user_error',
            payload: error.message
        }
    )
}
