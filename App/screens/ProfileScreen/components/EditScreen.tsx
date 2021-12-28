/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import * as actionTypes from '../../../redux/actions/actionTypes';
//Components
import {Header} from '../../../components';
import ProfilePic from './ProfilePic';

import LargeLabeledInput from './LargeLabeledInpu';


import {university, college} from '../constants';
import {Form1, Form2, Form3, Modal} from '../../../components';
import {
  CollegeList,
  PolyList,
} from '../../../components/InstitutionComponents/ListOfInstitutions';

import InstitutionChecker from '../../SignupScreens/components/InstitutionChecker';
import PersonalityBox from '../../SignupScreens/components/personalityBox';
import ExtraButtons from './ExtraButtons';

import * as actions from '../../../redux/actions/index';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('window');

interface EditScreenProps {
  image: string;
  cancel: () => void;
  available:boolean
}

const EditScreen: FC<EditScreenProps> = ({image, cancel, available}): JSX.Element => {

  const profileIdData = useSelector((state:any) => state.profileReducer.profileIdData);
  const [Institution, setInstitution] = useState(university);
  const [description, setDescription]  = useState(profileIdData.description);

  const [universityName, setUniversity] = useState(profileIdData.institution);
  const [department, setDepartment] = useState(profileIdData.department);
  const [level, setLevel] = useState(profileIdData.level);

  const [List, setList] = useState<any | null>(null);

  const [] = useState(false);

  const [personality, setPersonality] = useState<any | null>([]);

  const [img, setImage] = useState(image);
  const [validation, setValidation] = useState('');
  const [border, setBorder]:any = useState('#000');

  useEffect(() => {
    if (validation !== ''){
      setBorder('#Fe1135');
    } else if (validation === '') {
      setBorder('#000');
    }
  }, [validation]);

  const checkDescription = () => {
    if (description === ''){
      setValidation('This field cannot be empty');
    } else {
      setValidation('');
    }
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

    const dispatch = useDispatch();

  const attributeOne = useSelector((state:any) => state.profileReducer.attributeOne);
  const attributeTwo = useSelector((state:any) => state.profileReducer.attributeTwo);
  const attributeThree = useSelector((state:any) => state.profileReducer.attributeThree);
  const attributeFour = useSelector((state:any) => state.profileReducer.attributeFour);
  const attributeFive = useSelector((state:any) => state.profileReducer.attributeFive);
  const attributeSix = useSelector((state:any) => state.profileReducer.attributeSix);
  const attributeSeven = useSelector((state:any) => state.profileReducer.attributeSeven);
  const attributeEight = useSelector((state:any) => state.profileReducer.attributeEight);
  const profilePic = useSelector((state:any) => state.profileReducer.profilePic);

  const updateProfileHandler = async () => {
    console.log('update');
    const id = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('token');
    const profileId = await AsyncStorage.getItem('profileId');
    console.log(validation);
    if (validation === '' && description.length >= 0){
      console.log(available, 'its available');
      dispatch({type:actionTypes.RESET_ATTRIBUTE_ONE, attributeOne:''});
      dispatch({type:actionTypes.RESET_ATTRIBUTE_TWO, attributeTwo:''});
      dispatch({type:actionTypes.RESET_ATTRIBUTE_THREE, attributeThree:''});
      dispatch({type:actionTypes.RESET_ATTRIBUTE_FOUR, attributeFour:''});
      dispatch({type:actionTypes.RESET_ATTRIBUTE_FIVE, attributeFive:''});
      dispatch({type:actionTypes.RESET_ATTRIBUTE_SIX, attributeSix:''});
      dispatch({type:actionTypes.RESET_ATTRIBUTE_SEVEN, attributeSeven:''});
      dispatch({type:actionTypes.RESET_ATTRIBUTE_EIGHT, attributeEight:''});

      const data = {
        userId:id,
        description:description,
        available:available,
        sex:profileIdData.sex,
        institution:universityName,
        department:department,
        level:level,
        attributeOne:attributeOne,
        attributeTwo:attributeTwo,
        attributeThree:attributeThree,
        attributeFour:attributeFour,
        attributeFive:attributeFive,
        attributeSix:attributeSix,
        attributeSeven:attributeSeven,
        attributeEight:attributeEight,
        profilePic:profilePic,
        token:token,
        username:profileIdData.username,
        profileId:profileId,
      };
      dispatch(actions.updateProfile(data));

      if (profileIdData.updateSuccesFull !== ''){
        cancel();
      }
      //check if profile data has been submitted then call cancle function
    }

    checkDescription();
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

  let forms;
  if (Institution === university) {
    forms = (
      <Form1
        onSelect={() => setList(CollegeList)}
        name={universityName}
        department={department}
        level={level}
        onChangeDept={(e: any) => setDepartment(e)}
        onChangeLev={(e: any) => setLevel(e)}
      />
    );
  } else if (Institution === college) {
    forms = (
      <Form2
        onSelect={() => setList(CollegeList)}
        name={universityName}
        department={department}
        level={level}
        onChangeDept={(e: any) => setDepartment(e)}
        onChangeLev={(e: any) => setLevel(e)}
      />
    );
  } else {
    forms = (
      <Form3
        onSelect={() => setList(PolyList)}
        name={universityName}
        department={department}
        level={level}
        onChangeDept={(e: any) => setDepartment(e)}
        onChangeLev={(e: any) => setLevel(e)}
      />
    );
  }

  const onSelect = (e: any) => {
    setList(null);
    setTimeout(() => {
      setUniversity(e);
    }, 100);
  };

  const selectPhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      (response: {assets: {uri: any}[]}) => {
        if (response.assets) {
          const data = response.assets[0].uri;
          setImage(data);
          dispatch({type: actionTypes.SET_PROFILE_PIC, profilePic:data});
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header label="Edit"/>
        <TouchableWithoutFeedback onPress={selectPhoto}>
          <View style={styles.ImageContainer}>
            <ProfilePic image={img} />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.FormContainer}>
          <LargeLabeledInput
            label="Description"
            value={description}
            setValue={e => setDescription(e)}
            validationError={validation}
            border={border}
          />
        </View>
        <InstitutionChecker
          active={Institution}
          onChange={e => setInstitution(e)}
        />
        <View style={{width: width - 30, marginLeft: 15, marginBottom: 20}}>
          {forms}
        </View>
        <View style={styles.personalityContainer}>
          <Text style={styles.title}>What best describe you</Text>
          <View style={styles.personalitys}>
            {div1}
            {div2}
            {div3}
            {div4}
          </View>
        </View>
        <ExtraButtons cancel={cancel} submit={updateProfileHandler} />
      </ScrollView>
      {List && <Modal packages={List} onSelect={onSelect} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    position: 'absolute',
    top: 0,
    backgroundColor: '#fff',
  },
  ImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    paddingTop: 20,
    paddingBottom: 20,
  },
  FormContainer: {
    width: width - 30,
    marginLeft: 15,
    paddingBottom: 20,
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

export default EditScreen;
