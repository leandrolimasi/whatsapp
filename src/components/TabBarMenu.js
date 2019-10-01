import React from 'react';
import { View, Text, StatusBar, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { enableContactRegister } from '../actions/AppActions';
import firebase from 'firebase';

const TabBarMenu = props => (
    <View style={{ backgroundColor: "#115E54", elevation: 4, marginBottom: 6 }}>
        <StatusBar backgroundColor="#114D44" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ height: 100, justifyContent: "center" }}>
                <Text style={{ color: "#FFF", fontSize: 20, marginLeft: 20 }}>Whatsapp Clone</Text>
            </View>
            <View style={{ flexDirection: "row", marginRight: 20 }}>
                <View style={{ width: 50, justifyContent: "center", alignItems: "center" }}>
                    <TouchableHighlight onPress={() => {
                        Actions.addContacts();
                        props.enableContactRegister();
                    }} underlayColor="#114D44">
                        <Image source={require('../imgs/add-contacts.png')} />
                    </TouchableHighlight>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <TouchableHighlight onPress={() =>
                        firebase.auth().signOut().then(() => Actions.formLogin())
                    }>
                        <Text style={{ fontSize: 20, color: "#FFF" }} >Logout</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        <TabBar {...props} style={{ backgroundColor: "#115E54", elevation: 0 }} />
    </View>
)

export default connect(null, { enableContactRegister })(TabBarMenu);