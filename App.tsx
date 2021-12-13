/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StatusBar} from 'react-native';

import Navigator from './App/navigation/navigation/Navigators';

import { HomeScreenContainer } from './App/index';

const App = () => {
  return (
    <View>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Navigator />
    </View>
  );
};

export default App;
