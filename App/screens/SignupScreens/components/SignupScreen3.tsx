/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import * as actionTypes from '../../../redux/actions/actionTypes';
import * as actions from '../../../redux/actions/index';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';

import EmojiHeader from './EmojiHeader';
import StatusBar from './StatusBar';
import ProfilePhoto from './ProfilePhoto';
import PersonalityBox from './personalityBox';
import ContinueButton from './ContinueButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import io from 'socket.io-client';



const {height, width} = Dimensions.get('window');

const SOCKET_URL = io('https://findplug.herokuapp.com');
let socket : any;
let socketId : any;
const SignupScreen3 = () => {
  const [personality, setPersonality] = useState<any | null>([]);

  const [, setProfilePic] = useState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    socket = SOCKET_URL;
    socket.on('connect', () => {
        console.log('you are now connected');
        socketId = socket.id;
    });
  },[]);

  const setImage = (img: any) => {
    setProfilePic(img);
  };

  const addPersonality = (e: string) => {
    setPersonality((prev: any) => [...prev, e]);
  };

  const removePersonality = (e: string) => {
    const idx = personality.indexOf(e);
    let item = personality;
    item.splice(idx, 1);
    setPersonality(item);
  };

  //personality Containers
  const div1 = (
    <View style={styles.personalityFlex}>
      <PersonalityBox
        personality={personality}
        attribute="attributeOne"
        small={false}
        name="Passionate"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
      <View style={styles.gap} />
      <PersonalityBox
        personality={personality}
        attribute="attributeTwo"
        small
        name="Smart"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
    </View>
  );
  const div2 = (
    <View style={styles.personalityFlex}>
      <PersonalityBox
        personality={personality}
        attribute="attributeThree"
        small={true}
        name="Creative"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
      <View style={styles.gap} />
      <PersonalityBox
        personality={personality}
        attribute="attributeFour"
        small={false}
        name="Ambitious"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
    </View>
  );
  const div3 = (
    <View style={styles.personalityFlex}>
      <PersonalityBox
        personality={personality}
        attribute="attributeFive"
        small={false}
        name="Honest"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
      <View style={styles.gap} />
      <PersonalityBox
        personality={personality}
        attribute="attributeSix"
        small
        name="Humble"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
    </View>
  );
  const div4 = (
    <View style={styles.personalityFlex}>
      <PersonalityBox
        personality={personality}
        attribute="attributeSeven"
        small={true}
        name="Responsible"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
      <View style={styles.gap} />
      <PersonalityBox
        personality={personality}
        attribute="attributeEight"
        small={false}
        name="Hardworking"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
    </View>
  );

  const dispatch = useDispatch();

  // const userId = useSelector((state:any) => state.authReducer.userId);
  const sex = useSelector((state:any) => state.profileReducer.sex);
  const department = useSelector((state:any) => state.profileReducer.department);
  const level = useSelector((state:any) => state.profileReducer.level);
  const institution = useSelector((state:any) => state.profileReducer.institution);
  const description = useSelector((state:any) => state.profileReducer.description);
  const attributeOne = useSelector((state:any) => state.profileReducer.attributeOne);
  const attributeTwo = useSelector((state:any) => state.profileReducer.attributeTwo);
  const attributeThree = useSelector((state:any) => state.profileReducer.attributeThree);
  const attributeFour = useSelector((state:any) => state.profileReducer.attributeFour);
  const attributeFive = useSelector((state:any) => state.profileReducer.attributeFive);
  const attributeSix = useSelector((state:any) => state.profileReducer.attributeSix);
  const attributeSeven = useSelector((state:any) => state.profileReducer.attributeSeven);
  const attributeEight = useSelector((state:any) => state.profileReducer.attributeEight);
  const availabilty = useSelector((state:any) => state.profileReducer.availabilty);
  const profilePic = useSelector((state:any) => state.profileReducer.profilePic);
  const username = useSelector((state:any) => state.authReducer.username);



  const next = async () => {
    const id = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('token');
    const data = {
      userId:id,
      department:department,
      sex:sex,
      level:level,
      institution:institution,
      description:description,
      attributeOne:attributeOne,
      attributeTwo:attributeTwo,
      attributeThree:attributeThree,
      attributeFour:attributeFour,
      attributeFive:attributeFive,
      attributeSix:attributeSix,
      attributeSeven:attributeSeven,
      attributeEight:attributeEight,
      availabilty:availabilty,
      profilePic:profilePic,
      token:token,
      username:username,
      socketId:socketId,

    };

    setLoading(true);
    dispatch({type: actionTypes.SCREEN3});
    dispatch(actions.postProfile(data));

  };

  const back = () => {
    dispatch({type: actionTypes.SCREEN2});
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerFlexer}>
        <TouchableWithoutFeedback onPress={back}>
          <View style={{paddingRight: 20}}>
            <Icons name="chevron-left" color="#000" size={25} />
          </View>
        </TouchableWithoutFeedback>
        <EmojiHeader page={3} />
      </View>
      <StatusBar page={3} />
      <View style={styles.profileContainer}>
        <Text style={styles.header}>Profile</Text>
        <ProfilePhoto setImage={setImage} />
      </View>
      <View style={styles.personalityContainer}>
        <Text style={styles.title}>What best describe you</Text>
        <View style={styles.personalitys}>
          {div1}
          {div2}
          {div3}
          {div4}
        </View>
        <ContinueButton label="Finish" continue={next} loading={loading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: '100%',
  },
  headerFlexer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  profileContainer: {
    width: width - 30,
    marginLeft: 15,
    marginTop: 15,
  },
  header: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 22,
  },
  personalityContainer: {
    width: width - 30,
    marginLeft: 15,
    marginTop: 5,
    paddingTop: 15,
  },
  title: {
    fontSize: 20,
    opacity: 0.6,
    color: '#000',
  },
  personalitys: {
    width: '100%',
    marginTop: 15,
  },
  personalityFlex: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
  },
  gap: {
    width: '5%',
  },
});

export default SignupScreen3;
