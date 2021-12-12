import React, {FC} from 'react';
import { View, Text, StyleSheet, Dimensions, Switch } from 'react-native';

import {LargeLabeledInput, AvailabilitySwitch, SexCheckbox, SubmitButton} from '../../../components';

import EmojiHeader from './EmojiHeader';
import StatusBar from './StatusBar';

const {height, width} = Dimensions.get('window');

const SignupScreen1 = () => {

    return(
        <View style={styles.container}>
            <EmojiHeader page={1} />
            <StatusBar page={1} />
            <Text style={styles.header}>Basic details</Text>
            <View style={styles.formContainer}>
                <LargeLabeledInput label='Description (optional)'/>
                <AvailabilitySwitch />
                <SexCheckbox />
                <SubmitButton label='Continue' username='' password='' email='' resetInput={() => null} signUp={false} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: '100%',
    },
    input: {
        width: '100%',
        borderColor: '#000',
        borderWidth: 1
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
        paddingTop: 15
    }
})

export default SignupScreen1;