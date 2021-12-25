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
  const success = useSelector((state:any)=> state.profileReducer.profileId);

  let RenderScreen = null;

  useEffect(() => {
    AsyncStorage.getItem('token').then((result) => {
      setAuth(result);
    });
  },[auth, authToken]);

  console.log(authToken);



  if (auth !== null && success === null){
    RenderScreen = <SignUpScreensContainer/>;
  } else if (auth === null && success === null ) {
    RenderScreen = <AuthScreenContainer/>;
  }

  return (
    <View>
        {RenderScreen}
    </View>
  );
};


export default MainScreen;
