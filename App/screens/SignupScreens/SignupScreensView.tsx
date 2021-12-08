import React, { FC, useState } from 'react';
import { View, Text, Animated, Button, Dimensions, StyleSheet } from 'react-native';
import EmojiHeader from './components/EmojiHeader';
import StatusBar from './components/StatusBar';

const SignupScreensView: FC = (props) => {

    return(
        <View>
            <EmojiHeader />
            <StatusBar />
        </View>
    )
};

const styles = StyleSheet.create({
    
})

export default SignupScreensView