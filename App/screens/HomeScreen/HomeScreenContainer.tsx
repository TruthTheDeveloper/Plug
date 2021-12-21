/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import HomeScreenView from './HomeScreenView';

const HomeScreenContainer = () => {
  return (
    <View style={{height: '100%', backgroundColor: '#fff'}}>
      <HomeScreenView />
    </View>
  );
};

export default HomeScreenContainer;
