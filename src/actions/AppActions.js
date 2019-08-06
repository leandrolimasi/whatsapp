import firebase from "firebase";
import base64 from "base-64";
import { MODIFY_ADD_CONTACT_EMAIL, ADD_CONTACT } from '../constants/TypeConstants';

export const modifyAddContactEmail = (text) => {
    return {
        type: MODIFY_ADD_CONTACT_EMAIL,
        payload: text
    }
}

export const addContact = email => {
    let emailb64 = base64.encode(email);
    firebase.database().ref(`/contact/${emailb64}`)
        .once('value')
        .then(snapshot => {
            if (snapshot.val()) {
                console.log('user registered');
            } else {
                console.log('user not registered');
            }
        });
    return {
        type: ADD_CONTACT,
        payload: email
    }
}