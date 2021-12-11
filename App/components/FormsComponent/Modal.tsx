import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const Modal = () => {
    return(
        <View style={styles.container}>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: 'rgba(0,0,0,0.5',
        position: 'absolute',
        top: 0,
        left: 0
    }
})

export default Modal;