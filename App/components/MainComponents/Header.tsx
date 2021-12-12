import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const Header  = () => {
    return(
        <View style={styles.container}>
            <View style={styles.flex1}></View>
            <View style={styles.flex2}></View>
            <View style={styles.flex3}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        borderColor: '#000',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    flex1: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    flex2: {
        height: 50,
        width: width - 100,
        backgroundColor: 'blue'
    },
    flex3: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    }
})

export default Header