import React, {FC} from 'react';
import { View, Text, StyleSheet, Dimensions, Switch } from 'react-native';

import {SubmitButton, DropDownSelector} from '../../../components';

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
            <View style={styles.formContainer}>
                <DropDownSelector />
            </View>
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
    },
    formContainer: {
        width: width - 30,
        marginLeft: 15,
        paddingTop: 25
    }
})