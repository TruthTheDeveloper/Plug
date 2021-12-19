/* eslint-disable prettier/prettier */
/**
 * @format
 */
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import authReducer from './App/redux/reducer/auth';
import navReducer from './App/redux/reducer/navigation';
import chatReducer from './App/redux/reducer/chats';
import profileReducer from './App/redux/reducer/profile';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const getAsyncStorage = async () => {
//   axios.defaults.headers.common.Authorization =  await AsyncStorage.getItem('token');
// };

// getAsyncStorage();



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  authReducer: authReducer,
  navReducer: navReducer,
  chatReducer: chatReducer,
  profileReducer:profileReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

const persistor = persistStore(store);



const appUseRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => appUseRedux);
