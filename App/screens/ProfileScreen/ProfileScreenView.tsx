/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {Header, Loader, Username} from '../../components';
import PersonalityBoxes from '../../components/MainComponents/PersonalityBoxes';
import {red} from '../../config/colors';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Components
import ProfilePic from './components/ProfilePic';
import Button from './components/Buttons';
import EditScreen from './components/EditScreen';

//Image


const {width, height} = Dimensions.get('window');

const ProfileScreenView = () => {
    const [edit, setEdit] = useState(false);
    // const Id = useSelector((state:any) => state.profileReducer.profileId);
    const profileIdData = useSelector((state:any) => state.profileReducer.profileIdData);
    const isLoading = useSelector((state:any) => state.profileReducer.retrieveProfileLoading);
    const dispatch = useDispatch();

    // console.log(profileIdData)


    const [available, setAvailiable] = useState(true);


    useEffect(() => {
      console.log('something');
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
    },[dispatch]);

  return (
    <View style={{height: height, backgroundColor: '#fff'}}>
        {isLoading  ? <Loader/> : <View style={styles.container}>
      <Header label="Profile"  />
      <ScrollView>
        <View style={styles.ProfileHeader}>
          <ProfilePic image={profileIdData.profilePic} />
          <View style={{ height: 10 }} />
          <Username username={profileIdData.username} fontSize={22} active={available} />
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
        <TouchableWithoutFeedback onPress={() => setEdit(true)}>
          <View style={styles.EditButton}>
            <Text style={styles.EditButtonText}>Edit Profile</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.ExtraButtonsContainer}>
          <Button iconLabel="bell-off" label="Avaliability" setAvaliable={(e: boolean) => setAvailiable(e)} logout={() => null } />
          <Button iconLabel="log-out" label="Logout" setAvaliable={() => null} logout={() => console.log('Logged out')} />
        </View>
      </ScrollView>
    </View>}
    {edit && <EditScreen image={profileIdData.profilePic} cancel={() => setEdit(false)} available={available} /> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height - 50,
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

