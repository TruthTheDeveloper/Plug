import React from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';

const {width} = Dimensions.get('window');

const NotificationItem = () => {
    return(
        <View style={styles.container}>
            <View style={styles.container1}></View>
            <View style={styles.container2}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: width - 30,
        marginLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#d4d4d4',
        borderBottomWidth: 1,
        display:'flex',
        flexDirection: 'row'
    },
    container1: {
        width: 60,
        height: 80,
        backgroundColor: '#f0f0f0',
        marginRight: 10,
        borderRadius: 6
    },
    container2: {
        height: 80,
        width: width - 110 ,
        backgroundColor: 'blue'
    }
})

export default NotificationItem;