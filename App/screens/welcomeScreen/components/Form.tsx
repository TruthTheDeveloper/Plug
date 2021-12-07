import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';

import {LabeledInput,SubmitButton} from '../../../components/index';
import Link from './Link';

const {width} = Dimensions.get('window');

const Form = () => {
    const [anime, setAnime] = useState(new Animated.ValueXY({x: width, y: 0}))
    // const value = useState(new Animated.ValueXY({x: width, y: 0}))[0]
    // const value2 = useState(new Animated.ValueXY({x: width, y: 0}))[0]
    const [isSignup, setIsSignup] = useState(true);

    useEffect(() => {
        Animated.timing(anime, {
            toValue: {x: 0, y: 0},
            duration: 500,
            useNativeDriver: false
        }).start();
    },[])

    const toggle = () => {
        setIsSignup(prev => !prev);
        Animated.timing(anime, {
            toValue: {x: 0, y: 0},
            duration: 500,
            useNativeDriver: false
        }).start()
    }

    const signupContainer = (
        <Animated.View style={anime.getLayout()}>
            <Text style={styles.header}>Create an account</Text>
            <LabeledInput label='Username' />
            <LabeledInput label='Email' />
            <LabeledInput label='Password' />
            <SubmitButton label='Create account' />
            <Link toggle={toggle} label='already have an account?' label2='Login' />
        </Animated.View>
    )

    const loginContainer = (
        <Animated.View style={anime.getLayout()}>
            <Text style={styles.header}>Log in</Text>
            <LabeledInput label='Email' />
            <LabeledInput label='Password' />
            <SubmitButton label='Log in' />
            <Link toggle={toggle} label="don't have an account?" label2='Signup' />
        </Animated.View>
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