/* eslint-disable prettier/prettier */
/* eslint-disable no-fallthrough */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {red} from '../../../config/colors';

import * as actionTypes from '../../../redux/actions/actionTypes';
import {useDispatch} from 'react-redux';

interface PersonalityProps {
  small: boolean;
  name: string;
  personality: {[index: string]: any};
  attribute:string,
  postPersonality: (e: string) => void;
  deletePersonality: (e: string) => void;
}

const PersonalityBox: FC<PersonalityProps> = ({
  small,
  name,
  postPersonality,
  deletePersonality,
  personality,
  attribute,
}): JSX.Element => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  const addPersonality = () => {
    if (personality.length < 5) {
      setSelected(true);
      postPersonality(name);
      // actions.getattributeOne(name);
      console.log(attribute);
      switch (attribute){
        case 'attributeOne':
          dispatch({type: actionTypes.SET_ATTRIBUTE_ONE, attributeOne:name});
        case 'attributeTwo':
          dispatch({type: actionTypes.SET_ATTRIBUTE_TWO, attributeTwo:name});
        case 'attributeThree':
          dispatch({type: actionTypes.SET_ATTRIBUTE_THREE, attributeThree:name});
        case 'attributeFour':
          dispatch({type: actionTypes.SET_ATTRIBUTE_FOUR, attributeFour:name});
        case 'attributeFive':
          dispatch({type: actionTypes.SET_ATTRIBUTE_FIVE, attributeFive:name});
        case 'attributeSix':
          dispatch({type: actionTypes.SET_ATTRIBUTE_SIX, attributeSix:name});
        case 'attributeSeven':
          dispatch({type: actionTypes.SET_ATTRIBUTE_SEVEN, attributeSeven:name});
        case 'attributeEight':
          dispatch({type: actionTypes.SET_ATTRIBUTE_EIGHT, attributeEight:name});
      }

    } else {
      Alert.alert('Sorry', "You can't have more than five personality", [
        {text: 'OK'},
      ]);
    }
  };

  const removePersonality = async () => {
    setSelected(false);
    deletePersonality(name);

    switch (attribute){
      case 'attributeOne':
        dispatch({type: actionTypes.SET_ATTRIBUTE_ONE, attributeOne:''});
      case 'attributeTwo':
        dispatch({type: actionTypes.SET_ATTRIBUTE_TWO, attributeTwo:''});
      case 'attributeThree':
        dispatch({type: actionTypes.SET_ATTRIBUTE_THREE, attributeThree:''});
      case 'attributeFour':
        dispatch({type: actionTypes.SET_ATTRIBUTE_FOUR, attributeFour:''});
      case 'attributeFive':
        dispatch({type: actionTypes.SET_ATTRIBUTE_FIVE, attributeFive:''});
      case 'attributeSix':
        dispatch({type: actionTypes.SET_ATTRIBUTE_SIX, attributeSix:''});
      case 'attributeSeven':
        dispatch({type: actionTypes.SET_ATTRIBUTE_SEVEN, attributeSeven:''});
      case 'attributeEight':
        dispatch({type: actionTypes.SET_ATTRIBUTE_EIGHT, attributeEight:''});
    }
  };

  const box1 = (
    <TouchableWithoutFeedback onPress={addPersonality}>
      <View style={[styles.container, small && {width: '40%'}]}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  const box2 = (
    <TouchableWithoutFeedback onPress={removePersonality}>
      <View
        style={[
          styles.container,
          small && {width: '40%'},
          styles.redBackground,
        ]}>
        <Text style={[styles.text, styles.whiteText]}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return <>{!selected ? box1 : box2}</>;
};

const styles = StyleSheet.create({
  container: {
    height: 33,
    width: '55%',
    borderRadius: 17,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#808080',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redBackground: {
    backgroundColor: red,
    borderWidth: 0,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    opacity: 0.7,
  },
  whiteText: {
    color: '#fff',
    opacity: 1,
  },
});

export default PersonalityBox;
