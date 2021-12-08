import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import * as colors from '../../../config/colors';

const {width} = Dimensions.get('window');

const StatusBar = () => {

    const greyBox = (
        <View style={styles.grey} />
    )
    const redBox = (
        <View style={[styles.grey, {backgroundColor: colors.red }]} />
    )

    return(
        <View style={styles.container}>
            {redBox}
            {greyBox}
            {greyBox}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 5,
        width: width - 30,
        marginLeft: 15,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row'
    },
    grey: {
        height: 5,
        width: '32%',
        backgroundColor: '#d1d1d1',
        borderRadius: 3,
        marginRight: '1%'
    }
})

export default StatusBar;