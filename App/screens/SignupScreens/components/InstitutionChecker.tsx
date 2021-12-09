import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const InstitutionChecker = () => {
    return (
        <View style={styles.container}></View>
    )
}

export default InstitutionChecker;

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: width - 30,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7
    }
})