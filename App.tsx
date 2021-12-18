/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StatusBar} from 'react-native';


import Navigator from './App/navigation/navigation/Navigators';
import MainScreen from './App/screens/MainScreen';

const App = () => {

  return (
    <View>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Navigator />
        {/* <MainScreen/> */}
    </View>
  );
};

export default App;
