/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {store} from './index';
import { persistor } from './index';


import Navigator from './App/navigation/navigation/Navigators';
// import MainScreen from './App/screens/MainScreen';

const App = () => {

  return (
    <View>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {/* <MainScreen/> */}
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
    </View>
  );
};

export default App;