import firebase from "firebase";
import base64 from "base-64";
import _ from 'lodash';
import { MODIFY_ADD_CONTACT_EMAIL, ADD_CONTACT, ADD_CONTACT_ERROR, ADD_CONTACT_SUCCESS, LIST_CONTACT_USER } from '../constants/TypeConstants';

export const modifyAddContactEmail = (text) => {
    return {
        type: MODIFY_ADD_CONTACT_EMAIL,
        payload: text
    }
}

export const addContact = email => {

    return dispatch => {
        let emailb64 = base64.encode(email);
        firebase.database().ref(`/contact/${emailb64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    const userData = _.first(_.values(snapshot.val()));
                    const { currentUser } = firebase.auth();
                    let emailUserB64 = base64.encode(currentUser.email);
                    firebase.database().ref(`/contact_user/${emailUserB64}`)
                        .push({ email, name: userData.name })
                        .then(() => { addContactSuccess(dispatch);})
                        .catch(error => { addContactError(error.message, dispatch); });

                } else {
                    dispatch({ type: ADD_CONTACT_ERROR, payload: 'invalid user!' })
                }
            });
    }
}

const addContactError = (error, dispatch) => {
    dispatch({ type: ADD_CONTACT_ERROR, payload: error })
}

const addContactSuccess = (dispatch) => {
    dispatch({ type: ADD_CONTACT_SUCCESS, payload: true })
}

export const enableContactRegister = () => {
    return { type: ADD_CONTACT_SUCCESS, payload: false }
}

export const contactUserFetch = (dispatch) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        let emailUserB64 = base64.encode(currentUser.email);
        firebase.database().ref(`/contact_user/${emailUserB64}`)
            .on('value', snapshot => {
                dispatch({ type: LIST_CONTACT_USER, payload: snapshot.val() });
            });
    }
}