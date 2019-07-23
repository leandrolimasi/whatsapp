import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import base64 from 'base-64';

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
            .then(user => {
                let email64 = base64.encode(email);
                firebase.database().ref('/contact/' + email64).push({ name }).then(value => registerUserSuccess(dispatch))
                    .catch(error => registerUserError(error, dispatch));

            })
            .catch(error => registerUserError(error, dispatch));
    }
}

const registerUserSuccess = (dispatch) => {
    dispatch({ type: 'register_user_success' })
    Actions.welcome();
}

const registerUserError = (error, dispatch) => {
    dispatch(
        {
            type: 'register_user_error',
            payload: error.message
        }
    )
}
