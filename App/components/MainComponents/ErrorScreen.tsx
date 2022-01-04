import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window')

const ErrorScreen = () => {
    return(
        <View style={styles.container}></View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: 'red'
    }
})

export default ErrorScreen;