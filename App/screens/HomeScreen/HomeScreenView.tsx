/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Dimensions, FlatList, BackHandler, Text} from 'react-native';
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


const {width} = Dimensions.get('window');

const HomeScreenView = () => {
    const [pageNum, setPageNum] = useState(1);
    const dispatch = useDispatch();

    let allData = []
    const profileData = useSelector((state:any) => state.profileReducer.profileData);
    console.log(profileData);

    allData.push(profileData)

    // const profileDat = useSelector((state:any) => state.profileReducer.profileData[0].profile);
    // console.log(profileDat, 'your data profile');

    useEffect(() => {
        dispatch(actions.getAllProfile(pageNum));
    },[dispatch, pageNum]);

    const getNewList = () => {
      dispatch(actions.getAllProfile(pageNum));
        setPageNum(prev => prev + 1);
    };

  const [data] = useState([
    {username: 'kendall_jenner', level: 400, department: 'English', image: girl1, availability: true, details: 'Looking for a sharp looking roomate, one who is NOT A JEW PERSON jkdkd dkmdldd mlsmlss ,m,mdd  kmlms ,dmdld mlmsllsd fdflkdfl flflkf lklf fmllf mflmlf f,mlfm fmlflf flmfmdfl flmdflmdf dfmlmdf fdmdglmdg glmdgldgmm' },
    {username: 'marysmith', level: 100, department: 'Law', image: girl2, availability: true, details: 'Looking for a roomate who can clean and cook, and also one who is NOT A JEW PERSON'},
    {username: 'clarris', level: 100, department: 'Chemistry', image: girl3, availability: true, details: 'Looking for a sharp looking roomate, one who is NOT A JEW PERSON'},
    {username: 'officialSasha', level: 200, department: 'Computer Science', image: girl4, availability: true, details: 'Looking for a roomate who can clean and cook, and also one who is NOT A JEW PERSON'},
    {username: 'poppins', level: 100, department: 'Geography', image: girl5, availability: true, details: 'Looking for a sharp looking roomate, one who is NOT A JEW PERSON'},
    {username: 'queenjanedoe', level: 300, department: 'Statistics', image: girl6, availability: true, details: 'Looking for a roomate who can clean and cook, and also one who is NOT A JEW PERSON'},
  ]);

  const [showGrid, setShowGrid] = useState<any>(0);

  const goBack = () => {
    setShowGrid(null);
    return true;
  };

  BackHandler.addEventListener('hardwareBackPress', goBack );
  const showDetails = useSelector((state: any) => state.chatReducer.details);

  let flatlist = <Text>'no data'</Text>;

  for (const i in allData){
    flatlist = <>
    <View style={{backgroundColor: '#fff', borderTopWidth: 0, borderBottomWidth: 0}}>
      <Header label="Gallery" home={false} />
      {!showGrid ?
      <><Text>Daata rendering</Text><FlatList
            key={'_'}
            numColumns={2}
            data={allData}
            renderItem={({ item, index }) => <ProfileItem
              username={item.username}
              verified={item.availability}
              level={item.level}
              department={item.department}
              image={item.profilePic}
              index={index}
              setIndex={(e) => setShowGrid(e)} />}
            // style={{marginBottom: 37, borderBottomWidth: 0 }}
            // ItemSeparatorComponent={RenderSeperator}
            onEndReached={getNewList} /></>
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
          data={allData}
          renderItem={({item}) =>
            <Profile
              username={item.username}
              availability={item.availability}
              level={item.level}
              department={item.department}
              image={item.profilePic}
              details={item.description}
            />
          }
        />
      }

    </View>
    {showDetails && <DetailsDiv details={showDetails} /> }
    </>;
  }

  return (
    <View>{flatlist}</View>
  );
};


export default HomeScreenView;
