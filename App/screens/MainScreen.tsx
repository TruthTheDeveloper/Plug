/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AuthScreenContainer from './welcomeScreen/index';
import SignUpScreensContainer from './SignupScreens/index';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';



const MainScreen = () => {
  const [auth, setAuth]:any = useState(false);

  const getToken = async () => {
    const authenticate = await AsyncStorage.getItem('token');
    setAuth(authenticate);
  };

  useEffect(() => {
    getToken();
  },[]);

  const authToken = useSelector((state:any)=> state.authReducer.token);
  console.log(auth, authToken);
  return (
    <View>
        { auth || authToken ? <SignUpScreensContainer/> : <AuthScreenContainer/>}
    </View>
  );
};

// const MainScreen = () => {
//   useEffect(() => {

//   },[])

//   return (
//         <View>
//             {authenticate === true || authToken !== null ? <SignUpScreensContainer/> : <AuthScreenContainer/>}
//         </View>
//       );
// }

export default MainScreen;
