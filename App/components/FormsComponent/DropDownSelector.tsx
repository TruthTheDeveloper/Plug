/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';

const {width} = Dimensions.get('window');

interface modalProps {
  label: string;
  label2: string;
}

const DropDownSelector: FC<modalProps> = (props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.dropDownSelector}>
        <View style={styles.dropDownSeclectorF1}>
          <Text style={styles.text}>{props.label2}</Text>
        </View>
        <View style={styles.dropDownSeclectorF2}>
          <Icons name="chevron-down" color="#000" size={25} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 15,
  },
  label: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
    opacity: 0.7,
    paddingBottom: 7,
  },
  dropDownSelector: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 7,
    opacity: 0.8,
    display: 'flex',
    flexDirection: 'row',
  },
  dropDownSeclectorF1: {
    height: '100%',
    width: width - 80,
    display: 'flex',
    justifyContent: 'center',
  },
  dropDownSeclectorF2: {
    height: '100%',
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    paddingLeft: 15,
  },
});

export default DropDownSelector;
