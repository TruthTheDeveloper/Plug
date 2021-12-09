import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const DropDownSelector = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select university</Text>
            <View style={styles.dropDownSelector}>
                <View style={styles.dropDownSeclectorF1}>
                    <Text style={styles.text}>Imo state university</Text>
                </View>
                <View style={styles.dropDownSeclectorF2}></View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    label: {
        fontWeight: '600',
        fontSize: 18,
        color: '#000',
        opacity: 0.7,
        paddingBottom: 7
    },
    dropDownSelector: {
        height: 45,
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
        opacity: 0.8,
        display: 'flex',
        flexDirection: 'row'
    },
    dropDownSeclectorF1: {
        height: '100%',
        width: width - 80,
        display: 'flex',
        justifyContent: 'center'
    },
    dropDownSeclectorF2: {
        height: '100%',
        width: 50,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        paddingLeft: 15
    }
})

export default DropDownSelector;