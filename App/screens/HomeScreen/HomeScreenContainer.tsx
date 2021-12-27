/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import { View } from 'react-native';
import HomeScreenView from './HomeScreenView';

interface homeProps {
  navigate: any
}

const HomeScreenContainer:FC<homeProps> = ({navigate}):JSX.Element => {
  return (
    <View style={{height: '100%', backgroundColor: '#fff'}}>
      <HomeScreenView navigate={navigate} />
    </View>
  );
};

export default HomeScreenContainer;
