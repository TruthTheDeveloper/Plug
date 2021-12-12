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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  authReducer: authReducer,
  navReducer: navReducer
});

console.log(typeof authReducer, 'its type');

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

const appUseRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => appUseRedux);
