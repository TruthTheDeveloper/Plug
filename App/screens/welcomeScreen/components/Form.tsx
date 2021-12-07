import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import {LabeledInput} from '../../../components/index';

const {width} = Dimensions.get('window');

const Form = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Create an account</Text>
            <LabeledInput label='Username' />
            <LabeledInput label='Email' />
            <LabeledInput label='Password' />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: width - 30,
        marginLeft: 15,
        paddingTop: 20
    },
    header: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 23,
        paddingBottom: 10
    }
})

export default Form