/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StatusBar} from 'react-native';

import { HomeScreenContainer } from './App/index';

const App = () => {
  return (
    <View>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <HomeScreenContainer />
    </View>
  );
};

export default App;
