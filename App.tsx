/* eslint-disable prettier/prettier */
import React, {useEffect, useState}  from 'react';
import {View, StatusBar} from 'react-native';
import Navigator from './App/navigation/navigation/Navigators';

import {useSelector} from 'react-redux';






// import Navigator from './App/navigation/navigation/Navigators';
import MainScreen from './App/screens/MainScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [getToken, setToken]:any = useState(null);
  const success = useSelector((state:any)=> state.profileReducer.profileId);
  const authToken = useSelector((state:any)=> state.authReducer.token);
  console.log(success, 'success');
  console.log(getToken, 'token');

  useEffect(() => {
    AsyncStorage.getItem('token').then((result) => {
      setToken(result);
    });
  },[]);


  return (
    <View>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {/* <Navigator /> */}
        {getToken !== null || authToken !== null && success !== null ? <Navigator/> : <MainScreen/>}
    </View>
  );
};

export default App;