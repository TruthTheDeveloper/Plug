/* eslint-disable prettier/prettier */
import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import AuthScreenContainer from './welcomeScreen/index';
import SignUpScreensContainer from './SignupScreens/index';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';



const MainScreen = () => {
  const [auth, setAuth]:any = useState(false);


  const authToken = useSelector((state:any)=> state.authReducer.token);

  

  // useEffect(() => {
  //   const getToken = useCallback( async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('token');
  //       if (value !== null){
  //         console.log('switch auth to true');
  //         setAuth(true);
  //       } else {
  //         setAuth(false);
  //       }
  //     } catch (e) {
  //       console.log(e, 'failed to get item token');
  //     }
  //   },
  //   [auth, authToken])}
  // },[]);

  return (
    <View>
        { authToken ? <SignUpScreensContainer/> : <AuthScreenContainer/>}
    </View>
  );
};


export default MainScreen;
