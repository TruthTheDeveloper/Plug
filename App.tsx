/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StatusBar} from 'react-native';
import { AuthScreenContainer } from './App/index';
import { SignupScreensContainer } from './App/index';
import {useSelector} from 'react-redux';


const App = () => {

  const authToken = useSelector((state:any) => state.authReducer.token);
  return (
    <View>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {authToken !== null ? <SignupScreensContainer/> : <AuthScreenContainer/>}
    </View>
  );
};

export default App;
