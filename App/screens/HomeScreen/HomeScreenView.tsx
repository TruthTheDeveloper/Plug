/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Profile from './components/Profile';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/index';

//Components
import {Header} from '../../components/index';
//Imported Images
const girl1 = require('../../assets/images/girl.jpg');
const girl2 = require('../../assets/images/girl1.jpg');
const girl3 = require('../../assets/images/girl2.jpg');
const girl4 = require('../../assets/images/girl3.jpg');
const girl5 = require('../../assets/images/girl4.jpg');
const girl6 = require('../../assets/images/girl5.jpg');


const {height, width} = Dimensions.get('window');


const HomeScreenView = () => {
    const dispatch = useDispatch();
    const profileData = useSelector((state:any) => state.profileReducer.profileData.profile);

    useEffect(() => {
        dispatch(actions.getProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  const [data] = useState([
    {
      username: 'kendall_jenner',
      level: 400,
      department: 'English',
      image: girl1,
    },
    {username: 'marysmith', level: 100, department: 'Law', image: girl2},
    {username: 'clarris', level: 100, department: 'Chemistry', image: girl3},
    {
      username: 'officialSasha',
      level: 200,
      department: 'Computer Science',
      image: girl4,
    },
    {username: 'poppins', level: 100, department: 'Geography', image: girl5},
    {
      username: 'queenjanedoe',
      level: 300,
      department: 'Statistics',
      image: girl6,
    },
  ]);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{backgroundColor: '#fff'}}>
      <Header label="Gallery" home={false} />
    <View style={styles.container}>
      {profileData ? <Carousel
        data={profileData}
        renderItem={Profile}
        sliderWidth={width}
        itemWidth={width}
        layout={'default'}
        removeClippedSubviews={true}
        // layoutCardOffset={9}
      /> : null}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      height: height,
      width: width,
      backgroundColor: '#fff',
    },
    box: {
      height: height - 140,
      marginTop: 10,
      marginLeft: 15,
      width: width - 30,
      backgroundColor: 'red',
      borderRadius: 10,
    },
  });

export default HomeScreenView;
