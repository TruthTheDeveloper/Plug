import React from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';

//components
import {Header} from '../../components/index';
import NotificationItem from './components/NotificationItem';

const {height} = Dimensions.get('window');

const NotificationScreenView = () => {
    return(
        <View style={styles.container} >
            <Header label='Notifications' />
            <NotificationItem />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: '#fff'
    }
})

export default NotificationScreenView;