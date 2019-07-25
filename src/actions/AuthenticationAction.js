import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import base64 from "base-64";

export const modifyEmail = text => {
  return {
    type: "modify_email",
    payload: text
  };
};

export const modifyPassword = text => {
  return {
    type: "modify_password",
    payload: text
  };
};

export const modifyName = text => {
  return {
    type: "modify_name",
    payload: text
  };
};

export const registerUser = ({ name, email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        let email64 = base64.encode(email);
        firebase.database().ref(`/contact/${email64}`).push({ name })
          .then(value => {
            dispatch(registerUserSuccess());
            Actions.welcome();
          })
          .catch(error => {
            dispatch(registerUserError(error));
          });
      }).catch(error => registerUserError(error, dispatch));
  };
};

export const authenticateUser = ({ email, password }) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(authenticateUserSuccess(user));
        Actions.home();
      }).catch(error => {
        dispatch(authenticateError(error));
      });
  };
};

const registerUserSuccess = () => {
  return {
    type: "register_user_success"
  };
};

const registerUserError = error => {
  return {
    type: "register_user_error",
    payload: error.message
  };
};

const authenticateUserSuccess = value => {
  return {
    type: "authenticate_success"
  };
};

const authenticateError = error => {
  return {
    type: "authenticate_error",
    payload: error.message
  };
};
