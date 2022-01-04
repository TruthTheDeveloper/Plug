/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback, FC} from 'react';
import {View, FlatList, BackHandler} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/index';
import * as actionTypes from '../../redux/actions/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Components
import {Header, Loader, ScrollLoader, ErrorScreen} from '../../components/index';

import ProfileItem from './components/ProfileItem';

// import Profile from './components/Profile';
// import DetailsDiv from './components/DetailsDiv';


//Imported Images
const girl1 = require('../../assets/images/girl.jpg');
const girl2 = require('../../assets/images/girl1.jpg');
const girl3 = require('../../assets/images/girl2.jpg');
const girl4 = require('../../assets/images/girl3.jpg');
const girl5 = require('../../assets/images/girl4.jpg');
const girl6 = require('../../assets/images/girl5.jpg');



interface homeProps {
  navigate: any
}
const HomeScreenView:FC<homeProps> = React.memo(({navigate}):JSX.Element => {
    const [pageNum, setPageNum] = useState(1);
    const dispatch = useDispatch();
    const [initialPageNum] = useState(1);
    // const [socketId, setSocketId] = useState()
    const profileData = useSelector((state:any) => state.profileReducer.profileData);
    const isLoading = useSelector((state:any) => state.profileReducer.allProfileLoading);
    // const indx = useSelector((state: any) => state.generalReducer.index);
    // const showCard = useSelector((state: any) => state.generalReducer.showCard);

    // console.log(profileData)

  const [user, setUser] = useState([
    {username: 'kira', profilePic: girl1}
  ])

  // console.log(profileData, 'this data');

    // console.log(profileData, 'this data');

    useEffect(() => {
        // dispatch({type:actionTypes.REFRESH_HOME_PAGE, profileData:[]});
          dispatch(actions.getAllProfile(initialPageNum));
          setPageNum(2);
          let userId : any = null;
          const getToken = async() => {
            userId = await AsyncStorage.getItem('profileId');
           if (userId){
               console.log('meet');
               dispatch(actions.retrieveProfileDetail(userId));
           } else {
               console.log('no user id');
       }

       };
       getToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    const getNewList = useCallback(() => {
      if (pageNum > 1){
        dispatch(actions.getAllProfile(pageNum));
      }
      setPageNum(prev => prev + 1);
    },[dispatch, pageNum]);

  const [] = useState([
    {username: 'kendall_jenner', level: 400, department: 'English', image: girl1, availability: true, details: 'Looking for a sharp looking roomate, one who is NOT A JEW PERSON jkdkd dkmdldd mlsmlss ,m,mdd  kmlms ,dmdld mlmsllsd fdflkdfl flflkf lklf fmllf mflmlf f,mlfm fmlflf flmfmdfl flmdflmdf dfmlmdf fdmdglmdg glmdgldgmm' },
    {username: 'marysmith', level: 100, department: 'Law', image: girl2, availability: true, details: 'Looking for a roomate who can clean and cook, and also one who is NOT A JEW PERSON'},
    {username: 'clarris', level: 100, department: 'Chemistry', image: girl3, availability: true, details: 'Looking for a sharp looking roomate, one who is NOT A JEW PERSON'},
    {username: 'officialSasha', level: 200, department: 'Computer Science', image: girl4, availability: true, details: 'Looking for a roomate who can clean and cook, and also one who is NOT A JEW PERSON'},
    {username: 'poppins', level: 100, department: 'Geography', image: girl5, availability: true, details: 'Looking for a sharp looking roomate, one who is NOT A JEW PERSON'},
    {username: 'queenjanedoe', level: 300, department: 'Statistics', image: girl6, availability: true, details: 'Looking for a roomate who can clean and cook, and also one who is NOT A JEW PERSON'},
  ]);

  const goBack = () => {
    dispatch({type: actionTypes.SHOW_CARDS, value: false});
    return true;
  };

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
  )

  return (
    <View>
      <Header label="All Students" />
      {isLoading ? <Loader/> : <FlatList
      // horizontal={true}
            key={'_'}
            numColumns={2}
            data={profileData}
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
            ListFooterComponent={() => scrollLoaderComponent }
            /> }
    </View>
  );
});


export default HomeScreenView;
