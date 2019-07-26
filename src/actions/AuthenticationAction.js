import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import base64 from "base-64";
import {
  MODIFY_EMAIL,
  MODIFY_PASSWORD,
  MODIFY_NAME,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_ERROR
} from '../constants/TypeConstants';

export const modifyEmail = text => {
  return {
    type: MODIFY_EMAIL,
    payload: text
  };
};

export const modifyPassword = text => {
  return {
    type: MODIFY_PASSWORD,
    payload: text
  };
};

export const modifyName = text => {
  return {
    type: MODIFY_NAME,
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
    type: REGISTER_USER_SUCCESS
  };
};

const registerUserError = error => {
  return {
    type: REGISTER_USER_ERROR,
    payload: error.message
  };
};

const authenticateUserSuccess = value => {
  return {
    type: AUTHENTICATE_SUCCESS
  };
};

const authenticateError = error => {
  return {
    type: AUTHENTICATE_ERROR,
    payload: error.message
  };
};
