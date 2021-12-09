import React, {FC} from 'react';
import { View, Text, StyleSheet, Dimensions, Switch } from 'react-native';

import {LargeLabeledInput, AvailabilitySwitch, SexCheckbox, SubmitButton} from '../../../components';

import EmojiHeader from './EmojiHeader';
import StatusBar from './StatusBar';
import InstitutionChecker from './InstitutionChecker';

const {height, width} = Dimensions.get('window');

const SignupScreen2 = () => {
    return(
        <View style={styles.container}>
            <EmojiHeader />
            <StatusBar />
            <Text style={styles.header}>Institution</Text>
            <InstitutionChecker />
        </View>
    )
};

export default SignupScreen2;

const styles = StyleSheet.create({
    container: {
        height: height,
        width: '100%',
    },
    header: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 22,
        paddingTop: 15,
        paddingLeft: 15
    }
})