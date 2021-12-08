/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StatusBar} from 'react-native';

import {WelcomeScreenContainer} from './App/index';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <WelcomeScreenContainer />
    </View>
  );
};

export default App;
