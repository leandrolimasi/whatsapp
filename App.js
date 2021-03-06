import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Routes from './src/Routes';
import reducers from './src/reducers';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class App extends Component {

  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCOdgoOv0bVa-ElYZpesxXeJuwqzUjGUxo",
      authDomain: "whatsapp-382f2.firebaseapp.com",
      databaseURL: "https://whatsapp-382f2.firebaseio.com",
      projectId: "whatsapp-382f2",
      storageBucket: "",
      messagingSenderId: "548259192580",
      appId: "1:548259192580:web:5c8bfa98d7b39af5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    )
  }
}
export default App;