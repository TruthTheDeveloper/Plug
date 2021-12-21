import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

const loader = require('../../assets/others/spinner.json');

const {height, width} = Dimensions.get('window')

const Loader = () => {
    return(
        <View style={styles.container}>
            <LottieView
                source={loader}
                autoPlay
                loop
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: 'green'
    }
});

export default Loader;