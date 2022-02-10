/* eslint-disable prettier/prettier */
import React, {useEffect, useState}  from 'react';
import {View, StatusBar} from 'react-native';
import Navigator from './App/navigation/navigation/Navigators';

import {useSelector} from 'react-redux';

// import Navigator from './App/navigation/navigation/Navigators';
import MainScreen from './App/screens/MainScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import io from 'socket.io-client';

let newSocket : any;

const App = () => {
  const profileIdData = useSelector(
    (state:any) => state.profileReducer.profileIdData,
  );
  const socketId = profileIdData !== null ? profileIdData.socketId : null;

  useEffect(() => {
    if (socketId !== null){
      newSocket = io('https://findplug.herokuapp.com',{query:{id:socketId}});
      newSocket.on('connect', () => {
        console.log('connected from homeScreen');
        newSocket.emit('chat', 'can we chat');
      });
    }

    return () => {
      if (newSocket){
        newSocket.off('receive');
        newSocket.disconnect();
        // newSocket.emit('offline', receiverIdentity, socketId);
      }
    };
  },[socketId]);








  const [getToken, setToken]:any = useState();
  const success = useSelector((state:any)=> state.profileReducer.profileId);
  // const authToken = useSelector((state:any)=> state.authReducer.token);
  console.log(success, 'success');

  useEffect(() => {
    AsyncStorage.getItem('token').then((result) => {
      setToken(result);
    });
    console.log(getToken, 'token');
  },[getToken]);


  return (
    <View>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {/* <Navigator /> */}
        {getToken !== null ? <Navigator/> : <MainScreen/>}
    </View>
  );
};

export default App;
