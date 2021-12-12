/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import * as colors from '../../../config/colors';

const {width} = Dimensions.get('window');

interface statusBarProps{
  page: number
}

const StatusBar:FC<statusBarProps> = ({page}):JSX.Element => {
  const greyBox = <View style={styles.grey} />;
  const redBox = <View style={[styles.grey, {backgroundColor: colors.red}]} />;

  let box = (
    <>
      {redBox}
      {greyBox}
      {greyBox}
    </>
  );
  if (page === 2){
    box = (
      <>
        {greyBox}
        {redBox}
        {greyBox}
      </>
    );
  } else if (page === 3){
    box = (
      <>
        {greyBox}
        {greyBox}
        {redBox}
      </>
    );
  }

  return (
    <View style={styles.container}>
      {box}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 5,
    width: width - 30,
    marginLeft: 15,
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  grey: {
    height: 5,
    width: '32%',
    backgroundColor: '#d1d1d1',
    borderRadius: 3,
    marginRight: '1%',
  },
});

export default StatusBar;
