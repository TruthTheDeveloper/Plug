/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InstitutionChecker = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>University</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '33%',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default InstitutionChecker;
