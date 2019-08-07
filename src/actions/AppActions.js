import firebase from "firebase";
import base64 from "base-64";
import _ from 'lodash';
import { MODIFY_ADD_CONTACT_EMAIL, ADD_CONTACT, ADD_CONTACT_ERROR } from '../constants/TypeConstants';

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
                    firebase.database().ref(`/user_contact/${emailUserB64}`)
                        .push({ email, name: userData.name})
                        .then(() => { console.log('success') })
                        .catch(() => { console.log('error') });

                } else {
                    dispatch({ type: ADD_CONTACT_ERROR, payload: 'invalid user!'})
                }
            });
    }

    
}