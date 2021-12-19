/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AuthScreenContainer from './welcomeScreen/index';
import SignUpScreensContainer from './SignupScreens/index';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';



const MainScreen = () => {
  const [auth, setAuth]:any = useState(null);


  const authToken = useSelector((state:any)=> state.authReducer.token);

  let RenderScreen = null;

  useEffect(() => {
    AsyncStorage.getItem('token').then((result) => {
      setAuth(result);
    });
  },[auth, authToken]);


  if (auth){
    RenderScreen = <SignUpScreensContainer/>;
  } else {
    RenderScreen = <AuthScreenContainer/>;
  }

  return (
    <View>
        {RenderScreen}
    </View>
  );
};


export default MainScreen;
