import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../../redux/actions/index';

import ProfileItem from '../../HomeScreen/components/ProfileItem';
import Profile from '../../HomeScreen/components/Profile';
import DetailsDiv from '../../HomeScreen/components/DetailsDiv';

const girl2 = require('../../../assets/images/girl1.jpg');
const girl1 = require('../../../assets/images/girl.jpg');
const girl3 = require('../../../assets/images/girl2.jpg');
const girl4 = require('../../../assets/images/girl3.jpg');
const girl5 = require('../../../assets/images/girl4.jpg');
const girl6 = require('../../../assets/images/girl5.jpg');

const {height, width} = Dimensions.get('window')

const Item = () => {
    const dispatch = useDispatch()
    const profileData = useSelector((state:any) => state.profileReducer.profileData.profile);

    useEffect(() => {
        dispatch(actions.getProfile());
    },[dispatch]);

    const [data] = useState([
        {username: 'kendall_jenner', level: 400, department: 'English', image: girl1, availability: true, details: 'Looking for a sharp looking roomate, one who is NOT A JEW PERSON' },
        {username: 'marysmith', level: 100, department: 'Law', image: girl2, availability: true, details: 'Looking for a roomate who can clean and cook, and also one who is NOT A JEW PERSON'},
        {username: 'clarris', level: 100, department: 'Chemistry', image: girl3, availability: true, details: 'Looking for a sharp looking roomate, one who is NOT A JEW PERSON'},
        {username: 'officialSasha', level: 200, department: 'Computer Science', image: girl4, availability: true, details: 'Looking for a roomate who can clean and cook, and also one who is NOT A JEW PERSON'},
        {username: 'poppins', level: 100, department: 'Geography', image: girl5, availability: true, details: 'Looking for a sharp looking roomate, one who is NOT A JEW PERSON'},
        {username: 'queenjanedoe', level: 300, department: 'Statistics', image: girl6, availability: true, details: 'Looking for a roomate who can clean and cook, and also one who is NOT A JEW PERSON'},
    ]);

    const [showGrid, setShowGrid] = useState<boolean>(false);
    const [indexx, setIndex] = useState<number>()

    const goBack = () => {
        setShowGrid(false)
        return true
    }

    const openGrid = (e: number) => {
        setShowGrid(true)
        setIndex(e)
    }

    BackHandler.addEventListener('hardwareBackPress', goBack );

    const showDetails = useSelector((state: any) => state.chatReducer.details);
    return (
        <>
        <View style={{backgroundColor: '#fff'}}>
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
                  setIndex={openGrid}
                /> 
              }
              style={{marginBottom: 127}}
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
              initialScrollIndex={indexx}
              data={data}
              renderItem={({item}) =>
                <Profile
                  username={item.username}
                  availability={item.availability}
                  level={item.level}
                  department={item.department}
                  image={item.image}
                  details={item.details}
                />
              }
            />
          }
    
        </View>
        {showDetails && <DetailsDiv details={showDetails} /> }
        </>
      );
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: 'red'
    }
})

export default Item;