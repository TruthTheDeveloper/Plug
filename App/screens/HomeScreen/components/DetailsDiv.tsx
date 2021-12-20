import React, {FC, useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';

const {height, width} = Dimensions.get('window');

const DetailsDiv = () => {
    const value = useState(new Animated.ValueXY({x:0, y: height}))[0];

    useEffect(() => {
        Animated.timing(value, {
            toValue: {x: 0, y: 0},
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [value]);

    return(
        <Animated.View style={value.getLayout()}>
            <View style={styles.main}></View>
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0
    },
    main: {
        height: 250,
        width: width,
        backgroundColor: '#fff',
        borderColor: 'cyan',
        borderWidth: 1,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    }
});

export default DetailsDiv