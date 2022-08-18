/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect, FC, useRef} from 'react';
import {View, FlatList} from 'react-native';

//third party libary
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification, {Importance} from 'react-native-push-notification';

// Utitlity Components
import {Header, Loader, ScrollLoader, ErrorScreen} from '../../components/index';

// redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/index';
import * as actionTypes from '../../redux/actions/actionTypes';

// component
import ProfileItem from './components/ProfileItem';
import io from 'socket.io-client';


// helpers
import { backendAdress } from '../../utils/socket/backendAdress';

interface homeProps {
  navigate: any
}

let newSocket : any;
const HomeScreenView:FC<homeProps> = React.memo(({navigate}):JSX.Element => {

    // set dispatch
    const dispatch = useDispatch();

    // Local state
    const [pageNum, setPageNum] = useState(2);
    const [reload, setReload] = useState(false);
    const [initialPageNum] = useState(1);
    const [connected, setConnected] = useState<boolean | null>(true);

    // Global state
    const profileData = useSelector((state:any) => state.profileReducer.profileData);
    const isLoading = useSelector((state:any) => state.profileReducer.allProfileLoading);
    const messageCount = useRef(0);
    const isRead = useSelector((state:any) => state.chatReducer.isRead);
    const online = useSelector((state:any) => state.chatReducer.isOnline);
    const profileIdData = useSelector(
      (state:any) => state.profileReducer.profileIdData,
    );

    useEffect(() => {
      // check for network connection and set the connected stated
      const unsubscribe = NetInfo.addEventListener(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
        setConnected(state.isConnected);
      });
      unsubscribe();

      NetInfo.fetch().then(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
        setConnected(state.isConnected);
      });


      // if user profile data exist and all profile data exist get the next set of data else get the the user profile data
      AsyncStorage.getItem('profileId').then(result => {
        if (result !== null){
          if (profileData.length < 1){
              dispatch(actions.getAllProfile(initialPageNum, result));
          }
          dispatch(actions.retrieveProfileDetail(result));
        }
      });

    },[dispatch, initialPageNum, profileData, reload]);


    //functions
    const reloadHandler = () => {
      console.log('press');
      setReload(prev => !prev);
    };

    console.log(profileIdData);

    let homeScreenRender = null;

    // check if network connection available
    const getNewList = () => {
      const unsubscribe = NetInfo.addEventListener(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
        setConnected(state.isConnected);
      });
      unsubscribe();
      NetInfo.fetch().then(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
        setConnected(state.isConnected);
      });
        if (connected){
          dispatch(actions.getAllProfile(pageNum, profileIdData._id));
          setPageNum(prev => prev + 1);
        } else {
          homeScreenRender = <ErrorScreen reload={reloadHandler}/>;
        }
    };

  const socketId = profileIdData !== null ? profileIdData.socketId : null;
  const updatedContactData = useSelector(
    (state:any) => state.profileReducer.chatContactData,
  );
  useEffect(() => {
    // if user socket id exist connect to the socket
    console.log('socket is not null');
    if (socketId !== null){
      newSocket = io(backendAdress,{query:{id:socketId}});
      newSocket.on('connect', () => {
        console.log('connected from homeScreen');
      });

      // listen for socket incoming message event
      newSocket.on('receiveMessage', (messageData:any) => {
        messageCount.current = messageCount.current + 1;
        console.log('am receivin the message');
        let data = {
          // messageId:messageId,
          senderId: messageData.sender.senderSocketId,
          senderUsername:messageData.sender.username,
          senderImage:messageData.sender.image,
          receiverId:messageData.receiver.receiverSocketId,
          receiverUsername:messageData.receiver.username,
          receiverImage:messageData.receiver.image,
          message:messageData.message.msg,
          time:messageData.time,
          online:online,
          isRead:isRead,
        };

        // send a push notification once message in received
        PushNotification.createChannel(
          {
            channelId: 'channel-id', // (required)
            channelName: 'My channel', // (required)
            channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
            playSound: false, // (optional) default: true
            soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
            importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
          },
          (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );

      PushNotification.localNotification({
        channelId:'channel-id',
        title: `New Message from ${messageData.receiver.username === profileIdData.username ? messageData.sender.username : messageData.receiver.username}`, // (optional)
        message: messageData.message.msg,
        picture: messageData.receiver.username === profileIdData.username ? messageData.sender.image : messageData.receiver.image,
      });

      /*
        if a new message enters update the chat contact by checking the contact list if the message data(probabaly sender or receiver) alreday exist if it exist filter it and update it,
        mainly checks if sender is not you add the sender to the contact and if the reciver is not you add the receiver
       */
      // filter all data except data which snder  is not equal to the incoming data senderId and data which reciverId is not equal to incoming senderId
      const updatechatContact = updatedContactData.filter(
        (e:{receiverId:string, senderId:string}) => e.senderId !== data.senderId && e.receiverId !== data.senderId
      );
      // const updatechatContact = updatedContactData.filter(
      //   (e: {receiverId: string}) => e.receiverId !== data.receiverId && e.receiverId !== data.senderId);
      updatechatContact.unshift(data);
      dispatch({
        type: actionTypes.CHAT_CONTACT,
        chatContactData: updatechatContact,
      });
    });

    }

    return () => {
      if (newSocket){
        newSocket.off('receive');
        newSocket.disconnect();
      }

    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch, socketId]);


  const openGrid = (e: number) => {
    navigate();
    dispatch({type: actionTypes.SHOW_CARDS, value: true});
    dispatch({type: actionTypes.INDEX, value: e });
    dispatch({type: actionTypes.LARGE_CARD_DATA, value: profileData});
  };

  console.log(profileData.length);

  const scrollLoaderComponent = (
    <>
      {profileData.length !== 0 && <ScrollLoader />}
    </>
  );



  if (!connected){
    homeScreenRender = <ErrorScreen reload={reloadHandler}/>;
  } else if (isLoading){
    homeScreenRender = <Loader/>;
  } else {
    homeScreenRender = <FlatList
    // horizontal={true}
          key={'_'}
          numColumns={2}
          data={profileData}
          // keyExtractor={item => item._id}
          renderItem={({ item, index }) => <ProfileItem
            username={item.username}
            verified={item.availability}
            level={item.level}
            department={item.department}
            image={item.profilePic}
            index={index}
            setIndex={openGrid}
            />
          }
          style={{ marginBottom: 37 }}
          onEndReached={getNewList}
          initialNumToRender={11}
          ListFooterComponent={() => scrollLoaderComponent }
          />;
  }

  return (
    <View>
      <Header label="All Students" />
      {homeScreenRender}
    </View>
  );
});


export default HomeScreenView;
