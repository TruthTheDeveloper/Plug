/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AuthScreenContainer from './welcomeScreen/index';
import SignUpScreensContainer from './SignupScreens/index';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';



const MainScreen = () => {
  const [auth, setAuth]:any = useState(false);

  // const getToken = async () => {
  //   let authenticate = null;
  //   authenticate = await AsyncStorage.getItem('token');
  //   if (authenticate !== null){
  //     setAuth(true);
  //   }
  // };

  useEffect(() => {
    const getToken = async () => {
      let authenticate = null;
      authenticate = await AsyncStorage.getItem('token');
      if (authenticate){
        setAuth(true);
      }
    };
    getToken();
  },[auth]);

  const authToken = useSelector((state:any)=> state.authReducer.token);
  return (
    <View>
        { auth || authToken ? <SignUpScreensContainer/> : <AuthScreenContainer/>}
    </View>
  );
};


export default MainScreen;
