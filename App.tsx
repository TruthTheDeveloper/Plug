/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StatusBar} from 'react-native';

import {SignupScreensContainer} from './App/index';

const App = () => {
  return (
    <View>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <SignupScreensContainer />
    </View>
  );
};

export default App;
