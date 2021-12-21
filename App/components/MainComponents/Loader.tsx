import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const {height, width} = Dimensions.get('window')

const Loader = () => {
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
});

export default Loader;