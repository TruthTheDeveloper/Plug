/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

//component
import AuthScreenContainer from './welcomeScreen/index';
import SignUpScreensContainer from './SignupScreens/index';

//Third party libaries
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigator from '../navigation/navigation/Navigators';



const MainScreen = () => {
  // local state
  const [auth, setAuth] = useState<string | null>();

  //redux state
  const success = useSelector((state:any)=> state.profileReducer.profileId);

  let RenderScreen = null;

  useEffect(() => {
    AsyncStorage.getItem('token').then((result) => {
      setAuth(result);
    });
  },[auth]);

  console.log(auth, ' token');


  // if user token  exist and user has not added profile
  if (auth !== null && success === null){
    RenderScreen = <SignUpScreensContainer/>;

    // if user token does not exist and user has not added a profile
  } else if (auth === null && success === null ) {
    RenderScreen = <AuthScreenContainer/>;

    // if user token exist and user has a added a profile
  } else if (auth !== null && success !== null){
    RenderScreen = <Navigator/>;
  }

  return (
    <View>
        {RenderScreen}
    </View>
  );
};


export default MainScreen;
