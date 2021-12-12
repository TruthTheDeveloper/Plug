import React, {FC} from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Components
import {Header} from '../../components/index'
import ProfileItem from './components/ProfileItem';

const HomeScreenView = () => {
    return(
        <View>
            <Header />
            <ProfileItem />
        </View>
    )
};

export default HomeScreenView;