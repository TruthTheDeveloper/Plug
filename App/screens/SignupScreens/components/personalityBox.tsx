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
}): JSX.Element => {
  const [selected, setSelected] = useState(false);
  const addPersonality = () => {
    if (personality.length < 5) {
      setSelected(true);
      postPersonality(name);

    } else {
      Alert.alert('Sorry', "You can't have more than five personality", [
        {text: 'OK'},
      ]);
    }
  };

  const removePersonality = async () => {
    setSelected(false);
    deletePersonality(name);
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
