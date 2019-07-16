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
    firebase.auth().createUserWithEmailAndPassword(email, password).then(user => console.log(user)).catch(error => console.log(error));
    return {
        type: 'register_user'
    }
}
