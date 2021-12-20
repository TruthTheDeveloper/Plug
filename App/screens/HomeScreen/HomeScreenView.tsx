/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, FlatList, BackHandler} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/index';

//Components
import {Header} from '../../components/index';

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


const {height, width} = Dimensions.get('window');

const HomeScreenView = () => {
    const dispatch = useDispatch();
    const profileData = useSelector((state:any) => state.profileReducer.profileData.profile);

    useEffect(() => {
        dispatch(actions.getProfile());
    },[]);

  const [data] = useState([
    {username: 'kendall_jenner', level: 400, department: 'English', image: girl1, availability: true, details: 'Looking for a sharp looking roomate, one who is NOT A JEW PERSON' },
    {username: 'marysmith', level: 100, department: 'Law', image: girl2, availability: true, details: 'Looking for a roomate who can clean and cook, and also one who is NOT A JEW PERSON'},
    {username: 'clarris', level: 100, department: 'Chemistry', image: girl3, availability: true, details: 'Looking for a sharp looking roomate, one who is NOT A JEW PERSON'},
    {username: 'officialSasha', level: 200, department: 'Computer Science', image: girl4, availability: true, details: 'Looking for a roomate who can clean and cook, and also one who is NOT A JEW PERSON'},
    {username: 'poppins', level: 100, department: 'Geography', image: girl5, availability: true, details: 'Looking for a sharp looking roomate, one who is NOT A JEW PERSON'},
    {username: 'queenjanedoe', level: 300, department: 'Statistics', image: girl6, availability: true, details: 'Looking for a roomate who can clean and cook, and also one who is NOT A JEW PERSON'},
  ]);

  const [showGrid, setShowGrid] = useState<any>(0);

  const goBack = () => {
    setShowGrid(null)
    return true
  }

  BackHandler.addEventListener('hardwareBackPress', goBack );

  const showDetails = useSelector((state: any) => state.chatReducer.details);

  return (
    <View style={{backgroundColor: '#fff'}}>
      <Header label="Gallery" home={false} />
      {!showGrid ? 
        <FlatList 
          key={'_'}
          numColumns={2}
          data={data}
          renderItem={({item, index}) => 
            <ProfileItem 
              username={item.username} 
              verified={item.availability}
              level={item.level}
              department={item.department}
              image={item.image}
              index={index}
              setIndex={(e) => setShowGrid(e)}
            /> 
          }
          style={{marginBottom: 37}}
        />
      :
        <FlatList 
          key={'#'}
          horizontal
          decelerationRate={'fast'}
          snapToAlignment="center"
          disableIntervalMomentum={true}
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={showGrid}
          data={data}
          renderItem={Profile}
        />
      }
      {showDetails && <DetailsDiv details={showDetails} /> }
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
