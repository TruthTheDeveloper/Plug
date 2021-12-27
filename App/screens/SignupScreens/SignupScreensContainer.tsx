/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import SignupScreensView from './SignupScreensView';
import Navigator from '../../navigation/navigation/Navigators';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';


const SignupScreensContainer = () => {
  const [postSucess, setPostSucess]:any = useState(false);

  const success = useSelector((state:any)=> state.profileReducer.profileId);

  let RenderScreen = null;

  useEffect(() => {
    AsyncStorage.getItem('profileId').then((result) => {
      setPostSucess(result);
    });
  },[postSucess, success]);

  if (postSucess){
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
