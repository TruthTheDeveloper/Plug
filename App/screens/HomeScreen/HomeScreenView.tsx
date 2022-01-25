/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect, FC, useRef} from 'react';
import {View, FlatList} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/index';
import * as actionTypes from '../../redux/actions/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ErrorScreen } from '../../components/index';
import PushNotification, {Importance} from 'react-native-push-notification';

//Components
import {Header, Loader, ScrollLoader} from '../../components/index';

import ProfileItem from './components/ProfileItem';
import io from 'socket.io-client';

// import Profile from './components/Profile';
// import DetailsDiv from './components/DetailsDiv';

//Imported Images

interface homeProps {
  navigate: any
}



let newSocket : any;
const HomeScreenView:FC<homeProps> = React.memo(({navigate}):JSX.Element => {

    const [pageNum, setPageNum] = useState(2);
    const [reload, setReload] = useState(false);
    const dispatch = useDispatch();
    const [initialPageNum] = useState(1);
    // const [socketId, setSocketId] = useState()
    const profileData = useSelector((state:any) => state.profileReducer.profileData);
    const isLoading = useSelector((state:any) => state.profileReducer.allProfileLoading);
    const messageCount = useRef(0);
    const isRead = useSelector((state:any) => state.chatReducer.isRead);

    const receiverIdentity = useSelector((state:any) => state.chatReducer.receiverId);
    const online = useSelector((state:any) => state.chatReducer.isOnline);
    // const networkError = useSelector((state:any) => state.profileReducer.network);
    const [connected, setConnected] : any = useState(true);
    const profileIdData = useSelector(
      (state:any) => state.profileReducer.profileIdData,
    );

    const getAllConversation = useSelector((state:any) => state.messageReducer.AllConversation);
    let homeScreenRender = null;






    const reloadHandler = () => {
      console.log('press');
      setReload(prev => !prev);
    };



    // const indx = useSelector((state: any) => state.generalReducer.index);
    // const showCard = useSelector((state: any) => state.generalReducer.showCard);

    console.log(profileIdData);


    // console.log(profileData, 'this data');

    // console.log(profileData, 'this data');

    useEffect(() => {
      dispatch(getAllConversation())
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
      // dispatch({type:actionTypes.RESET_ALL_PROFILE, profileData:[]});
        // dispatch({type:actionTypes.REFRESH_HOME_PAGE, profileData:[]});
        AsyncStorage.getItem('profileId').then(result => {
          if (result !== null){
            // console.log(result, 'result')
            if (profileData.length < 1){
              console.log('he yer', result);
                dispatch(actions.getAllProfile(initialPageNum, result));
            }
            dispatch(actions.retrieveProfileDetail(result));
          }
        });

          // let userId : any = null;

      //     const getToken = async() => {
      //       userId = await AsyncStorage.getItem('profileId');
      //      if (userId){
      //          console.log('meet');
      //          dispatch(actions.retrieveProfileDetail(userId));
      //      } else {
      //          console.log('no user id');
      //     }

      //  };
      //  getToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch, initialPageNum, profileData.length, reload]);


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
    if (socketId !== null){
      newSocket = io('https://findplug.herokuapp.com',{query:{id:socketId}});
      newSocket.on('connect', () => {
        newSocket.on('offlineMessage', (Sid: string, senderUsername:string, senderImage:string,  Rid:string, receiverUsername:string, receiverImage:string, message:string, time:any) => {
          let data = {
            senderId: Sid,
            senderUsername:senderUsername,
            senderImage:senderImage,
            receiverId:Rid,
            receiverUsername:receiverUsername,
            receiverImage:receiverImage,
            message:message,
            time:time,
            online:online,
            isRead:isRead,
          };

          const updatechatContact = updatedContactData.filter(
            (e: {receiverId: string}) => e.receiverId !== data.receiverId && e.receiverId !== data.senderId);
          updatechatContact.unshift(data);
          dispatch({
            type: actionTypes.CHAT_CONTACT,
            chatContactData: updatechatContact,
          });
        });
        console.log('connected from homeScreen')
        newSocket.emit('chat', 'can we chat');
        newSocket.on('online', (users:any) => {
          for (const i in users){
            if (users[i] === receiverIdentity){
              console.log('online');
              dispatch({
                type: actionTypes.ISONLINE,
                isOnline:true,
              });
            }
          }
        });


        dispatch({
          type:actionTypes.ISREAD,
          isRead:false,
        });

        newSocket.on('receive', (Sid: string, senderUsername:string, senderImage:string,  Rid:string, receiverUsername:string, receiverImage:string, message:string, time:any) => {
          messageCount.current = messageCount.current + 1;
          console.log('home get');
          let data = {
            senderId: Sid,
            senderUsername:senderUsername,
            senderImage:senderImage,
            receiverId:Rid,
            receiverUsername:receiverUsername,
            receiverImage:receiverImage,
            message:message,
            time:time,
            online:online,
            isRead:isRead,
          };

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
          title: `New Message from ${data.receiverUsername === profileIdData.username ? data.senderUsername : data.receiverUsername}`, // (optional)
          message: data.message,
          picture: data.receiverUsername === profileIdData.username ? data.senderImage : data.receiverImage,
        });

          const updatechatContact = updatedContactData.filter(
            (e: {receiverId: string}) => e.receiverId !== data.receiverId && e.receiverId !== data.senderId);
          updatechatContact.unshift(data);
          dispatch({
            type: actionTypes.CHAT_CONTACT,
            chatContactData: updatechatContact,
          });
        });
      });

    }

    return () => {
      if (newSocket){
        newSocket.off('receive');
        newSocket.disconnect();
        newSocket.emit('offline', receiverIdentity, socketId);
      }

    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch, socketId, updatedContactData]);


  // const goBack = () => {
  //   dispatch({type: actionTypes.SHOW_CARDS, value: false});
  //   return true;
  // };

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
