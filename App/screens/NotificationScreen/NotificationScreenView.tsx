import React from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';

//components
import {Header} from '../../components/index';

const {height} = Dimensions.get('window');

const NotificationScreenView = () => {
    return(
        <View style={styles.container} >
            <Header label='Notifications' />
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