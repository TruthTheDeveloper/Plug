/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Header, Username} from '../../components';
import PersonalityBoxes from '../../components/MainComponents/PersonalityBoxes';
import {red} from '../../config/colors';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Components
import ProfilePic from './components/ProfilePic';
import Button from './components/Buttons';

//Image
const image = require('../../assets/images/girl.jpg');


const {width} = Dimensions.get('window');

const ProfileScreenView = () => {
    const Id = useSelector((state:any) => state.profileReducer.profileId);
    const profileIdData = useSelector((state:any) => state.profileReducer.profileIdData);
    const dispatch = useDispatch();


    useEffect(() => {
        console.log(profileIdData, 'first');
       if (profileIdData){
        console.log(profileIdData, 'from profile data');
       }

        dispatch(actions.retrieveProfileDetail(Id));
        // let userId : any = null;

        // const getToken = async() => {
        //      userId = await AsyncStorage.getItem('userId');
        //     if (userId){
        //         console.log('meet');

        //     } else {
        //         console.log('no user id');
        // }
        // console.log(userId);

        // };
        // getToken();
    },[Id, dispatch, profileIdData]);

  return (
    <View>
        {profileIdData ? <View style={styles.container}>
      <Header label="Profile" home={false} />
      <ScrollView>
        <View style={styles.ProfileHeader}>
          <ProfilePic image={image} />
          <View style={{ height: 10 }} />
          <Username username={profileIdData.user.username} fontSize={22} active />
        </View>
        <View style={styles.institutionContainer}>
          <Text style={styles.institution}>{profileIdData.department}</Text>
          <Text style={styles.institution}>{profileIdData.institution}</Text>
        </View>
        <View style={styles.personalityContainer}>
          {profileIdData.attributeOne && profileIdData.attributeOne !== '' ? <PersonalityBoxes value={profileIdData.attributeOne} /> : null}
              {profileIdData.attributeTwo && profileIdData.attributeTwo !== '' ? <PersonalityBoxes value={profileIdData.attributeTwo} /> : null}
              {profileIdData.attributeThree && profileIdData.attributeThree !== '' ? <PersonalityBoxes value={profileIdData.attributeThree} /> : null}
              {profileIdData.attributeFour && profileIdData.attributeFour !== '' ? <PersonalityBoxes value={profileIdData.attributeFour} /> : null}
              {profileIdData.attributeFive && profileIdData.attributeFive !== '' ? <PersonalityBoxes value={profileIdData.attributeFive} /> : null}
              {profileIdData.attributeSix && profileIdData.attributeSix !== '' ? <PersonalityBoxes value={profileIdData.attributeSix} /> : null}
              {profileIdData.attributeSeven && profileIdData.attributeSeven !== '' ? <PersonalityBoxes value={profileIdData.attributeSeven} /> : null}
              {profileIdData.attributeEight && profileIdData.attributeEight !== '' ? <PersonalityBoxes value={profileIdData.attributeEight} /> : null}
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            {profileIdData.description}
          </Text>
        </View>
        <View style={styles.EditButton}>
          <Text style={styles.EditButtonText}>Edit Profile</Text>
        </View>
        <View style={styles.ExtraButtonsContainer}>
          <Button iconLabel="bell-off" label="Avaliability" />
          <Button iconLabel="log-out" label="Logout" />
        </View>
      </ScrollView>
    </View> : <Text>No Data</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: height,
    width: width,
    backgroundColor: '#fff',
  },
  ProfileHeader: {
    width: width - 30,
    marginLeft: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  institutionContainer: {
    width: width - 30,
    marginLeft: 15,
    marginTop: 15,
  },
  institution: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    opacity: 0.9,
  },
  personalityContainer: {
    width: width - 30,
    marginLeft: 15,
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  description: {
    width: width - 30,
    marginLeft: 15,
    marginTop: 10,
  },
  descriptionText: {
    color: '#000',
    fontSize: 18,
    opacity: 0.7,
  },
  EditButton: {
    height: 40,
    width: 120,
    borderColor: red,
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#fff',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  EditButtonText: {
    color: red,
    fontSize: 18,
    fontWeight: '600',
  },
  ExtraButtonsContainer: {
    width: width - 30,
    marginLeft: 15,
    marginBottom: 50,
    marginTop: 30,
  },
});

export default ProfileScreenView;
