/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback, FC} from 'react';
import {View, Dimensions, FlatList, BackHandler, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/index';
import * as actionTypes from '../../redux/actions/actionTypes';

//Components
import {Header, Loader} from '../../components/index';

import ProfileItem from './components/ProfileItem';
import Profile from './components/Profile';
import DetailsDiv from './components/DetailsDiv';



//Imported Images
const girl1 = require('../../assets/images/girl.jpg');
const girl2 = require('../../assets/images/girl1.jpg');
const girl3 = require('../../assets/images/girl2.jpg');
const girl4 = require('../../assets/images/girl3.jpg');
const girl5 = require('../../assets/images/girl4.jpg');
const girl6 = require('../../assets/images/girl5.jpg');


const {width} = Dimensions.get('window');

interface homeProps {
  navigate: any
}

const HomeScreenView:FC<homeProps> = React.memo(({navigate}):JSX.Element => {
    const [pageNum, setPageNum] = useState(1);
    const dispatch = useDispatch();
    // const [socketId, setSocketId] = useState()

    const profileData = useSelector((state:any) => state.profileReducer.profileData);
    const indx = useSelector((state: any) => state.generalReducer.index);
    const showCard = useSelector((state: any) => state.generalReducer.showCard);



    // console.log(profileData, 'this data');

    useEffect(() => {
      console.log('got here');
        dispatch({type:actionTypes.REFRESH_HOME_PAGE, profileData:[]});
        dispatch(actions.getAllProfile(pageNum));
        if (pageNum === 1){
          setPageNum(prev => prev + 1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const getNewList = useCallback(() => {
      dispatch(actions.getAllProfile(pageNum));
      setPageNum(prev => prev + 1);
    },[dispatch, pageNum]);

  const goBack = () => {
    dispatch({type: actionTypes.SHOW_CARDS, value: false});
    return true;
  };

  const openGrid = (e: number) => {
    navigate()
    dispatch({type: actionTypes.SHOW_CARDS, value: true});
    dispatch({type: actionTypes.INDEX, value: e });
  };

  BackHandler.addEventListener('hardwareBackPress', goBack );

  return (
    <View>
      <Header label="All Student" />
      {profileData ?
        <FlatList
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
        />
      :
        <Loader />
      }
    </View>
  );
});


export default HomeScreenView;
