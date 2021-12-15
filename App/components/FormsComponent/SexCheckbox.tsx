/* eslint-disable prettier/prettier */
import React, {useState, useEffect, FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface genderProps {
  genderState:(e:string)=>void,
}

const SexCheckbox: FC<genderProps> = ({genderState}): JSX.Element =>{
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(false);



  useEffect(() => {
    const changeGender = (gender: string) => {
      genderState(gender);
    };
    if (male){
      changeGender('Male');
    } else {
      changeGender('Female');
    }
  }, [genderState, male]);


  const box1 = (
    <View style={styles.box}>
      <CheckBox
        disabled={false}
        value={male}
        onValueChange={newValue => {
          setMale(newValue);
          setFemale(prev => !prev);
        }}
      />
      <Text style={styles.text}>Male</Text>
    </View>
  );

  const box2 = (
    <View style={styles.box}>
      <CheckBox
        disabled={false}
        value={female}
        onValueChange={newValue => {
          setFemale(newValue);
          setMale(prev => !prev);
        }}
      />
      <Text style={styles.text}>Female</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sex</Text>
      <View style={styles.checkboxContainer}>
        {box1}
        {box2}
      </View>
    </View>
  );
};

export default SexCheckbox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 5,
  },
  label: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
    opacity: 0.7,
    paddingBottom: 5,
  },
  checkboxContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  text: {
    fontSize: 17,
    color: '#000',
  },
});
