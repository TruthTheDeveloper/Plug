import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'

import loader from '../../assets/others/spinner.json';

const ScrollLoader = () => {
    return(
        <View style={styles.container}>
            <LottieView source={loader} autoPlay loop />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ScrollLoader;