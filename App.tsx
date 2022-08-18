/* eslint-disable prettier/prettier */
import React, {useEffect, useState}  from 'react';
import {View, StatusBar} from 'react-native';

//Third party libaries
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import io from 'socket.io-client';

// helpers
import { backendAdress } from './App/utils/socket/backendAdress';

// Navigators
import MainScreen from './App/screens/MainScreen';
import Navigator from './App/navigation/navigation/Navigators';

//Initializes the socket
let newSocket : any;

const App = () => {
  const profileIdData = useSelector(
    (state:any) => state.profileReducer.profileIdData,
  );

  // if user profile data exist get the user profile socketId
  const socketId = profileIdData !== null ? profileIdData.socketId : null;

  useEffect(() => {

    if (socketId !== null){
      newSocket = io(backendAdress,{query:{id:socketId}});

      // socket listen for a connection event
      newSocket.on('connect', () => {
        console.log('connected from App');
        newSocket.emit('chat', 'can we chat');
      });

    }

    return () => {
      // cleanup function
      if (newSocket){
        // if user unmount this component disconect this socket
        newSocket.disconnect();

      }
    };

  },[socketId]);



  const [getToken, setToken] = useState<string | null>();
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
        {getToken !== null ? <Navigator/> : <MainScreen/>}
    </View>
  );
};

export default App;
