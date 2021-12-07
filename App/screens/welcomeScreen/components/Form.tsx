import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import {LabeledInput,SubmitButton} from '../../../components/index';
import Link from './Link';

const {width} = Dimensions.get('window');

const Form = () => {

    const [isSignup, setIsSignup] = useState(true);

    const toggle = () => {
        setIsSignup(prev => !prev)
    }

    const signupContainer = (
        <>
            <Text style={styles.header}>Create an account</Text>
            <LabeledInput label='Username' />
            <LabeledInput label='Email' />
            <LabeledInput label='Password' />
            <SubmitButton label='Create account' />
            <Link toggle={toggle} label='already have an account?' label2='Login' />
        </>
    )

    const loginContainer = (
        <>
            <Text style={styles.header}>Log in</Text>
            <LabeledInput label='Email' />
            <LabeledInput label='Password' />
            <SubmitButton label='Log in' />
            <Link toggle={toggle} label="don't have an account?" label2='Signup' />
        </>
    )

    return(
        <View style={styles.container}>
            {isSignup ? signupContainer : loginContainer}
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