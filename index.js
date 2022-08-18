/* eslint-disable prettier/prettier */
/**
 * @format
 */
import React from 'react';
import {AppRegistry, Platform} from 'react-native';

//Third party packages
import axios from 'axios';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NetworkProvider } from 'react-native-offline';

//Redux packages
import { persistStore, persistReducer } from 'redux-persist';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';


// reducers
import authReducer from './App/redux/reducer/auth';
import navReducer from './App/redux/reducer/navigation';
import chatReducer from './App/redux/reducer/chats';
import profileReducer from './App/redux/reducer/profile';
import generalReducer from './App/redux/reducer/generalReducer';
import messageReducer from './App/redux/reducer/message';


import App from './App';
import {name as appName} from './app.json';



axios.defaults.headers.common.Authorization = AsyncStorage.getItem('token').then((result) => {
  return result;
});

// Alternative solution
// const getAsyncStorage = async () => {
//   axios.defaults.headers.common.Authorization =  await AsyncStorage.getItem('token');
// };

// getAsyncStorage();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
};


//Combine all reducres
export const rootReducer = combineReducers({
  messageReducer: messageReducer,
  authReducer: persistReducer(persistConfig, authReducer),
  navReducer: navReducer,
  chatReducer: chatReducer,
  profileReducer:profileReducer,
  generalReducer: generalReducer,
});


// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);



// function for push notification
PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  requestPermissions: Platform.OS === 'ios',
});





const appUseRedux = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NetworkProvider>
      <App />
    </NetworkProvider>
    </PersistGate>
  </Provider>
  );
};

AppRegistry.registerComponent(appName, () => appUseRedux);
