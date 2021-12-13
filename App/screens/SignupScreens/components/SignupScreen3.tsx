/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import * as actionTypes from '../../../redux/actions/actionTypes';
import {useDispatch} from 'react-redux';

import EmojiHeader from './EmojiHeader';
import StatusBar from './StatusBar';
import ProfilePhoto from './ProfilePhoto';
import PersonalityBox from './personalityBox';
import ContinueButton from './ContinueButton';


const {height, width} = Dimensions.get('window');

const SignupScreen3 = () => {
  const [personality, setPersonality] = useState<any | null>([]);
  const [, setProfilePic] = useState();

  const [loading, setLoading] = useState(false);

  const setImage = (img: any) => {
    setProfilePic(img);
  };

  const addPersonality = (e: string) => {
    setPersonality((prev: any) => [...prev, e]);
    
    console.log(personality);
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
        small={false}
        name="Passionate"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
      <View style={styles.gap} />
      <PersonalityBox
        personality={personality}
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
        small={true}
        name="Creative"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
      <View style={styles.gap} />
      <PersonalityBox
        personality={personality}
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
        small={false}
        name="Honest"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
      <View style={styles.gap} />
      <PersonalityBox
        personality={personality}
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
        small={true}
        name="Responsible"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
      <View style={styles.gap} />
      <PersonalityBox
        personality={personality}
        small={false}
        name="Hardworking"
        postPersonality={addPersonality}
        deletePersonality={removePersonality}
      />
    </View>
  );

  const dispatch = useDispatch();

  const next = () => {
    setLoading(true);
    dispatch({type: actionTypes.SCREEN3});

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
