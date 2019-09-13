import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import Welcome from './components/Welcome';
import Home from './components/Home';
import AddContacts from './components/AddContacts';
import Messages from './components/Messages';

export default props => (
    <Router navigationBarStyle={{backgroundColor: '#115E54'}} titleStyle={{color: '#FFF'}}>
        <Stack key="root" >
            <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={true} />
            <Scene key='formRegister' component={FormRegister} title="Register" hideNavBar={false} />
            <Scene key='welcome' component={Welcome} title="Welcome" hideNavBar={true} />
            <Scene key='home' component={Home} title="Home" hideNavBar={true} />
            <Scene key='addContacts' component={AddContacts} title="Add Contacts" hideNavBar={false} />
            <Scene key='message' component={Messages} title="Messages" hideNavBar={false} />
        </Stack>
    </Router>
);
