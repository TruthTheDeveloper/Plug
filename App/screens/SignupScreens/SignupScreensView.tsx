import React, { FC, useState } from 'react';
import { View, Text, Animated, Button, Dimensions, StyleSheet } from 'react-native';

import SignupScreen1 from './components/SignupScreen1';
import SignupScreen2 from './components/SignupScreen2';

const SignupScreensView: FC = (props) => {

    return(
        <>
            <SignupScreen2 />
        </>
    )
};

const styles = StyleSheet.create({
    
})

export default SignupScreensView