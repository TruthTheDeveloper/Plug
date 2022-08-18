/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import SignupScreensView from './SignupScreensView';
import Navigator from '../../navigation/navigation/Navigators';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';


const SignupScreensContainer = () => {
  const [postSucess, setPostSucess] = useState<string | null>(null);

  //gloabl state to check if user has profile data (their profile id included)
  const success = useSelector((state:any)=> state.profileReducer.profileId);

  let RenderScreen = null;

  console.log('success id', success);

  useEffect(() => {

    AsyncStorage.getItem('profileId').then((result) => {
      setPostSucess(result);
    });

  },[postSucess, success]);


  // if user profile id exist
  if (postSucess !== null){
    RenderScreen = <Navigator/>;
  } else {
    RenderScreen = <SignupScreensView/>;
  }

  return (
     <View>
       { RenderScreen }
     </View>
     );
};

export default SignupScreensContainer;
