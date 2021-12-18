/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import SignupScreensView from './SignupScreensView';
import Navigator from '../../navigation/navigation/Navigators';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';


const SignupScreensContainer = () => {
  const [postSucess, setPostSucess]:any = useState(false);

  // const getSuccess = async () => {
  //   let setSucess : any = null;
  //   setSucess = JSON.parse(await AsyncStorage.getItem('success') || '{}');
  //   if (setSucess !== null){
  //     setPostSucess(true);
  //   }
  // };
  const success = useSelector((state:any)=> state.profileReducer.profileId);
  console.log(success, 'your sucess id')

  useEffect(() => {
    const getSuccess = async () => {
      let setSucess : any = null;
      // setSucess = JSON.parse(await AsyncStorage.getItem('profileId') || '{}')
      setSucess = await AsyncStorage.getItem('profileId');
      if (setSucess){
        setPostSucess(true);
      }
    };
    getSuccess();
  },[postSucess]);

  return (
     <View>
       {success || postSucess ? <Navigator/> : <SignupScreensView/> }
     </View>
     );
};

export default SignupScreensContainer;
