/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {SignupScreensContainer} from './App/index';
import { AuthScreenContainer } from './App/index';

let authenticated:any = null;
console.log(authenticated, 'first');

const getToken = async () => {
  authenticated = await AsyncStorage.getItem('token');
  console.log(authenticated);

};

const App = () => {
  console.log(getToken(), 'your log');
  return (
    <View>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {authenticated !== null ? <SignupScreensContainer /> : <AuthScreenContainer/>}
        <AuthScreenContainer/>
    </View>
  );
};

export default App;
