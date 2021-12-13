/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainScreen from './App/screens/MainScreen';

let authenticated : any = null
const App = () => {
  const [auth, setAuth]:any = useState(false);

  const getToken = async () => {
    console.log('called')
    try {
      authenticated = await AsyncStorage.getItem('token');
      console.log(authenticated)
      if (authenticated !== null){
        console.log('tryed here')
        setAuth(true);
      }
    } catch (err){
      console.log('it got here')
      setAuth(false);
    }

  };
  getToken();
  return (
    <View>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <MainScreen authenticate={auth}/>
    </View>
  );
};

export default App;
