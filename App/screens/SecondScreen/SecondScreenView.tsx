import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const SecondScreenView = () => {
    return(
        <View style={styles.container}></View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 700,
        width: 400,
        backgroundColor: 'red'
    }
})

export default SecondScreenView;