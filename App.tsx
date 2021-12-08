import React from 'react';
import { Text, View, StatusBar } from 'react-native';

import {WelcomeScreenContainer, SignupScreensContainer} from './App/index';

const App = () => {
  return (
    <View>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <WelcomeScreenContainer />
    </View>
  );
}

export default App;