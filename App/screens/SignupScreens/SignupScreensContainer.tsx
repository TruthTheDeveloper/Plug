/* eslint-disable prettier/prettier */
import React from 'react';
import SignupScreensView from './SignupScreensView';
import Navigator from '../../navigation/navigation/Navigators';
import {useSelector} from 'react-redux';
import { View } from 'react-native';


const SignupScreensContainer = () => {
  const success = useSelector((state:any)=> state.profileReducer.success);

  return (
     <View>
       {success ? <Navigator/> : <SignupScreensView/> }
     </View>
     );
};

export default SignupScreensContainer;
