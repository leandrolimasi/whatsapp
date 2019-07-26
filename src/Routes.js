import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import Welcome from './components/Welcome';
import Home from './components/Home';

export default props => (
    <Router navigationBarStyle={{backgroundColor: '#115E54'}} titleStyle={{color: '#FFF'}}>
        <Stack key="root" >
            <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={true} />
            <Scene key='formRegister' component={FormRegister} title="Register" hideNavBar={false} />
            <Scene key='welcome' component={Welcome} title="Welcome" />
            <Scene key='home' component={Home} title="Home" />
        </Stack>
    </Router>
);
