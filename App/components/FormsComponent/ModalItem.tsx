import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');
const newWidth = width - 60;

const ModalItem = () => {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Imo state university, Owerri</Text>
            </View>
            <View style={styles.CheckContainer}>
                <View style={styles.circle}></View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        minHeight: 40,
        width: newWidth,
        marginLeft: 10,
        paddingTop: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    textContainer: {
        width: newWidth - 40,
        padding: 10
    },
    CheckContainer: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    text: {
        fontSize: 17,
        color: '#000',
        fontWeight: '600'
    },
    circle: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: '#a0a0a0',
        borderRadius: 20
    }
});

export default ModalItem;