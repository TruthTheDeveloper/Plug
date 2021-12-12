/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StatusBar} from 'react-native';

import SignUpScreensContainer from './App/screens/SignupScreens/index';

const App = () => {
  return (
    <View>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <SignUpScreensContainer />
    </View>
  );
};

export default App;
