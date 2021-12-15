/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StatusBar} from 'react-native';


import MainScreen from './App/screens/MainScreen';

const App = () => {

  return (
    <View>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <MainScreen/>
    </View>
  );
};

export default App;
